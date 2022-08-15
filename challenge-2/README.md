# Challenge 2 - _MERN Challenge_

| Page | Requirement |
|--|--|
| _Login_ | Authenticate user using username and password |
| _Dashboard_ | Dashboard to view all currencies and perform CRUD functions  |

## Technology Stack
### Client
- [ReactJS](https://reactjs.org/) - React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
- [Material-UI](https://mui.com/) - Material-UI is a library that allows developers to import and use different components to create a user interface in React applications.

### Server
- [Express.js](https://expressjs.com/) - Express is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

### Database
- [MySQL](https://www.mysql.com/) - MySQL is an open-source relational database management system.

### Others
- [react-router-dom](https://reactrouter.com/) - React Router is a fully-featured client and server-side routing library for React. It enables the implementation of dynamic routing in a web app, allowing for the display of pages and allows users to navigate them.
- [Axios](https://axios-http.com/) - Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple-to-use library in a small package with a very extensible interface.
- [Babel](https://babeljs.io/) - Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines.
- [Webpack](https://webpack.js.org/) - Webpack is a free and open-source module bundler for JavaScript.
- [ESLint](https://eslint.org/) - ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code.

- [nodemon](https://nodemon.io/) - nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [morgan](https://www.npmjs.com/package/morgan) - morgan is a HTTP request logger middleware for node.js.
- [CORS](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

## Set Up
This project is developed using MERN stack (MySQL, Express.js, React.js and Node.js).

1. In the server/ directory, change `env.txt` to `.env` file with MySQL database connection particulars.
2. Install the dependencies and start the server as follows.

### Server
```sh
cd server
npm i
npm start
```

### Client
```sh
cd client
npm i
npm start
```

3. Client would be running on localhost:3000 and the server would be running on localhost:5000 (if no changes were made).
4. If the server port needs to be changed, please also change the new location accordingly in the `client/src/api/index.js` file.