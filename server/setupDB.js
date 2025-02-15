// setupDb.js
import sqlite3 from "sqlite3";

// Open or create the database file
const db = new sqlite3.Database("./movies.db", (err) => {
    if (err) {
        return console.error("Error opening database:", err.message);
    }
    console.log("Connected to the SQLite database.");
});

// Create a table and insert some sample data
db.serialize(() => {
    // Create the movies table if it doesn't exist
    db.run(`
    CREATE TABLE IF NOT EXISTS metrics (
        searchTrem VARCHAR(100) NOT NULL,
        count INTEGER DEFAULT 0,
        poster_url TEXT,
        movie_id INTEGER NOT NULL
    );
  `);

    // Insert sample data (this is optional)
    // db.run(
    //     `INSERT INTO movies (title, description) VALUES ('Inception', 'A mind-bending thriller')`
    // );
    // db.run(
    //     `INSERT INTO movies (title, description) VALUES ('The Matrix', 'A hacker discovers reality isn’t as it seems')`
    // );
});

db.close((err) => {
    if (err) {
        return console.error("Error closing database:", err.message);
    }
    console.log("Database setup complete.");
});
