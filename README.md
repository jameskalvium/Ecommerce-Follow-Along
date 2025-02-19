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

This milestone showcases the setup of a Login Page for my full-stack application. I’ve built the frontend using React and TailwindCSS for responsive UI and added a backend powered by Express, Nodemon, CORS, and Mongoose for managing the server and database.
________________________________________
## Features

### Frontend

1.	Responsive Login Form:
	- I’ve created a login form that adapts seamlessly to different screen sizes using TailwindCSS. This ensures a user-friendly experience across devices.
2.	Basic Input Validation:
	- I added input validation to the email and password fields to make sure users cannot submit empty values or invalid data.
________________________________________
## Frontend Directory Structure

### I organized the frontend project to keep the codebase modular and easy to maintain.
1.	Created a src folder:
	- This folder serves as the root for all application logic and UI components.
2.	Created a components folder:
	- Inside src, I added a components folder to store reusable UI elements for better organization.
3.	Created an Auth folder inside components:
	- The Auth folder houses authentication-related components.
4.	Built LoginPage and SignUpPage components:
	- These components handle the user login and registration forms respectively.

### Frontend Setup
1.	I’ve used cd frontend to navigate into the frontend directory.
2.	I’ve used npm install to install all the necessary dependencies for the frontend, like React and TailwindCSS.
3.	I’ve used npm start to launch the React development server and open the application in my browser.

________________________________________
### Backend Setup

1.	I’ve used cd backend to navigate into the backend directory.
2.	I’ve used npm install to install backend dependencies like Express, Nodemon, CORS, and Mongoose.
3.	I’ve used npm run dev to start the backend server in development mode with automatic restarts using Nodemon.


## Milestone 3: connecting a node js server to MongoDB

1. I have made a node js server for the API requests.
2. Then connected the server to MongoDB for database connection using mongoose.
3. Initiated a file for Error Handling for the errors.
4. Created a dotenv file to store the URL and port details.
5. Initiated a new branch and all the changes are committed to the new branch.




## Milestone 4:

1. We created models folder for the user model for the data to be stored.
2. We created a folder called controllers inside src to handle the logic for specific application routes. The controller file acts as a bridge between the routes and the business logic of your app.
3. We created a multer file for Node.js applications for handling multipart/form-data, which is primarily used for file uploads. 

## Milestone 5:

- we have created a signUp page inside src folder
- we have created a validationObject using Regex
- we have setup React-Router for the pages

## Milestone 6:

 - milestone 6 completed


 ## Milestone 7:

  - In this milestone we have created routes for login and signup
  - Login
    1. Got data  sent cont { email, password}= req.body
    2. Checking if the user entry is present in DB and compared the password.
      1. if yes -> create a token and send that as cookies 
      2. if no -> return saying Signup first


  ## Milestone 8:
    1. Made a card component 
    2. Displayed the cards on the products page


 ## Milestone9:
  1. Design the product card
  2. Added many product images
  3. Displayed saved products
  

## Milestone10:

 1. I have created the Schema for the product.
 2. I have created the end point to write data into the Database.
 3. I have also installed cloudinary and multer packages


 ## Milestone11;

  ### Features
  1. I have written the endpoints to fetch data from the Database and send data to the client.

 ## Milestone12

  1. Fetched data from the database
  2. Displayed the data in the Card.

  ## Milestone13

    1. I have created an update functionality for the products
    2. Using PUT method to update the data
    3. Added a button for updating the data in the frontend

  ## Milestone14

    1. I have added a delete functionality for the products
    2. Added a button in the frontend and made a function for it.
    3. Added a route for it.

  ## Milestone15

    1. Added navbar
    2. I have wrapped all the routes inside the Navbar.

  ## Milestone16

    1. I have created a single page for the products
    2. I have created image modal for the single photos
    3. Signup frontend and backend changes
    4. Product entry both frontend and backend changes
    
  ## Milestone17

  1. I have created the cart Schema
  2. Added the cart route
  3. Added the route to app.js


## Milestone18

  1. Added the cart route (/get-user-cart-data)
  2. Edited the cart controller.js

## Milestone19

  1. I have created the UI
  2. We are fetching the details of the user from the database

## Milestone20

  1. I have created the Profile page
  2. I have created the route for the user data

## Milestone21

  1. I have created an Address component


## Milestone22


## Milestone23

  1. We have created a select address component and added a route for it
  2. We have created controller for getting the address.

## Milestone24

  1. I have created a new route for order confirmation 
  2. Made an Order Confirmation component.


  ## Milestone25

    1. Created order controller 
    2. Created order model 
    3. Created order route


## Milestone26
  1. Added order router 
  2. Made getuserController
  3. Made User order-data 

## Milestone27
  
  1. created order history page

## Milestone28

  1. We have edited the cartpage 

## Milestone29 && Milestone30
  1. we have created the Razorpay
  2. we have added the payment route
  3. we have added the payment controller
