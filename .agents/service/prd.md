# PRD: Stutify - All-in-One Student Life Management System

## 1. Executive Summary

- **Problem Statement**: Mahasiswa sering kali kewalahan mengelola jadwal kuliah, tumpukan tugas, catatan materi, dan file riset yang tersebar di berbagai platform, menyebabkan penurunan produktivitas dan stres akibat *deadline* yang terlewat.
- **Proposed Solution**: Platform web terpusat yang mengintegrasikan kalender jadwal, manajemen tugas berbasis prioritas, editor catatan *rich-text* (ala Notion), dan penyimpanan file riset dalam satu alur kerja yang mulus.
- **Success Criteria**:
    - **Retention**: Pengguna login setidaknya 1x setiap hari selama hari kuliah.
    - **Efficiency**: Waktu pencarian referensi riset berkurang di bawah 5 detik.
    - **Reliability**: 0% tugas terlewat berkat sistem notifikasi agresif.
    - **Accuracy**: Sinkronisasi jadwal eksternal (Google Calendar) memiliki latensi < 1 menit.

---

## 2. User Experience & Functionality

### User Personas
- **The Busy Student**: Mahasiswa dengan jadwal padat, aktif di organisasi, dan memiliki banyak proyek riset paralel yang membutuhkan pengingat ketat.

### User Stories & Acceptance Criteria
| User Story | Acceptance Criteria (AC) |
| :--- | :--- |
| **As a student**, I want to see my daily class schedule and assignments in one unified dashboard. | - Dashboard menampilkan jadwal hari ini dan tugas terdekat.<br>- Sinkronisasi otomatis dengan Google Calendar/Outlook. |
| **As a student**, I want an aggressive notification system for deadlines. | - Notifikasi muncul di Browser, Email, dan (opsional) WhatsApp/Telegram.<br>- Pengulangan notifikasi setiap 30 menit saat mendekati 2 jam terakhir *deadline*. |
| **As a student**, I want to take notes and link them to specific classes or research files. | - Editor catatan mendukung Markdown dan blok (ala Notion).<br>- Catatan dapat di-tag ke jadwal kuliah atau file riset tertentu. |
| **As a researcher**, I want to upload and categorize research files (PDF, DOCX). | - Mendukung *drag-and-drop* file.<br>- Pencarian file berdasarkan nama, tag, atau kategori riset. |

### Non-Goals
- Kolaborasi *real-time* antar pengguna (fokus pada penggunaan personal).
- Pemrosesan dokumen tingkat lanjut (seperti editor PDF internal).

---

## 3. AI System Requirements (Future Enhancement)
- **Tool Requirements**: AI untuk merangkum catatan kuliah dan file riset (PDF) menjadi poin-poin penting.
- **Evaluation Strategy**: Akurasi rangkuman >= 90% dibandingkan dengan teks asli (manual review).

---

## 4. Technical Specifications

- **Architecture Overview**:
    - **Frontend**: React (TypeScript) untuk antarmuka yang responsif dan interaktif.
    - **Backend**: Node.js (Express) dengan PostgreSQL untuk data terstruktur (jadwal/catatan).
    - **File Storage**: AWS S3 atau Supabase Storage untuk file riset.
- **Integration Points**:
    - **Auth**: Google OAuth 2.0 (agar mudah sinkron kalender).
    - **API**: Google Calendar API, Microsoft Graph API.
- **Security & Privacy**:
    - Enkripsi file saat istirahat (*at rest*).
    - Kebijakan privasi yang memastikan catatan riset tidak dapat diakses pihak luar.

---

## 5. Risks & Roadmap

### Phased Rollout
1. **MVP (v0.1)**: Manajemen Jadwal & Tugas + Integrasi Google Calendar + Notifikasi Browser Dasar.
2. **v1.1**: Sistem Catatan (Rich Text) + File Storage (Riset).
3. **v2.0**: Notifikasi Agresif (Multi-channel) + Fitur Pencarian Global + AI Summarization.

### Technical Risks
- **API Quota**: Batasan pada API Google Calendar untuk sinkronisasi masif.
- **Storage Cost**: Biaya penyimpanan file riset yang besar jika tidak dibatasi per user.
