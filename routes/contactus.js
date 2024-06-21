const express = require("express");
const routes = express.Router();
const contactusController = require("../controllers/contact");

routes.get("/admin/contactus",contactusController.getContactusPage);
routes.post("/admin/contactus",contactusController.postSuccessPage);
routes.get("/success",contactusController.getSuccessPage)

module.exports = routes;