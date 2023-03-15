const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config()

const app = express()
const PORT = process.env.PORT
const dbUrl = process.env.db_url


const start = async () => {
    try {
        mongoose.connect(dbUrl)
        app.listen(PORT, () => {
            console.log('Server started on port', PORT)
        })
    } catch (err) {

    }
}

start()