# chatapp
MERN Chat app project. Build with Bootstrap, MongoDb, Express, React and NodeJS
Steps that I did on this project

Backend Code
1. Create folder for the backend. I used the name chatapp-backend
2. Install npm init -y for the package json file. Install all dependencies for backend at once using this code: npm i nodemon bcrypt cors dotenv mongoose socket.io validator. It should be installed inside your backend folder
3. Install the Express locally to avoid Node.js Error: Cannot find module express 
4. Create the server file named server.js. This will manage our server and add all the server.js codes
5. Check if the port is running using npm run dev command

FrontEnd
1. Created folder for frontend and install the react app. npx create-react-app chatapp-frontend
2. Remove the default styling in the App.js file
3. Install the react dependencies: npm I  react-router-dom, npm install react-bootstrap bootstrap. Make sure to install it on your frontend folder to avoid any issue
4. Import the bootstrap CSS components and add it to index.js file
5. Added new folder for Pages and Components
6. Added files for Pages folder (Home, Chat, Login, Signup page)
7. Added the navigation menu component using Bootsrtap navbar component
8. Import the navigation menu to App.js
9. Added the Login and Signup pages to App.js
10. Install the npm i react-router-bootsrap to link the pages
11. Update the name of links and add the logo. Create asset folder for images
12. Build the homepage and add some font awesome icons
13. Build the Login and SignUp page. Make sure to link these two pages
14. Add the State Hooks for the Signup page and functions to setup the upload profile pic image. I used Cloudinary API so the user can store their photos on a database
15. Set up the State Hooks for the Login page. 
16. Set up the Chat page. Create separate component for Sidebar and Messages
17. Set up the Sidebar Components
18. Set up the message Component and some styles

Connect the frontend to Backend
1. Setup the database and add a new file. I called it connection.js
2. Sign-up to MongoDb and setup database access
3. Create a file called .env and store the Database access password and username
4. Go to Database Deployment tab and click connect, add IP address, chose Connect your application
5. Install mongoDB shell on backend folder to avoid any error
6. Add your connection string into your application code. I added to my connection.js file
7. Go to server.js file and add require the connection.js file. Try to console.log the server.
8. Create a new folder for user models. I created a new file called User.js and create the User model
9. Create Route folder and userRoutes.js file Add the codes for Sign up and Login credentials. 
10. Connect the userRoutes to server.js file.

Back to FrontEnd
1. Install Redux dependencies npm i redux redux-persist @reduxjs/toolkit
2. Install Socket.io
3. Create 2 folders for features and services.
4. Under services folder, add the appApi.js
5. Add the service user code
    

 


