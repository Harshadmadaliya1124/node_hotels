// var fs = require('fs')
// var os = require('os')

// var user = os.userInfo()
// console.log(user)
// console.log(user.username)

// fs.appendFile('greeting.txt','Hello ' + user.username + "!\n",  ()=> {console.log("file is created")} )

// var _ = require('lodash')


const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const passport = require('./auth');
require('dotenv').config();

const PORT = process.env.PORT;

//middleware function
const logRequest = (req,res,next)=> {
  console.log(`[${new Date}] Request Made to : ${req.originalUrl}`);
  next();
}

app.use(passport.initialize());

app.use(logRequest);

const localAuthMiddleware = passport.authenticate('local', {session: false});

app.get('/',function (req, res) {
  res.send('Hello World') 
})


const menuItemRoutes=require('./routes/menuItemRoutes')
app.use('/menuItem',menuItemRoutes);

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);
 
 
app.listen(PORT, ()=>{
  console.log("port 3000 is listening ")
})