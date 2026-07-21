# SWD Assignment 3 – Flight Booking System

## Introduction

This project is a flight booking web application developed using Next.js and MySQL for the Server-Side Web Development module.

The system allows users to register accounts, log in securely, view available flights, book tickets, manage bookings, and view personal profile information through a dashboard interface.

The purpose of this project is to demonstrate full-stack web development concepts including frontend and backend integration, database connectivity, API routes, CRUD operations, authentication, and session management.

---

# All Contributors

- Zeyuan Mi
- Yunlong Wang
- Haoyang Cui

---

# Team Contributions

### Zeyuan Mi
Backend Developer
- Designed backend architecture.
- Implemented RESTful API routes.
- Developed CRUD operations.
- Managed database schema and SQL dump.

### Yunlong Wang
Full-stack Developer
- Implemented authentication system including login, registration and logout.
- Developed backend authentication logic and API routes.
- Integrated MySQL database connection.
- Designed frontend pages and user validation.


### Haoyang Cui
Frontend UI Developer
- Improved user interface design.
- Optimized frontend layout and user experience.

---

# Features

- User Registration
- User Login / Logout
- Password Hashing with bcryptjs
- Dashboard Navigation
- Flight Booking System
- My Tickets Page
- User Profile Page
- MySQL Database Integration
- API Routes using Next.js
- Form Validation
- Session Storage

---

# Technologies Used

- Next.js
- React.js
- Node.js
- MySQL
- JavaScript
- HTML/CSS
- bcryptjs

---

# Database Tables

## users

| Field | Description |
|---|---|
| id | User ID |
| name | Username |
| email | User email |
| password | Encrypted password |
| role | User role |

## flights

| Field | Description |
|---|---|
| id | Flight ID |
| from_city | Departure city |
| to_city | Destination city |
| departure | Flight departure time |
| price | Ticket price |
| seats | Available seats |

## bookings

| Field | Description |
|---|---|
| id | Booking ID |
| user_id | User reference |
| flight_id | Flight reference |
| created_at | Booking date |

---

# Installation

## 1. Install dependencies

```bash
npm install
