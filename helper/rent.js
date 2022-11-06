const RentSchema = require("../Schemas/rental");
const moongose = require("mongoose");
const RentModel = new moongose.model("Rent", RentSchema);

const post = async (req, res) => {
  const newData = new RentModel(req.body);

  await newData.save((err) => {
    if (err) {
      res.status(500).json({ err: "there was a server side error" });
    } else {
      res.status(200).json({ message: "Post successfully" });
    }
  });
};

const postMany = async (req, res) => {
  await RentModel.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({ err: "there was a server side error" });
    } else {
      res.status(200).json({ message: "Post successfully" });
    }
  });
};

const rentData = (req, res) => {
  RentModel.find((err, data) => {
    if (err) {
      res.status(500).json({ err: "there was a server site error1" });
    } else {
      res.status(200).json(data);
    }
  });
};

const rentDataMany = (req, res) => {
  RentModel.find({code: req?.params?.code},(err, data) => {
    if (err) {
      res.status(500).json({ err: "there was a server site error1" });
    } else {
      res.status(200).json(data);
    }
  });
};

const updateData = async (req, res) => {
  await RentModel.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    },
    (err) => {
      if (err) {
        res.status(500).json({ err: "there was a server site error1" });
      } else {
        res.status(200).json({
          message: "data was inserted",
        });
      }
    }
  );
};
const deleteData = async (req, res) => {
  await RentModel.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({ err: "there was a server site error1" });
    } else {
      res.status(200).json({
        message: "data was inserted",
      });
    }
  });
};

module.exports = { post, postMany, rentData, updateData, deleteData, rentDataMany };
