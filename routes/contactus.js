const express = require("express");

const routes = express.Router();
const path = require('path');
const rootDir =require("../util/path");

routes.get("/admin/contactus", (req, res, next) => {
      res.sendFile(path.join(rootDir,"views","contactus.html"));
    });

    routes.post("/admin/contactus", (req, res, next) => {
      console.log(req.body);
      res.redirect('/success');
  });
    routes.get("/success",(req,res,next)=>{
      res.sendFile(path.join(rootDir,"views","success.html"))
    })

module.exports = routes;