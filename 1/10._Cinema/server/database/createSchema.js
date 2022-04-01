import { db } from "./createConnection.js";

const deleteMode = true;

if (deleteMode) {
    db.exec("DROP TABLE IF EXISTS movies;");
}

db.exec(`CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(100)
);`);

// Seed my database
if (deleteMode) {
    db.run(`INSERT INTO movies (title) VALUES ('Spiderman')`);
    db.run(`INSERT INTO movies (title) VALUES ('Carnage')`);
    db.run(`INSERT INTO movies (title) VALUES ('Pig')`);
}

db.close();
