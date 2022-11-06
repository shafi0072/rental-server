// dependesis
const express = require("express");
const router = express.Router();
const subRouteBook = require('./subRouter/book')
const {
  post,
  postMany,
  rentData,
  updateData,
  deleteData,
  rentDataMany,
} = require("../helper/rent");

// init subRoute
router.use('/book', subRouteBook);

// CRUD opertaion
router.post("/", post);

router.post("/all", postMany);

router.get("/", rentData);

router.get('/:code', rentDataMany)

router.put("/:id", updateData);

router.delete("/:id", deleteData);

module.exports = router;
