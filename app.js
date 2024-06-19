const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<html><head><title>task 2</title></head><body><form action="/product" method="POST" ><input type="text" name="title" /><input type="number" name="quantity" /><button type="submit">Add Product</button></form></body></html>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello Akshay</h1>");
});

const server = http.createServer(app);

server.listen(3000);
