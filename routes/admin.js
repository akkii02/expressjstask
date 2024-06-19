const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    '<html><head><title>task 2</title></head><body><form action="/admin/product" method="POST" ><input type="text" name="title" /><input type="number" name="quantity" /><button type="submit">Add Product</button></form></body></html>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
