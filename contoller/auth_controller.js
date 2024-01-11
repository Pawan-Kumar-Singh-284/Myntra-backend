
const Product = require("../model/product-model");
const home = async (req, res) => {
  try {
    res.status(200).send("hello this is home page");
  } catch (error) {
    console.log(error);
  }
};



const items = async (req, res) => {
  try {
    const items = await Product.find({});
    res.status(200).json({ items });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, items };
