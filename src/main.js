const { Loki } = require("@lokidb/loki");

const db = new Loki("database");
const stuff = db.addCollection("stuff");
stuff.insertOne({ thing: "here" });

console.log(db);
