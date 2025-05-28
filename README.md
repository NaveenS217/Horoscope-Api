
# 🌠 Personalized Horoscope API

A Node.js + PostgreSQL backend service that generates and serves personalized daily horoscopes for users based on their zodiac sign.



## 📦 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- Moment.js
- bcrypt for password hashing



## 📁 Project Structure


horoscope-api/
├── controllers/          # Route logic
├── middlewares/          # Auth & rate limit middlewares
├── models/               # DB connection
├── routes/               # Route definitions
├── utils/                # Zodiac calculation logic
├── app.js                # Entry point
├── .env                  # Environment config
└── setup.sql             # SQL to initialize DB


## ✅ Features

- **User Signup/Login** (with JWT)
- **Zodiac auto-detection** from birthdate
- **GET /horoscope/today**: Get today's horoscope
- **GET /horoscope/history**: View last 7 days


---
## ⚙️ Setup Instructions

### 1. Clone and Install

```bash
npm install
```

### 2. Configure Environment

Edit `.env`:

```
PORT=3000
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=5432
DB_NAME=horoscope
JWT_SECRET=yourjwtsecret
```

### 3. Setup Database

Login to psql and run:

```bash
\i setup.sql
```

### 4. Start Server

```bash
npm start
```

---

## 🔄 API Endpoints

### POST `/auth/signup`

```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "password": "1234",
  "birthdate": "1995-04-10"
}
```

### POST `/auth/login`

```json
{
  "email": "alice@example.com",
  "password": "1234"
}
```

Returns:
```json
{ "token": "..." }
```

---

### GET `/horoscope/today`

> Headers: `Authorization: Bearer <token>`

Returns:
```json
{
  "date": "2025-05-28",
  "zodiac": "Aries",
  "content": "Today is a powerful day for Aries."
}
```

---

### GET `/horoscope/history`

> Returns past 7 days' horoscopes

---

## 💡 Design Notes

- Simple layered structure with route/controller separation
- Lightweight mock horoscope data used
- JWT ensures secure access to horoscope endpoints

---
