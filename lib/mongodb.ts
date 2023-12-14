// db.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const dbname = "experience";
const collection_name = "student";
 const doc1Collection = client.db(dbname).collection(collection_name);

export const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`Connected to ${dbname} database`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};
export const closeDatabaseConnection = async () => {
    await client.close();
};
export { doc1Collection };
