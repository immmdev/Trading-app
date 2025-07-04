# Zerodha Clone – A Full-Stack Stock Trading Simulation Platform

[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/API-Express.js-lightgrey?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)](https://mongodb.com/)
[![JWT](https://img.shields.io/badge/Auth-JWT-orange?logo=jsonwebtokens)](https://jwt.io/)
[![Bootstrap](https://img.shields.io/badge/Style-Bootstrap-7952B3?logo=bootstrap)](https://getbootstrap.com/)

A production-ready clone of the Zerodha stock trading platform. This full-stack web application simulates real-world trading operations, including user authentication, order placement, watchlist management, holdings overview, and wallet integration.

---

## 📌 Project Summary

The Zerodha Clone aims to provide users with a seamless stock trading simulation platform. It emphasizes core financial functionalities like buying and selling stocks, tracking orders, and visualizing holdings. Built on the MERN stack (MongoDB, Express.js, React, Node.js), this project is divided into three independent modules:

- **Frontend** – Landing page (React)
- **Dashboard** – Authenticated trading interface with Login & Signup (React)
- **Backend** – RESTful API handling , wallet, holdings, and trades (Express.js)

---

## 🎯 Core Features

### Authentication & Authorization

- Secure signup and login using JWT tokens
- Auto-login after successful registration
- Protected dashboard routes via token validation
- JWT stored in `localStorage` and extracted to identify users

### Trading Operations

- Place Buy and Sell orders
- Add stocks to personal Watchlist
- Track executed orders, holdings, and positions
- Data stored and filtered per-user

### Wallet System

- User wallet for balance management
- Deposit and withdraw amounts
- Transactions validated with backend logic

### UI/UX & Interactivity

- Dual React apps for public and protected views
- Tooltips, modals, and input validations
- Component-based architecture for scalability
- Bootstrap styling with mobile responsiveness

---

## ⚙️ Tech Stack

| Layer               | Technology                                |
|--------------------|--------------------------------------------|
| Frontend            | React.js, Bootstrap, React Router DOM     |
| Backend             | Node.js, Express.js                       |
| Database            | MongoDB, Mongoose ODM                     |
| Authentication      | JWT (JSON Web Tokens)                     |
| Charting Library    | Recharts                                  |
| API Calls           | Axios                                     |
| State Management    | React Hooks                               |
| Deployment          |  Render                                   |

---

## 🧱 Project Structure

```
Zerodha-Clone/
├── backend/         # Express.js API
│   ├── models/
│   ├── middleware/
│   └── config/
├── frontend/        # Public login/signup app (React)
│   └── components/
├── dashboard/       # Authenticated trading dashboard (React)
│   └── components/
├── .gitignore
├── README.md
```

---

## 🛠️ Installation & Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/immmdev/<repo-name>
cd <repo-name>
```

---

### 2. Backend Setup

```bash
cd backend
npm install
npm start
```

- Connects to MongoDB using Mongoose.
- Uses environment variables via `.env` file (create if not present).

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

### 3. Frontend (Login App)

```bash
cd ../frontend
npm install
npm start
```

- React-based public login/signup UI.
- Calls backend APIs for authentication.

---

### 4. Dashboard (Trading App)

```bash
cd ../dashboard
npm install
npm start
```

- React-based private interface.
- Displays Watchlist, Wallet, Orders, Holdings, and Positions.
- Requires JWT for access.

---

## 🔒 Security Measures

- JWT-based middleware protection
- CORS headers set for cross-origin access
- Input validation and sanitization
- Sensitive credentials handled via environment variables

---

## 📈 Holding Price Graph (Real-Time Simulation)

Each stock in the user's portfolio is visualized with a **dynamic line graph** showing how its price fluctuates over time — simulating real market behavior.

### 🔍 Features:
- **Time-series line chart** for each stock holding
- Shows **price movement** with up/down trend
- Smooth line transitions on price update
- X-axis: Time / Update Count
- Y-axis: Stock Price (₹)
- Red/Green line color based on price direction (segment-wise)

---

## 📌 Future Roadmap

- Integration of real-time stock data APIs
- Admin dashboard for platform analytics
- Persistent trade history
- Push notifications (e.g., order executed, low balance)
- Unit and integration testing

---

## 🧑‍💻 Author

**Dev Singh**  
B.Tech CSE, Institute of Engineering & Technology, Lucknow  
Email: [myselfdevsingh123@gmail.com](mailto:myselfdevsingh123@gmail.com)  
WhatsApp:  7235898946 / [Click to Chat](https://wa.me/917235898946)

---

## 📄 License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for more information.
