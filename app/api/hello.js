import { MongoClient } from 'mongodb';

let cachedDb = null;

async function connectToDatabase(uri) {
if (cachedDb) {
    return cachedDb;
}

const client = await MongoClient.connect(uri);
const db = client.db('Samskaradb');

cachedDb = db;
return db;
}
export default async function handler(req, res) {

    const db = await connectToDatabase("mongodb + srv://yourchoicesahil:ewPD0BsRe0hEKAF8@samskara-db.1tc5abk.mongodb.net/?retryWrites=true&w=majority");

    try {
        // Access the selected collection and fetch its data
        const data = await db.collection(collectionName).find({}).toArray();
        console.log(data);
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data', details: error.message });
    }
}