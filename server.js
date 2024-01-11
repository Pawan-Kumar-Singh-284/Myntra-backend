require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const router = require("./router/auth");
const connectDb = require("./utils/db");
app.use(express.json());
app.use(cors());

app.use("/api/auth", router);
const Port=process.env.PORT || 3000
connectDb().then(() => {
  app.listen(Port, () => {
    console.log("server is running on port",Port);
  });
});
