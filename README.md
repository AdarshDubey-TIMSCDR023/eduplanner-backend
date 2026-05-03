# EduPlanner Backend – Academic Task Scheduling Platform

## Overview

EduPlanner is a backend REST API designed to help students manage and track their academic tasks such as assignments, projects, and deadlines. The system allows users to create, update, retrieve, and delete tasks through a structured API.

The backend is built using Node.js and Express.js with MongoDB as the database. The project follows a modular MVC-style architecture to maintain scalability, readability, and maintainability.

The backend is deployed on a cloud hosting platform and uses MongoDB Atlas for database storage.

---

# System Architecture

Client Application (Frontend / API Client)
│
│ HTTP Requests
▼
Node.js + Express Backend (REST API)
│
│ Mongoose ODM
▼
MongoDB Atlas Cloud Database

The backend exposes REST endpoints which communicate with MongoDB using the Mongoose Object Data Modeling library.

---

# Technology Stack

Programming Language
JavaScript (Node.js)

Backend Framework
Express.js

Database
MongoDB

ODM (Object Data Modeling)
Mongoose

Environment Configuration
dotenv

Cross-Origin Resource Sharing
cors

Development Utility
nodemon

Version Control
Git

Repository Hosting
GitHub

Deployment Platform
Render

Cloud Database
MongoDB Atlas

---

# Project Structure

eduplanner-backend

config
 db.js — Database connection configuration

controllers
 taskController.js — Contains business logic for task operations

models
 Task.js — Mongoose schema defining the structure of task data

routes
 taskRoutes.js — API route definitions for task operations

server.js — Main application entry point

package.json — Project metadata and dependencies

package-lock.json — Dependency lock file

.gitignore — Prevents sensitive files from being committed

---

# Data Model

The Task model defines the structure of a task stored in MongoDB.

Fields:

title
String
Required field describing the task title.

description
String
Additional details about the task.

deadline
Date
Due date for the task.

status
String
Possible values:
Pending
In Progress
Completed

createdAt
Date
Automatically generated timestamp.

---

# API Endpoints

Base URL

https://eduplanner-backend-1.onrender.com

---

## 1. Get All Tasks

Endpoint

GET /api/tasks

Description

Retrieves all tasks from the database.

Example Request

GET https://eduplanner-backend-1.onrender.com/api/tasks

Example Response

[
{
"id": "69f70803dd08f97005dacf15",
"title": "Deep Learning Project",
"description": "Build CNN model",
"deadline": "2026-07-01T00:00:00.000Z",
"status": "Pending",
"createdAt": "2026-05-03T08:32:03.094Z"
}
]

---

## 2. Create Task

Endpoint

POST /api/tasks

Description

Creates a new academic task.

Example Request

POST https://eduplanner-backend-1.onrender.com/api/tasks

Request Body

{
"title": "Machine Learning Assignment",
"description": "Build CNN model",
"deadline": "2026-07-01",
"status": "Pending"
}

Response

Returns the created task with its unique identifier.

---

## 3. Update Task

Endpoint

PUT /api/tasks/:id

Description

Updates an existing task.

Example Request

PUT https://eduplanner-backend-1.onrender.com/api/tasks/69f70803dd08f97005dacf15

Request Body

{
"status": "Completed"
}

Response

Returns the updated task object.

---

## 4. Delete Task

Endpoint

DELETE /api/tasks/:id

Description

Deletes a task from the database.

Example Request

DELETE https://eduplanner-backend-1.onrender.com/api/tasks/69f70803dd08f97005dacf15

Response

{
"message": "Task deleted successfully"
}

---

# Local Development Setup

Step 1 – Clone the Repository

git clone https://github.com/AdarshDubey-TIMSCDR023/eduplanner-backend.git

Step 2 – Navigate to the Project Directory

cd eduplanner-backend

Step 3 – Install Dependencies

npm install

Step 4 – Create Environment File

Create a .env file in the project root directory.

Example

PORT=5000
MONGO_URI=your_mongodb_connection_string

Step 5 – Start Development Server

npm run dev

The server will run on:

http://localhost:5000

---

# Database Setup

The backend connects to MongoDB Atlas.

Steps:

1. Create a MongoDB Atlas account.
2. Create a new cluster.
3. Create a database user.
4. Add IP address access (0.0.0.0/0 for development).
5. Copy the MongoDB connection string.
6. Add the connection string to the environment variable MONGO_URI.

---

# Deployment Process

The backend is deployed using Render.

Deployment Steps

1. Push the project to GitHub.
2. Connect the repository to Render.
3. Create a new Web Service.
4. Configure build settings.

Build Command

npm install

Start Command

npm start

Environment Variables

PORT=10000
MONGO_URI=your_mongodb_connection_string

After deployment, Render generates a public URL where the API becomes accessible.

---

# How the System Works (End-to-End Flow)

1. The client sends an HTTP request to the backend API endpoint.

2. Express.js receives the request through defined routes.

3. The route forwards the request to the appropriate controller.

4. The controller executes business logic and interacts with MongoDB through Mongoose.

5. The database performs the requested operation (create, read, update, delete).

6. The controller sends the result back as a JSON response.

7. The client receives and processes the response.

---

# Key Features

RESTful API architecture

Cloud database integration

Modular project structure

Scalable backend design

Full CRUD task management

Deployment-ready architecture

Secure environment configuration

---

# Future Enhancements

User authentication (JWT)

Task filtering and search

Pagination for large task lists

Task priority levels

Deadline reminders

Frontend dashboard integration

Role-based access control

---

# Author

Adarsh Dubey
Master of Computer Applications (MCA)
Backend and AI Developer

---

# License

This project is licensed under the MIT License.
