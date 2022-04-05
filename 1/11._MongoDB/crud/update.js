import db from "../createConnection.js"

db.actors.updateOne({ name: "Nicolas Cage" }, { $push: { movies: "Pig" }});
