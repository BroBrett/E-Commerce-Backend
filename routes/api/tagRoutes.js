const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

router.get("/", async (req, res) => {
    try {
      const allTags = await Tag.findAll({
        include: [Product],
      });
      res.status(200).json(allTags);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const oneTag = await Tag.findOne({
        include: [Product],
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(oneTag);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post("/", async (req, res) => {
    try {
      const createTag = await Tag.create(req.body);
      res.status(200).json(createTag);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      const updateTag = await Tag.update(
        {
          tag_name: req.body.tag_name,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json(updateTag);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const deleteTag = await Tag.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(deleteTag);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;