console.log("server start");
import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./movies.db", (err) => {
    if (err) console.error("Database error: ", err.message);
    else console.log("Connected to SQLite database.");
});



// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
