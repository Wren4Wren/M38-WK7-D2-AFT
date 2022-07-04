require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);
const connection = async () => {
  try {
    await client.connect();
    // console.log("Sucessful Connection");
    const db = client.db("Films");
    return db.collection("Films");
  } catch (error) {
    console.log(error);
  }
};
// connection();
// CHECKING CONNECTION TO DATABASE

module.exports = { client, connection };
