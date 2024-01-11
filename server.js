require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const router = require("./router/auth");
const connectDb = require("./utils/db");
app.use(express.json());
app.use(cors());

app.use("/api/auth", router);

connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("server is running");
  });
});
