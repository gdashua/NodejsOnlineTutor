const express = require('express');
const connectDB = require('./config/connection.js');
const expressLayouts = require('express-ejs-layouts');

connectDB();
const app = express();

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const Port = process.env.Port||5000;

app.listen(Port, console.log('Server started at port 5000'));