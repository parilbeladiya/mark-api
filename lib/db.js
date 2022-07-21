const { MongoClient } = require('mongodb');
const uri = require("../url");
let client;

async function connetToMongoDB() {
    
    client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("connection Successfull")
    } catch (error) {
        console.log("Error -> ", error);
    }

    return client;
}

module.exports = connetToMongoDB;