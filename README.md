# Course Enrollment API Documentation

This API allows you to manage courses and enroll students.

## Table of Contents

- [Getting Started](#getting-started)
    - [Installation](#installation)
- [Endpoints](#endpoints)
    - [Get All Courses](#get-all-courses)
    - [Create a Course](#create-a-course)
    - [Get a Course by ID](#get-a-course-by-id)
    - [Filter Courses](#filter-courses)
    - [Enroll a Student](#enroll-a-student)

## Getting Started

### Installation & running the app

   ```bash
   $ docker-compose up -d
   ```

## Endpoints
### Get All Courses
- Endpoint: /api/courses
- Method: GET
- Description: Fetch all courses.
- Response:
    ```json
  {
  "message": "All Courses fetched successfully.",
  "success": true,
  "status": 200,
  "data": [... Course objects]
  }
    ```
### Create a Course
- Endpoint: /api/courses
- Method: POST
- Description: Create a new course.
- Request Body:
    ```json
  {
  "title": "String",
  "description": "String",
  "price": number, //float
  "instructor": "String",
  "duration": number //in hours
  }
    ```
  - Response:
  ```json
    {
    "message": "Course created successfully.",
    "success": true,
    "status": 201,
    "data": {// Created course object}
    }
    ```
### Get a Course by ID
- Endpoint: /api/courses/:id
- Method: GET
- Description: Fetch a course by ID.
- Response:
    ```json
  {
  "message": "Course fetched successfully.",
  "success": true,
  "status": 200,
  "data": {... Course object}
  }
    ```

### Filter Courses
- Endpoint: /api/courses/filter
- Method: GET
- Description: Filter courses by title, instructor, duration or price.
- Example Request: /api/courses/filter?title=javascript&instructor=John%20Doe&duration=5&price=100
- Response:
    ```json
  {
  "message": "Courses filtered successfully.",
  "success": true,
  "status": 200,
  "data": [... Course objects]
  }
    ```

### Enroll a Student
- Endpoint: /api/enrollments
- Method: POST
- Description: Enroll a student in a course.
- Request Body:
    ```json
  {
  "student": "String", // Student Name
  "course": "String" // Course ID
  }
    ```
- Response:
  ```json
    {
    "message": "Student enrolled successfully.",
    "success": true,
    "status": 201,
    "data": {// Created enrollment object}
    }
    ```
