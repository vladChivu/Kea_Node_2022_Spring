import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";

const dbName = "cinema";

const client = await MongoClient.connect(url);

const db = client.db(dbName);

export default {
    actors: db.collection("actors")
}