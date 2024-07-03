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
require('dotenv').config();

const PORT = process.env.PORT;


app.get('/', function (req, res) {
  res.send('Hello World') 
})


const menuItemRoutes=require('./routes/menuItemRoutes')
app.use('/menuItem',menuItemRoutes);

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

 
app.listen(PORT, ()=>{
  console.log("port 3000 is listening ")
})