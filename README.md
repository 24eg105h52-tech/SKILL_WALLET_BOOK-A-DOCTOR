# BOOK A DOCTOR USING MERN
## Full Stack Development Documentation

This documentation provides a comprehensive overview of the **MedicareBook (Book a Doctor)** platform, built using the MERN stack.

---

## 1. Introduction

* **Project Title:** Book a Doctor Using MERN
* **Domain:** Healthcare Management System
* **Technology Stack:** MongoDB, Express.js, React.js, Node.js
* **Objective:** To provide an online platform for patients to search doctors, book appointments, upload medical records, and manage consultations digitally.

---

## 2. Project Overview

### Purpose
The system simplifies healthcare appointment management by connecting patients, doctors, and administrators through a centralized web platform.

### Key Features
* **User Registration & Login:** Safe authentication using hashed passwords.
* **Doctor Registration & Approval:** Users can apply to be registered doctors, which the admin reviews and approves.
* **Doctor Search & Filtering:** Patients can browse and filter through registered doctors.
* **Appointment Booking:** Patients can request appointments and upload relevant medical records.
* **Appointment History:** Track previous and upcoming consultations.
* **Notifications:** Alert system notifying users of appointment status changes and new requests.
* **Document Upload:** Support for uploading prescriptions or records.
* **Admin Dashboard:** Control panel to approve doctors, manage users, and monitor appointments.
* **Doctor Dashboard:** Dedicated view for doctors to manage schedules and accept/reject bookings.

---

## 3. System Requirements

### Software Requirements
* **Operating System:** Windows 10/11, Linux, macOS
* **Runtime Environment:** Node.js v16+
* **Package Manager:** npm v8+
* **Database:** MongoDB (Local or Atlas)
* **IDE:** VS Code / Gemini Code Assist
* **Testing & Version Control:** Git, GitHub, Postman

---

## 4. Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js, Bootstrap, Material UI |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | JWT (JSON Web Tokens), bcryptjs |
| **API Client** | Axios |
| **Date Handling** | Moment.js |

---

## 5. Project Architecture

* **Frontend Layer:** React Components, Axios API Requests, Material UI styling, Bootstrap forms.
* **Backend Layer:** Express REST APIs, Route Handlers, Middlewares (authentication and file uploads).
* **Database Layer:** MongoDB Collections defined via Mongoose Schemas.

---

## 6. MVC Architecture

### Model Layer
* **User Model:** Stores patient and administrator accounts.
* **Doctor Model:** Stores professional profiles, specializations, fees, and approval status.
* **Appointment Model:** Tracks status, dates, patient information, and uploaded medical documentation.

### View Layer
* **React Frontend:** Implements the main landing pages, registration, and user roles (Patient/Doctor/Admin Homepages).

### Controller Layer
* **User Controller:** Handles registration, logging in, retrieving profile info, booking appointments, and notification management.
* **Doctor Controller:** Handles retrieving doctor appointments and updating appointment status.
* **Admin Controller:** Handles user/doctor list queries and approving/rejecting doctor applications.

---

## 7. Database Design

### Users Collection (`users`)
* `_id` (ObjectId)
* `fullName` (String)
* `email` (String)
* `password` (String, hashed)
* `phone` (String)
* `notification` (Array)
* `seennotification` (Array)
* `isdoctor` (Boolean)

### Doctors Collection (`doctors`)
* `_id` (ObjectId)
* `userId` (String)
* `fullName` (String)
* `specialization` (String)
* `experience` (String)
* `fees` (Number)
* `timings` (Array)
* `status` (String: `pending`, `approved`, `rejected`)

### Appointments Collection (`appointments`)
* `_id` (ObjectId)
* `userId` (String)
* `doctorId` (String)
* `userInfo` (Object)
* `doctorInfo` (Object)
* `date` (String)
* `document` (Object: `filename`, `path`)
* `status` (String: `pending`, `approved`, `rejected`)

---

## 8. ER Diagram
*(Please refer to the `Documentation.pdf` file in the root directory for the visual ER Diagram)*

---

## 9. User Roles & Capabilities

### 👤 Patient
* Register / Log In.
* Browse and search approved doctors.
* Book appointments and upload medical records.
* View appointment history and notifications.

### 🥼 Doctor
* Submit a professional doctor profile application.
* View assigned appointments.
* Accept or reject appointment requests.
* Download uploaded patient medical documents.

### 🔑 Admin
* Manage registered users.
* Review pending doctor applications (Approve / Reject).
* Monitor all appointment statistics.

---

## 10. User Flow
```
User Registration ➔ Login ➔ Browse Approved Doctors ➔ Select Doctor & Timings ➔ Book Appointment & Upload Docs ➔ Doctor Approves/Rejects ➔ Email/Notification Alert ➔ Session Consultation
```

---

## 11. Project Folder Structure

The project is structured into two main subdirectories:

```
SKILL_WALLET_BOOK-A-DOCTOR/
├── backend/                  # Node/Express Backend Server
│   ├── config/               # Database connection settings
│   ├── controllers/          # Business logic handlers
│   ├── middlewares/          # JWT Auth and validation logic
│   ├── routes/               # API endpoint routing
│   ├── schemas/              # Mongoose DB schemas
│   ├── uploads/              # Uploaded patient medical records
│   ├── .env                  # Port, MongoDB, JWT secret configuration
│   └── index.js              # Application entry point
│
└── frontend/                 # React Frontend Application
    ├── public/               # Static assets & index.html
    ├── src/
    │   ├── components/       # App layout pages (Admin, Common, User)
    │   ├── images/           # System mockup designs
    │   ├── App.jsx           # Client side router and main layout
    │   └── main.jsx          # DOM rendering and bootstrap styles setup
    ├── vite.config.js        # Vite compilation tool config
    └── package.json          # Dependencies & scripts
```

---

## 12. API Documentation

### User Routes (`/api/user`)
* `POST /register` - Register a new account.
* `POST /login` - Log in and obtain JWT.
* `POST /getuserdata` - Get current user profile details (requires token).
* `POST /registerdoc` - Submit a doctor registration application.
* `GET /getalldoctorsu` - Fetch all approved doctors.
* `POST /getappointment` - Request a doctor consultation & upload documents.
* `GET /getuserappointments` - Fetch the patient's booked appointments.

### Admin Routes (`/api/admin`)
* `GET /getallusers` - Retrieve lists of registered users.
* `GET /getalldoctors` - Retrieve lists of registered doctors.
* `POST /getapprove` - Approve a doctor profile application.
* `POST /getreject` - Reject a doctor profile application.

### Doctor Routes (`/api/doctor`)
* `GET /getdoctorappointments` - Retrieve list of appointments assigned to the logged-in doctor.
* `POST /handlestatus` - Approve or reject a patient's appointment request.
* `GET /getdocumentdownload` - Download medical attachments uploaded by patients.

---

## 13. Authentication & Security
* **Password Hashing:** Passwords are encrypted before database insertion using `bcryptjs` with salt rounds.
* **Access Tokens (JWT):** Secure endpoints require a Bearer token in the `Authorization` header. A custom `authMiddleware` validates requests using `process.env.JWT_KEY`.

---

## 14. Known Limitations & Future Enhancements
* **Current Limitations:** No live chat, no video calls, and payment gateway simulation only.
* **Future Enhancements:**
  1. Integrating Video Consultations via WebRTC.
  2. Adding an online payment gateway (Stripe/Razorpay).
  3. SMS alerts for appointment confirmation.
  4. AI-based symptoms checker.
