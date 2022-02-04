const express = require("express");
const router = express.Router();
const newsController = require("../controllers/news.controller");

router.get("/news", newsController.create);

module.exports = router;