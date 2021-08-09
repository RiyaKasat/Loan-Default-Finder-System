const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"Riya123456789",
    database:"loansystem",
    port:"3306"
})

connection.connect((err) =>
{
    if(err){
        throw err
    }
    else{
        console.log("connected")
    }
})

dotenv.config();

app.listen(3000, () => console.log("Server is up and running on 3000"));