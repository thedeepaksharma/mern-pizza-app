const router = require("express").Router();
const Product = require("../models/Product");

//CREATE POST
router.post("/", async (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    img: req.body.img,
    price: req.body.price,
    amount: req.body.amount,
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
