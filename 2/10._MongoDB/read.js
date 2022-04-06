import db from "./createConnection.js";

const allTutorials = await db.tutorials.find().toArray();

console.log(allTutorials);