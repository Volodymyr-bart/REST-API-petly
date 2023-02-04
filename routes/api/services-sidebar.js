const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const { services: ctrl } = require("../../controllers");

router.get("/", ctrlWrapper(ctrl.getServices));
module.exports = router;
