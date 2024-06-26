const http = require("http");
const express = require("express");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactusRoutes = require("./routes/contactus");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))
app.use("/admin",adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes)
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,"./","views","404.html"))
});
const server = http.createServer(app);

server.listen(3000);
