// main.js
import { connectToDatabase, closeDatabaseConnection,doc1Collection } from "@/lib/mongodb";
const Tofind = {type:"test"}
export default async function handler(request, response) {
    try {
        await connectToDatabase();
        const result = await doc1Collection.find().toArray();
        const serializedResult = JSON.parse(JSON.stringify(result));
        let docCount = doc1Collection.countDocuments(Tofind);
        if(result){

        
        console.log({result});
        console.log(`found ${await docCount} documents found`);
        console.log("rahul u got it");
            response.status(200).json({result});
        }

    } catch (error) {
        console.error(`error ${error}`);
        if (response && !response.finished) {
            // Check if 'res' is defined and has a 'status' method
            if (response.status) {
                response.status(500).json({ error: 'Internal Server Error' });
            } else {
                console.error("Response object is missing catch 'status' method.");
            }
        }
    } finally {
        await closeDatabaseConnection();
    }
};