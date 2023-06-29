# App_HTS

# User Registration and Login API

This repository contains code for a user registration and login API implemented using Node.js and Express.js. The API uses a MongoDB database for storing user information and incorporates password hashing and token-based authentication.

## Features

- User registration with email and password
- Password hashing using bcrypt
- User login with email and password
- Token-based authentication using JWT (JSON Web Tokens)

## Installation

1. Clone the repository:

git clone https://github.com/vishalpadaswan3/App_HTS/tree/master

markdown
Copy code

2. Install the dependencies:

npm install

markdown
Copy code

3. Set up the environment variables:
- Create a `.env` file in the root directory of the project.
- Add the following variables to the `.env` file:
  ```
  SECRET_KEY=your_secret_key
  ```

## Usage

1. Start the server:

node app.js

sql
Copy code

2. Register a new user:

POST /register

markdown
Copy code

- Request body:
  - `fname`: First name of the user
  - `lname`: Last name of the user
  - `email`: Email address of the user
  - `password`: Password for the user account

- Response:
  - 201 Created: User registered successfully
  - 400 Bad Request: User already exists

3. Login as a user:

POST /login

vbnet
Copy code

- Request body:
  - `email`: Email address of the user
  - `password`: Password for the user account

- Response:
  - 200 OK: User logged in successfully
  - 400 Bad Request: User does not exist or invalid credentials

- Response body:
  - `token`: JWT token for authentication





