# Backend Integration Guide

Complete guide for integrating backend services with The Job Shop website.

## 📋 Table of Contents

1. [Backend Options](#backend-options)
2. [Option 1: Node.js + Express Backend](#option-1-nodejs--express-backend)
3. [Option 2: Supabase (Recommended)](#option-2-supabase-recommended)
4. [Option 3: Firebase](#option-3-firebase)
5. [API Integration Examples](#api-integration-examples)
6. [Form Handling](#form-handling)
7. [File Uploads](#file-uploads)
8. [Database Schema](#database-schema)

---

## Backend Options

### Quick Comparison

| Feature | Node.js/Express | Supabase | Firebase |
|---------|----------------|----------|----------|
| Setup Time | Medium | Fast | Fast |
| Cost | Hosting required | Free tier available | Free tier available |
| Database | Your choice | PostgreSQL | NoSQL |
| Authentication | Manual | Built-in | Built-in |
| File Storage | Manual | Built-in | Built-in |
| Real-time | Manual | Built-in | Built-in |

---

## Option 1: Node.js + Express Backend

### Step 1: Create Backend Folder

```bash
mkdir backend
cd backend
npm init -y
```

### Step 2: Install Dependencies

```bash
npm install express cors dotenv multer nodemailer pg mongoose
npm install -D typescript @types/express @types/node @types/cors ts-node nodemon
```

### Step 3: Create Backend Structure

```
backend/
├── src/
│   ├── index.ts           # Server entry point
│   ├── routes/
│   │   ├── jobs.ts        # Job listings routes
│   │   ├── applications.ts # Application routes
│   │   └── contact.ts     # Contact form routes
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── config/
├── uploads/               # File uploads folder
├── .env                   # Environment variables
├── package.json
└── tsconfig.json
```

### Step 4: Server Setup (`backend/src/index.ts`)

```typescript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
import jobRoutes from './routes/jobs';
import applicationRoutes from './routes/applications';
import contactRoutes from './routes/contact';

app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Step 5: Environment Variables (`backend/.env`)

```env
# Server
PORT=5000
NODE_ENV=development

# Database (PostgreSQL example)
DATABASE_URL=postgresql://username:password@localhost:5432/jobshop

# Email (for contact forms)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# JWT Secret (for authentication)
JWT_SECRET=your-super-secret-key-change-this

# File Upload
MAX_FILE_SIZE=5242880  # 5MB in bytes
```

### Step 6: Contact Form Route (`backend/src/routes/contact.ts`)

```typescript
import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Name, email, and message are required' 
      });
    }

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'hr@jobshopindia.com', // Your HR email
      subject: `New Contact Form: ${subject || 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Failed to send message' 
    });
  }
});

export default router;
```

### Step 7: Resume Upload Route (`backend/src/routes/applications.ts`)

```typescript
import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/resumes/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'resume-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: Number(process.env.MAX_FILE_SIZE) || 5242880 // 5MB
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF and DOC files are allowed'));
    }
  }
});

// POST /api/applications/upload-resume
router.post('/upload-resume', upload.single('resume'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { fullName, email, phone, position, experience } = req.body;

    // Save to database
    // const application = await saveToDatabase({
    //   fullName,
    //   email,
    //   phone,
    //   position,
    //   experience,
    //   resumePath: req.file.path
    // });

    res.status(200).json({
      success: true,
      message: 'Resume uploaded successfully',
      fileName: req.file.filename
    });
  } catch (error) {
    console.error('Resume upload error:', error);
    res.status(500).json({ error: 'Failed to upload resume' });
  }
});

export default router;
```

### Step 8: Update Frontend to Use Backend

Create an API service file (`src/services/api.ts`):

```typescript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  // Contact Form
  submitContact: async (data: {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
  }) => {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Resume Upload
  uploadResume: async (formData: FormData) => {
    const response = await fetch(`${API_URL}/applications/upload-resume`, {
      method: 'POST',
      body: formData, // Don't set Content-Type header for FormData
    });
    return response.json();
  },

  // Employer Form
  submitEmployerForm: async (data: any) => {
    const response = await fetch(`${API_URL}/employers/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};
```

### Step 9: Create `.env` for Frontend

Create `.env` in root directory:

```env
VITE_API_URL=http://localhost:5000/api
```

### Step 10: Run Both Servers

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
npm run dev
```

---

## Option 2: Supabase (Recommended)

### Why Supabase?

- ✅ Free tier (up to 500MB database)
- ✅ PostgreSQL database
- ✅ Built-in authentication
- ✅ File storage
- ✅ Real-time subscriptions
- ✅ Auto-generated REST API
- ✅ No backend code needed

### Step 1: Create Supabase Project

1. Go to https://supabase.com
2. Sign up / Login
3. Click "New Project"
4. Set project name, database password
5. Choose region (Asia Pacific recommended for India)
6. Wait for setup to complete

### Step 2: Install Supabase Client

```bash
npm install @supabase/supabase-js
```

### Step 3: Create Supabase Client (`src/lib/supabase.ts`)

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### Step 4: Update `.env`

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Step 5: Create Database Tables

In Supabase Dashboard → SQL Editor, run:

```sql
-- Contact submissions table
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Job applications table
CREATE TABLE job_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  position TEXT,
  experience TEXT,
  resume_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Employer requirements table
CREATE TABLE employer_requirements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  position_title TEXT NOT NULL,
  department TEXT,
  experience_required TEXT,
  qualifications TEXT,
  job_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE employer_requirements ENABLE ROW LEVEL SECURITY;

-- Create policies (allow insert for everyone)
CREATE POLICY "Allow public insert" ON contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public insert" ON job_applications
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public insert" ON employer_requirements
  FOR INSERT TO anon WITH CHECK (true);
```

### Step 6: Use Supabase in Components

Example: Contact Form with Supabase

```typescript
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([data]);

      if (error) throw error;

      setMessage('Message sent successfully!');
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
```

### Step 7: File Upload with Supabase Storage

```typescript
// Upload resume
const uploadResume = async (file: File) => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `resumes/${fileName}`;

  // Upload file to storage
  const { error: uploadError } = await supabase.storage
    .from('resumes')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  // Get public URL
  const { data } = supabase.storage
    .from('resumes')
    .getPublicUrl(filePath);

  return data.publicUrl;
};
```

---

## Option 3: Firebase

### Step 1: Create Firebase Project

1. Go to https://console.firebase.google.com
2. Create new project
3. Add web app
4. Copy configuration

### Step 2: Install Firebase

```bash
npm install firebase
```

### Step 3: Initialize Firebase (`src/lib/firebase.ts`)

```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
```

### Step 4: Use Firestore

```typescript
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

// Submit contact form
const submitContact = async (data: any) => {
  await addDoc(collection(db, 'contact_submissions'), {
    ...data,
    createdAt: new Date(),
  });
};
```

---

## Database Schema

### Recommended Tables

```sql
-- Users (if implementing authentication)
users
  - id (UUID)
  - email (TEXT)
  - password_hash (TEXT)
  - role (TEXT) -- 'admin', 'hr', 'candidate'
  - created_at (TIMESTAMP)

-- Job Listings
jobs
  - id (UUID)
  - title (TEXT)
  - company (TEXT)
  - location (TEXT)
  - type (TEXT) -- 'full-time', 'part-time', 'contract'
  - experience (TEXT)
  - salary_range (TEXT)
  - description (TEXT)
  - requirements (TEXT[])
  - posted_date (TIMESTAMP)
  - status (TEXT) -- 'active', 'closed'

-- Applications
applications
  - id (UUID)
  - job_id (UUID, foreign key)
  - candidate_name (TEXT)
  - email (TEXT)
  - phone (TEXT)
  - resume_url (TEXT)
  - cover_letter (TEXT)
  - status (TEXT) -- 'pending', 'reviewed', 'shortlisted', 'rejected'
  - applied_at (TIMESTAMP)

-- Contact Submissions
contact_submissions
  - id (UUID)
  - name (TEXT)
  - email (TEXT)
  - phone (TEXT)
  - subject (TEXT)
  - message (TEXT)
  - status (TEXT) -- 'new', 'read', 'replied'
  - created_at (TIMESTAMP)

-- Employer Requirements
employer_requirements
  - id (UUID)
  - company_name (TEXT)
  - contact_person (TEXT)
  - email (TEXT)
  - phone (TEXT)
  - position_title (TEXT)
  - requirements (TEXT)
  - status (TEXT) -- 'pending', 'in-progress', 'closed'
  - created_at (TIMESTAMP)
```

---

## Email Integration

### Using SendGrid

```bash
npm install @sendgrid/mail
```

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const sendEmail = async (to: string, subject: string, html: string) => {
  await sgMail.send({
    to,
    from: 'noreply@jobshopindia.com',
    subject,
    html,
  });
};
```

### Using Nodemailer (Gmail)

```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD, // Use App Password, not regular password
  },
});

await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: 'recipient@example.com',
  subject: 'Subject',
  html: '<p>Email content</p>',
});
```

---

## Security Best Practices

1. **Never commit `.env` files** - Add to .gitignore
2. **Use environment variables** for all sensitive data
3. **Validate all inputs** on both frontend and backend
4. **Sanitize user input** to prevent XSS attacks
5. **Use HTTPS** in production
6. **Implement rate limiting** to prevent spam
7. **Add CORS** properly configured for your domain
8. **Hash passwords** if implementing authentication (use bcrypt)
9. **Validate file uploads** - check file type, size, scan for viruses
10. **Use JWT** for authentication tokens

---

## Next Steps

1. Choose your backend option (Supabase recommended for fastest setup)
2. Set up database tables
3. Implement API endpoints or Supabase functions
4. Update frontend components to use real API
5. Test all forms and features
6. Deploy backend (if using Node.js)
7. Update environment variables for production
8. Set up email notifications
9. Implement error tracking (Sentry, LogRocket)
10. Set up analytics (Google Analytics, Mixpanel)

---

## Need Help?

- Supabase Docs: https://supabase.com/docs
- Firebase Docs: https://firebase.google.com/docs
- Express.js Docs: https://expressjs.com/
- Node.js Docs: https://nodejs.org/docs/

Good luck with your backend integration! 🚀
