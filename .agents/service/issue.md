# Project Planning & Initial Setup Issues: Stutify

This document outlines the foundational tasks required to kickstart the Stutify project, based on the MVP (v0.1) defined in the PRD.

## Phase 1: Infrastructure & Repository Setup

### [Issue #1] Project Initialization and Repository Structure

**Description**: Setup the basic monorepo structure for Frontend and Backend.
**Tasks**:

- [ ] Setup `frontend/` directory using Vite + React + TypeScript.
- [ ] Setup `backend/` directory using Node.js + Express + TypeScript.
- [ ] Configure ESLint and Prettier for consistent code style across the project.
- [ ] Create basic `.gitignore` for both environments.

### [Issue #2] Database Schema Design & Migration Setup

**Description**: Define the initial PostgreSQL schema for users, schedules, and assignments.
**Tasks**:

- [ ] Setup Drizzle or TypeORM as the ORM.
- [ ] Create `User` table (OAuth fields, profile).
- [ ] Create `Schedule` table (subject, day, time, location).
- [ ] Create `Assignment` table (title, description, deadline, priority, status).
- [ ] Setup local database environment using Docker Compose (PostgreSQL).

## Phase 2: Authentication & Integrations

### [Issue #3] Google OAuth 2.0 Integration

**Description**: Implement secure authentication using Google OAuth to allow for future Calendar sync.
**Tasks**:

- [ ] Configure Google Cloud Console Project.
- [ ] Implement backend auth routes (Passport.js or similar).
- [ ] Create JWT session management.
- [ ] Setup frontend Login page and Protected Routes.

### [Issue #4] Google Calendar API Basic Sync

**Description**: Establish the connection to fetch user's academic calendar events.
**Tasks**:

- [ ] Request necessary Google Scopes (`calendar.readonly`).
- [ ] Implement service to fetch and normalize calendar events into Stutify format.
- [ ] Create a basic sync button on the frontend.

## Phase 3: MVP Core Features

### [Issue #5] Unified Dashboard UI (MVP Layout)

**Description**: Build the main dashboard layout to display schedules and assignments.
**Tasks**:

- [ ] Design and implement the Sidebar/Navigation.
- [ ] Create "Today's Schedule" widget.
- [ ] Create "Upcoming Assignments" list.
- [ ] Implement basic responsive layout (Mobile/Desktop).

### [Issue #6] Task Management Logic

**Description**: Enable users to manually add, edit, and delete assignments.
**Tasks**:

- [ ] CRUD operations for Assignments on the backend.
- [ ] Frontend form for adding/editing tasks (title, deadline, priority).
- [ ] Implementation of task status (To-do, Done).

### [Issue #7] Basic Browser Notification System

**Description**: Implement the first layer of the "aggressive" notification system.
**Tasks**:

- [ ] Setup Browser Notification API on the frontend.
- [ ] Create a background worker or simple timer to check for approaching deadlines.
- [ ] Display browser alerts 1 hour and 30 minutes before a deadline.
