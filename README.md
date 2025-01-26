# Todo App Backend

This is a backend service for a Todo application, built with **Express.js** and **Prisma**. It provides APIs to manage tasks, including creating, reading, updating, and deleting todos. 

## Getting Started

Follow these instructions to set up and run the application locally.

### Prerequisites
- **Node.js** (v16 or later)
- **npm** (v7 or later)
- A database compatible with Prisma (e.g., SQLite, PostgreSQL, MySQL).

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:Abarragan89/nooro-todo-backend.git
   cd git@github.com:Abarragan89/nooro-todo-backend.git

2. Install Dependencies:
   ```bash
   npm install

3. Migrate Primsa Models and Primsa Client:
   ```bash
   npm run prisma

4. Environment Variables:
   ```bash
   Create a .env file and add your Database connection string.

   Variable should be named DATABASE_URL

5. Start the server:
   ```bash
   npm run dev