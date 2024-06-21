const express = require("express");
const routes = express.Router();
const shopPage = require("../controllers/product")

routes.get("/",shopPage.getShopPage);
    

module.exports = routes;