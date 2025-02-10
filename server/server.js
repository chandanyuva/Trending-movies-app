console.log("server start");
import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
const port = 5000;

// const express = require("express");
// // import express from "express" ;
// const sqlite3 = require(sqlite3).verbose();
// const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./database.db", (err) => {
    if (err) console.error("Database error: ", err.message);
    else console.log("Connected to SQLite database.");
});
