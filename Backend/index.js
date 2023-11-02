const { MongoClient } = require("mongodb");
const client = new MongoClient(
  "mongodb+srv://newuser:Tautika1910~@cluster0.jqepo.mongodb.net/proj_webpro?retryWrites=true&w=majority"
);

client.connect().then((mClient) => {
  const db = mClient.db();
  db.collection("Details")
    .insertMany([
      {
        name: "Tautik",
        phone: "9724629628",
        email: "abcxyz@gmail.com",
        protofolio: "https://tautik.github.io/src/",
      },
      {
        name: "RAGHAV",
        phone: "23948239084",
        email: "sdfj@dskfsd.com",

        portfolio: "/",
      },
      {
        name: "Tommy",
        phone: "234234",
        email: "asfdk12@gmail.com",

        portfolio: "/",
      },
    ])
    .then(() => {
      console.log("added");
    });
});
