const express = require('express');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({path:'./config/config.env'});

const app=express();

//Route files
const campgrounds = require('./routes/campgrounds');

//Mount routers
app.use('/api/v1/campgrounds',campgrounds);



const PORT = process.env.PORT || 5005;
app.listen(PORT,console.log('Server running in ',process.env.NODE_ENV,' mode on port ',PORT));