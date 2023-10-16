const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./db/dbConnection');
const feedRoutes = require('./routes/feed');

const app = express();


// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(express.json());
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

dbConnection();
app.listen(8080,()=>{
    console.log("Server is running on https://localhost:8080")
});