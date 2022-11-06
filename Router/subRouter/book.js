// dependesis
const express = require("express");
const { post, getData } = require("../../helper/book");
const router = express.Router();

router.post("/", post);

router.get("/", getData);

module.exports = router;
