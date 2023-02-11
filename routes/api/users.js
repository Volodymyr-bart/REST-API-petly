const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/users");
const { schemas } = require("../../models/user");
const upload = require("../../middlewares/multer");

const { validateBody, authenticate } = require("../../middlewares");
const { userPetsValidationSchema } = require("../../models/userPets");

router.get("/current", authenticate, ctrl.currentUser);

router.post(
  "/add-pets",
  authenticate,
  upload.single("photo"),
  validateBody(userPetsValidationSchema),
  ctrl.addUserPet
);

router.patch(
  "/update",
  authenticate,
  upload.single("userAvatar"),
  validateBody(schemas.updateSchema),
  ctrl.updateUser
);

router.delete("/delete/:petId", authenticate, ctrl.deleteUserPet);

module.exports = router;
