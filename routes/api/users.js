const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/users");
const { schemas } = require("../../models/user");

const { validateBody, authenticate } = require("../../middlewares");

const { userPetsValidationSchema } = require("../../models/userPets");

router.get("/current", authenticate, ctrl.currentUser);

router.post("/add-pets", authenticate, validateBody(userPetsValidationSchema), ctrl.addUserPet);

router.patch("/update", validateBody(schemas.updateSchema), authenticate, ctrl.updateUser);

router.delete("/delete/:petId", authenticate, ctrl.deleteUserPet);

module.exports = router;
