const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb+srv://tushita:tushita123@cluster0.6zc7x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => console.error(error))

//   const mongoose = require('mongoose');
//   const db = 'mongodb+srv://tushita:tushita123@cluster0.6zc7x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//   mongoose
//       .connect(db, { 
//           useNewUrlParser: true,
//           useCreateIndex: true
//         })
//       .then(() => console.log('MongoDB connected...'))
//       .catch(err => console.log(err));


app.listen(5000, () => console.log('Server running'));