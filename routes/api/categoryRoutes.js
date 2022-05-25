const router = require("express").Router();
const { Category, Product } = require("../../models");


router.get("/", async (req, res) => {
    try {
      const allCategory = await Category.findAll({
        include: [Product],
      });
      res.status(200).json(allCategory);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/:id", async (req, res) => {
  try {
    const oneCategory = await Category.findOne({
      include: [Product],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(oneCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});
