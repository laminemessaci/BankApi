# BankApi

# Argent Bank

Argent Bank is a full-stack banking web application built with the MERN (MongoDB, Express.js, React, Node.js) stack.

## Backend Dependencies

- [bcrypt](https://www.npmjs.com/package/bcrypt): Used for password hashing and validation.
- [colors](https://www.npmjs.com/package/colors): Enhances console output with colors for better readability.
- [cors](https://www.npmjs.com/package/cors): Middleware for enabling CORS (Cross-Origin Resource Sharing).
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file.
- [express](https://expressjs.com/): A web application framework for Node.js.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Used for generating JSON web tokens.
- [moment](https://www.npmjs.com/package/moment): A library for parsing, validating, manipulating, and formatting dates.
- [mongoose](https://mongoosejs.com/): An object modeling tool for MongoDB designed to work asynchronously.
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express): Middleware for serving Swagger UI documentation.
- [yamljs](https://www.npmjs.com/package/yamljs): Used for parsing YAML files.

### Development Dependencies

- [nodemon](https://www.npmjs.com/package/nodemon): Automatically restarts the server when code changes are detected.

## Frontend Dependencies

- [axios](https://www.npmjs.com/package/axios): A promise-based HTTP client for making API requests.
- [react](https://reactjs.org/): A JavaScript library for building user interfaces.
- [react-bootstrap](https://react-bootstrap.github.io/): A front-end framework for creating responsive web applications.
- [react-icons](https://www.npmjs.com/package/react-icons): A library for including popular icon sets in your React projects.
- [react-redux](https://react-redux.js.org/): Official React bindings for Redux state management.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start): DOM bindings for React Router.
- [redux-persist](https://www.npmjs.com/package/redux-persist): Persist and rehydrate a Redux store to maintain state across sessions.
- [Formik](https://formik.org/): A popular form management library for React that simplifies form handling, validation, and submission.
- [yup](https://www.npmjs.com/package/yup): A schema validation library for form validation.

### Development Dependencies

- [eslint](https://www.npmjs.com/package/eslint): A pluggable linting tool for identifying and fixing problems in JavaScript code.
- [prettier](https://www.npmjs.com/package/prettier): An opinionated code formatter.
- [jest](https://jestjs.io/): A JavaScript testing framework.
- [jsdoc](https://www.npmjs.com/package/jsdoc): A tool for generating documentation from JavaScript source code.

## Usage

To run the project locally, follow these steps:

1. Clone the repository.
2. Navigate to the backend directory and install the dependencies:

   ```bash
   cd backend
   npm install

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v16](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version

# Check concurrently version 
concurrently --version

```

### Instructions

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
npm install && cd backend && npm install && cd ..
cd frontend && npm i && cd ..


# Start local dev server
npm run dev

```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!


### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.
