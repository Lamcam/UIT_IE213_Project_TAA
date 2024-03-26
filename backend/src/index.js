const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
const { default: mongoose } = require("mongoose");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

routes(app);
mongoose
  .connect(`${process.env.MONGODB}`)
  .then(() => {
    console.log("Connect database success");
  })
  .catch(() => {
    console.log("Serve is running in port", +port);
  });

app.listen(port, () => {
  console.log("Serve is running in port", +port);
});
