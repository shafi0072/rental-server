const mongoose = require("mongoose");
const bookSchema = require("../Schemas/book");
const BookModel = new mongoose.model("book", bookSchema);

const post = async (req, res) => {
  const newBookModel = new BookModel(req.body);
  await newBookModel.save((err) => {
    if (err) {
      res.status(500).json({ err: "there was a server side error" });
    } else {
      res.status(200).json({ message: "Post successfully" });
    }
  });
};
const getData = (req, res) => {
  BookModel.find((err, data) => {
    if (err) {
      res.status(500).json({ err: "there was a server site error1" });
    } else {
      res.status(200).json(data);
    }
  });
};
module.exports = { post, getData };
