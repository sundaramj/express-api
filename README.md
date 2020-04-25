# express-api
Node js CRUD api using expresss Js with Mongo DB

## Install Package (run below command on command line)
npm i express mongoose cors body-parser http-errors ejs
before that use use npm init to create package.json

## configure mongo db database configuration
path : app/config/db.js change your setting

## Module
Created 3 modules
* Products
    * Static api no database connection(used static json data from app/helpers/helpers.js)
* Tutorials
    * Static api no database connection(used static json data from app/helpers/helpers.js)
* Employee
    * Connected with database using Mongoose(Mongo DB)

## Points
1. I have used CORS, So it will not get blocked whoever is using our api
2. ejs is used to display html data to the browser, So using ejs we can render a data to ejs file & display it in html format. There is also other module for this like Jade, Pug etc. (http://localhost:3000/Products/ejs)
3. Body-parser is to read Http post data
4. Mongoose is Object Data Modeling & its library of Mongo DB.
5. http-errors is used to display error to the user if no url found or any other.
6. You can also install nodemon, on Nodemon you dont need to restart server manually if you have done any changes in code, Nodemon automatically handles it. npm i nodemon. For production environment we can use [pm2](https://www.npmjs.com/package/pm2)
7. Want to know more about Express js middleware, please check express official site [Express Middleware](http://expressjs.com/en/guide/using-middleware.html)