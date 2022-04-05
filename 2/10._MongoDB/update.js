import db from "./createConnection.js";

db.tutorials.updateOne({ channelName: "How to Basic II"}, { $set: { views: 2133 } })