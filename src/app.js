const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const { addFilm, listFilms } = require("./utils");

const app = async (yargsObj) => {
  const collection = await connection();
  if (yargsObj.add) {
    await addFilm(collection, { Title: yargsObj.Title, Actor: yargsObj.Actor });
    console.log("Entry Added");
  } else if (yargsObj.list) {
    await listFilms(collection);
  } else {
    console.log("Incorrect Command");
  }
  // close connection to database
  await client.close();
};

app(yargs.argv);
