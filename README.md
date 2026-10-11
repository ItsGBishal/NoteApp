# 📝 NoteApp

A clean, responsive full-stack note-taking web application built with the **MERN** stack (MongoDB, Express, React, Node.js). It provides a fast, intuitive workspace for managing daily thoughts, tasks, and notes with real-time UI updates.

---

## 📖 About the Application

**NoteApp** is designed to provide a distraction-free, modern note management experience. It allows users to quickly capture notes, update existing content inline, and organize their ideas within an accessible dark-themed interface.

### Key Highlights
- **Full CRUD Operations**: Create, view, edit, and delete notes seamlessly.
- **Instant UI Updates**: State changes reflect immediately in the interface without requiring page refreshes.
- **Responsive Dark Theme**: Modern, accessible UI tailored for both mobile and desktop screens.
- **RESTful API**: Clean client-server separation powered by structured HTTP endpoints.

---

## 🛠️ Tech Stack

### Frontend
- **React 19**: Modern component-based user interface.
- **Vite**: Ultra-fast build tool and development server.
- **Tailwind CSS v4**: Utility-first styling for a sleek, responsive dark UI.
- **React Context API**: Centralized global state management across components.
- **Axios**: Promised-based HTTP client for API communication.
- **React Router DOM**: Client-side page navigation.
- **Lucide React**: Clean and minimal UI iconography.

### Backend
- **Node.js**: Asynchronous JavaScript runtime environment.
- **Express.js (v5)**: Minimalist web framework for building REST APIs.
- **CORS**: Cross-Origin Resource Sharing middleware for secure client requests.
- **Dotenv**: Environment variable configuration.

### Database
- **MongoDB**: NoSQL document database for flexible JSON-like note storage.
- **Mongoose (v8)**: Object Data Modeling (ODM) library for schema validation and timestamps.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/ItsGBishal/NoteApp.git
cd NoteApp
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```env
PORT=4002
MONGO_URL=your_mongodb_connection_string
```

Run the backend server:
```bash
npm start
```

### 3. Frontend Setup
In a new terminal:
```bash
cd frontend
npm install
npm run dev
```

The app will be running at `http://localhost:5173`.

---

## 👤 Author

**Bishal Ghosh**
- GitHub: [@ItsGBishal](https://github.com/ItsGBishal)
