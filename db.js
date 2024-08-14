const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = process.env.MONGODB_URL
const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected',()=>{
  console.log("Connected..........")
})
db.on('error',(err)=>{
  console.log("Error......")
})
db.on('disconnected',()=>{
  console.log("Disconnected......")
})

module.exports = db;