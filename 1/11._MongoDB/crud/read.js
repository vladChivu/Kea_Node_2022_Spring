import db from "../createConnection.js";

const allActors = await db.actors.find().toArray();

const brokeNicolasCages = await db.actors.find({ money: { $lt: 300 } }).toArray(); 

console.log(brokeNicolasCages);