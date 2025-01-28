## 📝 Task Manager 

A full-stack task management application built with React (Frontend) and .NET (Backend) using PostgreSQL as the database. The app allows users to create, view, complete, and delete tasks with a clean and responsive UI.

## 📌 Features 

✅ Add Tasks – Users can create new tasks via a pop-up modal. \
✅ View Tasks – Displays a list of tasks.\
✅ Mark Tasks as Completed – Checkbox to mark tasks as done (with strikethrough task name). \
✅ Delete Tasks – Remove a task with a trash icon button. \
✅ State Management – Uses Redux for state handling. \
✅ Database Integration – Uses PostgreSQL with Entity Framework.\
✅ CORS Enabled – Allows frontend-backend communication.

## 🚀 Getting Started 

1️⃣ Clone the Repository 

git clone https://github.com/your-username/TaskManager.git \
cd TaskManager

🖥️ Frontend Setup 

2️⃣ Install Dependencies 

cd client \
npm install

3️⃣ Start the React App 

npm start

🛑 If you get an error for missing dependencies, install:

npm install react-icons axios @reduxjs/toolkit react-redux

🖥️ Backend Setup 

4️⃣ Navigate to Server Directory

cd server \
5️⃣ Install .NET Dependencies

dotnet restore 

6️⃣ Set Up PostgreSQL Database
Ensure PostgreSQL is running
You can start PostgreSQL using:

brew services start postgresql
Create the Database

psql -U postgres
CREATE DATABASE TaskManagerDb; \
7️⃣ Apply Migrations

dotnet ef database update \

8️⃣ Run the .NET Server

dotnet run

Backend will now run on:
🔹 http://localhost:5001/api/tasks

## 🔗 API Endpoints

| Method | Endpoint         | Description              |
|--------|-----------------|--------------------------|
| GET    | `/api/tasks`     | Get all tasks           |
| POST   | `/api/tasks`     | Add a new task          |
| PUT    | `/api/tasks/{id}` | Mark a task as complete |
| DELETE | `/api/tasks/{id}` | Delete a task           |


## 📸 Screenshots

Landing Page \
<img src="landing.png" width="500"/> \
Adding a Task \
<img src="addTask.png" width="500"/> \
Completing a Task \
<img src="taskComplete.png" width="500"/>


