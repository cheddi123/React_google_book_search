const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/booklist"
);

const bookSeed = [
  {
    _id:0,
    title: "The client",
    author:  "John Grisham",
    description:"A client was setup and now he has to bail himself",
    infoLink:"https://google.com",
    imageLink:"dsfsggd",
    date: { type: Date, default: Date.now }
  }
]

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
