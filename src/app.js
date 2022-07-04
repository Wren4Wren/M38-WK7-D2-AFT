const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const { addFilm, listFilms, editFilm } = require("./utils");

const app = async (yargsObj) => {
  const collection = await connection();

  if (yargsObj.add) {
    await addFilm(collection, { Title: yargsObj.Title, Actor: yargsObj.Actor });
    console.log("Entry Added");
  } else if (yargsObj.list) {
    await listFilms(collection);
  } else if (yargsObj.edit) {
    await editFilm(
      collection,
      { Title: yargsObj.Title, Actor: yargsObj.Actor },
      { $set: { Title: yargsObj.Title, Actor: yargsObj.Actor } }
    );
    console.log("Entry updated");
  } else {
    console.log("Incorrect Command");
  }
  // close connection to database
  await client.close();
};

app(yargs.argv);
