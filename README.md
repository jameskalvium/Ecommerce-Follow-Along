# Ecommerce Applications

## Milestone 1: Project Overview

We have to set up the follow along ecommerce application using the MERN stack.

1. Authentication: login logout signup
2. Product image: All the products
3. Orders page: Shows orders for each her
4. Payment gateway


## Milestone 2:  Setting up the Login Page

  1. Frontend Setup
    Tech Stack: React, TailwindCSS.

    Features:

    Responsive login form.
    Basic input validation.

    1. Created a src folder
    2. created a components folder
    3. inside that a folder called Auth is made.
    4. created a LoginPage and SignUpPage

    2. Backend Setup
    Tech Stack: Express, Nodemon, CORS, Mongoose.

    Directory Structure:

    Copy code
    backend/
    src/
    inside the src folders we have created the following folders
    config/           # Database configuration
    controllers/      # Business logic
    middlewares/      # Authentication/validation logic
    routes/           # API routes
    server.js         # Main server entry point
    package.json 

    config/: Handles the MongoDB connection.
    controllers/: Contains logic for login-related functionality
    middlewares/: Custom middleware (e.g., JWT verification).
    routes/: Defines routes like /api/login.
