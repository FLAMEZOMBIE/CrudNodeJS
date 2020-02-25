const express = require('express');
const bodyParser = require('body-parser');
const route = require('./app/routes/router')
    // pembuatan App Express
const app = express();

// memparse reques content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// memparse reques of content-type - application/json
app.use(bodyParser.json())

// mendefinisikan router
app.get('/', (req, res) => {
    res.json({
        "message": "Selamat datang Point Blank ZEPETTO Indonesia"
    });
});

app.use(route)
    // listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

// Konfigurasi Database
const dbConfig = require('./config/config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// koneksi Ke Database
mongoose.connect(dbConfig.url)
    .then(() => {
        console.log("Selamat datang di Pekalongan Cheater Community");
    }).catch(err => {
        console.log('Error database Tidak Terkoneksi atau Tidak Ada');
        process.exit();
    });