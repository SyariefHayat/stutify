import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { db } from '../db';
import { users } from '../db/schema';
import { eq } from 'drizzle-orm';
import dotenv from 'dotenv';

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL!,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { id, displayName, emails, photos } = profile;
        const email = emails?.[0]?.value;
        const avatarUrl = photos?.[0]?.value;

        if (!email) {
          return done(new Error('No email associated with this Google account'));
        }

        // Check if user exists
        const [existingUser] = await db.select().from(users).where(eq(users.email, email)).limit(1);

        if (existingUser) {
          return done(null, existingUser);
        }

        // Create new user if not exists
        const [newUser] = await db.insert(users).values({
          googleId: id,
          name: displayName,
          email: email,
          avatarUrl: avatarUrl,
        }).returning();

        return done(null, newUser);
      } catch (err) {
        return done(err as Error);
      }
    }
  )
);

export default passport;
