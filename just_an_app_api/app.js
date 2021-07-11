const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb+srv://tushita:tushita123@cluster0.6zc7x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useUnifiedTopology: true }
)
  .then((client) => {
    const db = client.db("just-an-app");
    app.locals.db = db;
    const quotesCollection = db.collection("quotes");
    app.locals.collection = quotesCollection;
    console.log("Connected to Database");
  })
  .catch((error) => console.error(error));

//   const mongoose = require('mongoose');
//   const db = 'mongodb+srv://tushita:tushita123@cluster0.6zc7x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//   mongoose
//       .connect(db, {
//           useNewUrlParser: true,
//           useCreateIndex: true
//         })
//       .then(() => console.log('MongoDB connected...'))
//       .catch(err => console.log(err));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(5000, () => console.log("Server running"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/", (req, res) => {
  app.locals.db
    .collection("quotes")
    .find()
    .toArray()
    .then((results) => {
      console.log(results);
      res.render("index.ejs", { quotes: results });
    })
    .catch((error) => console.error(error));
  // ...
});

// app.post("/quotes", (req, res) => {
//     quotesCollection
//       .insertOne(req.body)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => console.error(error));
// });

app.post("/quotes", (req, res) => {
  app.locals.collection
    .insertOne(req.body)
    .then((result) => {
      res.redirect("/");
    })
    .catch((error) => console.error(error));
});
