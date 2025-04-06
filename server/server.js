// server.js
import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./movies.db", (err) => {
    if (err) {
        console.error("Error connecting to SQLite DB:", err.message);
    } else {
        console.log("Connected to SQLite DB.");
    }
});

// Fetch trending movies (sorted by count desc)
app.get("/api/trending", (req, res) => {
    db.all(
        `SELECT * FROM metrics ORDER BY count DESC LIMIT 5`,
        [],
        (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json(rows);
            }
        }
    );
});

// Add or update search term count
app.post("/api/search", (req, res) => {
    const { searchTerm, poster_url, movie_id } = req.body;

    db.get(
        `SELECT * FROM metrics WHERE searchTerm = ?`,
        [searchTerm],
        (err, row) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (row) {
                // Update count
                db.run(
                    `UPDATE metrics SET count = count + 1 WHERE searchTerm = ?`,
                    [searchTerm],
                    (err) => {
                        if (err) {
                            res.status(500).json({ error: err.message });
                        } else {
                            res.json({ message: "Updated search count." });
                        }
                    }
                );
            } else {
                // Insert new entry
                db.run(
                    `INSERT INTO metrics (searchTerm, count, poster_url, movie_id) VALUES (?, 1, ?, ?)`,
                    [searchTerm, poster_url, movie_id],
                    (err) => {
                        if (err) {
                            res.status(500).json({ error: err.message });
                        } else {
                            res.json({ message: "Inserted new search term." });
                        }
                    }
                );
            }
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
