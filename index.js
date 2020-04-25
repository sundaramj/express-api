const express = require('express');
const app = express();
const cors = require('cors');
require('./app/config/db'); // added mongoose
var bodyParser = require('body-parser')
const createError = require('http-errors')
const path = require('path') // default module of node js no need to install using npm

const defaultFolder = './app/'; // default folder you can change it based on your requirement

const Product = require(defaultFolder+'routes/product.routes');
const Tutorials = require(defaultFolder+'routes/tutorials.routes')
const Employee = require(defaultFolder+'routes/employee.routes')


app.use(cors())
app.use((req,res,next) => {
    res.header("Access-Control-Allow-origin","*");
    res.header("Accept-Control-Allow-Headers","Origin,X-Requested-With, Content-Type, Accept");
    next();
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
 
// Used ejs to render html to browser
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'ejs')

app.use('/Products',Product); // Static api no database connection
app.use('/Tutorials',Tutorials); // Static api no database connection
app.use('/Employee',Employee); // Connected with database using Mongoose



// If wrong url 404 error page will display
// app.get('*',(req,res) => { 
//     res.status(404).send({status:2,msg:"Page Not Found"});
// })

app.use((req,res,next) => {
    next(createError(404));
})

app.use((error,req,res,next) => {
    res.status(error.status).send({status:error.status,msg:error.message});
})

const Port = process.env.Port || 3000;
app.listen(Port,() => console.log('Connected on '+Port))