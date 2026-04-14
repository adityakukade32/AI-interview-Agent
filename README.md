<h1 align="center">
  InterviewIQ.AI 🤖 Platform
</h1>

<p align="center">
  <b>A comprehensive AI-powered Mock Interview platform built with React, Node.js, and MongoDB.</b>
</p>

## ✨ Features
- **Role-based Mock Interviews**: Dynamically generated technical and behavioral questions tailored to the chosen role and experience level.
- **Smart Voice & Timer Simulation**: Experience real-world interview pressure with speech capabilities and timed responses.
- **Resume-Driven Questioning**: Upload your resume and let the AI analyze it to ask deeply contextual questions about your projects.
- **Comprehensive PDF Reports**: After the interview, receive detailed feedback on your technical accuracy, communication skills, and confidence.
- **History & Analytics**: Track your progress over time through visual graphs.
- **Payment Integration**: Unlock premium sessions via the seamless Razorpay credit system.

## 🛠️ Technology Stack
**Frontend:**
- React (Vite)
- Tailwind CSS & Framer Motion (for dynamic UI)
- Redux Toolkit
- Firebase Authentication

**Backend:**
- Node.js & Express.js
- MongoDB (Mongoose)
- Razorpay for payments
- JSON Web Tokens (JWT) for secure state management
- OpenRouter API (Advanced Answer Evaluation)

---

## 🚀 How to Run the Project Locally

Because this project is split into a **client** and a **server**, you will need two separate terminal windows.

### 1. Database Setup
Make sure you have MongoDB running on your local machine on port `27017` (or provide an active MongoDB Atlas URL).

### 2. Configure Environment Variables
You must configure the `.env` variables in both directories.

**A. In `server/.env`:**
```env
PORT=8000
MONGODB_URL=mongodb://127.0.0.1:27017/interviewIQ
JWT_SECRET="YOUR_JWT_SECRET_STRING"
OPENROUTER_API_KEY="YOUR_OPENROUTER_API_KEY"
RAZORPAY_KEY_ID="YOUR_RAZORPAY_KEY"
RAZORPAY_KEY_SECRET="YOUR_RAZORPAY_SECRET"
```

**B. In `client/.env`:**
```env
VITE_FIREBASE_APIKEY="YOUR_FIREBASE_API_KEY"
VITE_RAZORPAY_KEY_ID="YOUR_RAZORPAY_KEY"
```
*(Also ensure your `client/src/utils/firebase.js` is updated with your specific Firebase Project Configuration)*.

### 3. Install Dependencies
Open two terminal windows pointing to the root of the project.

**Terminal 1 (Backend):**
```bash
cd server
npm install
```

**Terminal 2 (Frontend):**
```bash
cd client
npm install
```

### 4. Start the Application
**Terminal 1 (Backend):**
```bash
# Still inside the /server directory
npm run dev
```

**Terminal 2 (Frontend):**
```bash
# Still inside the /client directory
npm run dev
```

The Application will be running securely on **http://localhost:5173** (or whatever port Vite provisions).

---

## 🔒 A Note on Firebase Authentication
If you receive a `CONFIGURATION_NOT_FOUND` error upon logging in, your Firebase project lacks **Google Authentication**. Go to the Firebase Console -> Build -> Authentication -> Sign-in Method, and enable **Google**. 

*(Alternatively, you can click "Continue as Guest" to test the app safely without hooking up Firebase!)*
