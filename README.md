# JobNest — Full-Stack Job Portal

A full-stack job portal built with the **MERN stack** where recruiters can post jobs and candidates can discover, filter, and apply for them — all in one place.

---

## Features

**For Job Seekers**
- Browse and search jobs by keyword
- Filter jobs by category
- View detailed job descriptions
- Apply for jobs with one click
- Manage your profile — bio, skills, resume upload

**For Recruiters**
- Register and manage your company profile
- Post new job openings
- View all applicants for each job
- Update application status (accepted / rejected)

**General**
- JWT-based authentication with secure HTTP-only cookies
- Role-based access control (student / recruiter)
- Profile photo and resume upload via Cloudinary
- Persistent login state with Redux Persist

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS, shadcn/ui |
| State Management | Redux Toolkit, Redux Persist |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Auth | JWT, bcryptjs |
| File Storage | Cloudinary |
| HTTP Client | Axios |

---

## Project Structure

```
JobNest/
├── backend/
│   ├── controllers/        # Business logic
│   ├── middlewares/        # Auth middleware
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── utils/              # DB, Cloudinary, DataURI helpers
│   ├── .env                # Environment variables (not committed)
│   └── index.js            # Entry point
│
└── frontend/
    ├── src/
    │   ├── components/     # UI components (auth, admin, shared, ui)
    │   ├── hooks/          # Custom data-fetching hooks
    │   ├── redux/          # Store, slices
    │   └── utils/          # API endpoint constants
    └── index.html
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- Cloudinary account (for file uploads)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/JobNest.git
cd JobNest
```

### 2. Configure environment variables

Create a `.env` file inside the `backend/` folder:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/jobPortal
SECRET_KEY=your_jwt_secret_key

CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

### 3. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 4. Run the application

Open two terminals:

**Terminal 1 — Backend**
```bash
cd backend
npm run dev
```
> Server runs at `http://localhost:3000`

**Terminal 2 — Frontend**
```bash
cd frontend
npm run dev
```
> App runs at `http://localhost:5173`

---

## API Overview

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/user/register` | Register a new user |
| POST | `/api/v1/user/login` | Login |
| GET | `/api/v1/user/logout` | Logout |
| POST | `/api/v1/user/profile/update` | Update user profile |
| POST | `/api/v1/company/register` | Register a company |
| GET | `/api/v1/company/get` | Get all companies (recruiter) |
| PUT | `/api/v1/company/update/:id` | Update company info |
| POST | `/api/v1/job/post` | Post a new job |
| GET | `/api/v1/job/get` | Get all jobs |
| GET | `/api/v1/job/getadminjobs` | Get recruiter's jobs |
| GET | `/api/v1/application/apply/:id` | Apply for a job |
| GET | `/api/v1/application/get` | Get applied jobs |
| POST | `/api/v1/application/status/:id/update` | Update application status |

---

## Author

**Akshit Kumar**  
Built with focus on clean architecture and practical full-stack development.
