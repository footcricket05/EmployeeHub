const express = require("express");
const app = express();
const ejs = require("ejs");
const { MongoClient } = require("mongodb");

let db; //database
//set the engine to read the ejs file
app.set("view engine", "ejs");

//passing the html data
app.use(express.urlencoded({ extended: true }));

//creating two roots
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/contact", async (req, res) => {
  let result = await db.collection("Details").findOne({ name: req.body.name });
  if (!result) {
    res.send("USER NOT FOUND IN THE DATABASE");
  }
  res.render("view", { result });
});

const client = new MongoClient(
  "mongodb+srv://newuser:Tautika1910~@cluster0.jqepo.mongodb.net/proj_webpro?retryWrites=true&w=majority"
);
client.connect().then((mClient) => {
  db = mClient.db();
  console.log("connected");
  app.listen(4000, () => {
    console.log("4000 listening");
  });
});
