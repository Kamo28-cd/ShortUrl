const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const config = require("config");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");

const app = express();

//this Bodyparse middleware helps handle top sent from an api as an object
app.use(express.json());

//loading the environment variables
dotenv.config({ path: "./config.env" });

const server = http.createServer(app);

//Dev loggin
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// DB config
const db = config.get("mongoURI");

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI || db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`MongoDB connected`));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("/", (req, res) => res.send("Home page is online..."));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.use("/api/url", require("./routes/api/url"));

const port = process.env.PORT || 5001;
server.listen(port, () => `Server started on ${port}`);
