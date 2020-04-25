// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/node';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
mongoose.pluralize(null);
const db = mongoose.connection;
db.on('open',()=>{
    console.log("connected with mongo db"); 
})
db.on('error', console.error.bind(console, 'MongoDB connection error:'));