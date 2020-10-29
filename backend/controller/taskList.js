// Get Product by it's id added by Oba
exports.productById = (req, res, next, id) => {
  Product.findById(id).exec((err, product) => {
    if (err || !product) {
      return res.status(400).json({
        error: "Product not found",
      });
    }
    req.product = product;
    next();
  });
};
// get the values of a product by it's id
exports.getProductById = (req, res) => {
  const { _id } = req.body;
  console.log(_id);
  Product.findOne({ _id }, (err, product) => {
    // console.log("error", err);
    if (err || !product) {
      return res.status(400).json({
        error: "Error getting the product.",
      });
    }

    return res.json({ product, message: "Product retreived" });
  });
};
// Get all
exports.getList = (req, res) => {
  const listOfProducts = Product.find()
    .then((list) =>
      res.status(200).json({
        listOfProducts: list,
      })
    )
    .catch((err) => console.log(err));
};
