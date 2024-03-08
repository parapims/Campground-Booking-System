const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

//Load env vars
dotenv.config({path:'./config/config.env'});

// connect to database
connectDB();

const app=express();

//Route files
const campgrounds = require('./routes/campgrounds');
const auth = require('./routes/auth');

//Middleware
// add body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

//Mount routers
app.use('/api/v1/campgrounds',campgrounds);
app.use('/api/v1/auth',auth);



const PORT = process.env.PORT || 5005;
const server = app.listen(PORT,console.log('Server running in ',process.env.NODE_ENV,' mode on port ',PORT));

// handle unhandled promise rejections
process.on('UnhandledRejection',(err,promise) => {
    console.log(`Error: ${err.message}`);

    // close server & exit process
    server.close(()=>process.exit(1));
});