const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

const dbConnect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connection establized");
  } catch (error) {
    console.log("database connectuon failed");
    process.exit(0);
  }
};

module.exports = dbConnect;
