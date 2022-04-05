import db from "../createConnection.js";

db.actors.deleteOne({ name: "Nicolas Cage" });