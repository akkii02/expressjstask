const path = require("path");
const rootDir = require("../util/path");

exports.getContactusPage = (req, res, next) => {
      res.sendFile(path.join(rootDir, "views", "contactus.html"));
}

exports.postSuccessPage = (req, res, next) => {
      console.log(req.body);
      res.redirect('/success');
}

exports.getSuccessPage = (req, res, next) => {
      res.sendFile(path.join(rootDir, "views", "success.html"))
}