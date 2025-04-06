// setupDb.js
import sqlite3 from "sqlite3";

// Open or create the database file
const db = new sqlite3.Database("./movies.db", (err) => {
    if (err) {
        return console.error("Error opening database:", err.message);
    }
    console.log("Connected to the SQLite database.");
});

// Create table and insert sample data
db.serialize(() => {
    // Create the metrics table if it doesn't exist
    db.run(
        `
        CREATE TABLE IF NOT EXISTS metrics (
            searchTerm VARCHAR(100) NOT NULL,
            count INTEGER DEFAULT 0,
            poster_url TEXT NOT NULL,
            movie_id INTEGER NOT NULL
        );
        `,
        (err) => {
            if (err) {
                console.error("Error creating table:", err.message);
            } else {
                console.log("Table 'metrics' created or already exists.");
            }
        }
    );
});

db.close((err) => {
    if (err) {
        return console.error("Error closing database:", err.message);
    }
    console.log("Database setup complete.");
});
