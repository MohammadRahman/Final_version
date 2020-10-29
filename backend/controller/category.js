exports.createCategory = (req, res) => {
  const Category = require("../models/category");

  const createCat = new Category(req.body);

  createCat.save((err, category) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "Failed to add new Category",
      });
    }
    res.json({ category });
  });
};
