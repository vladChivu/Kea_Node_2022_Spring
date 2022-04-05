import db from "../createConnection.js";

db.actors.insertOne({ name: "Nicolas Cage", movies: ["Face Off", "Wild at Heart", "The Rock", "Ghost Rider" ], money: 250 });

