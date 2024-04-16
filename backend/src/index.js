const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

mongoose
    .connect(`${process.env.MONGODB}`)
    .then(() => {
        console.log("Connect database success");
    })
    .catch(() => {
        console.log("Serve is running in port", +port);
    });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser());
app.use(cookieParser());
routes(app);

app.listen(port, () => {
    console.log("Serve is running in port", +port);
});
