const express = require('express');

const ctrl = require('../../controllers/auth');

const { validateBody, authenticate } = require('../../middlewares');

const { schemas } = require('../../models/user');

const router = express.Router();

// signup
router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

// signin
router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

// router.get("/current", authenticate, ctrl.currentUser);

// check email in DB
router.get('/check-email', ctrl.checkEmail);

router.patch(
  '/users',
  validateBody(schemas.updateSchema),
  authenticate,
  ctrl.updateUser
);

router.post('/logout', authenticate, ctrl.logout);

module.exports = router;
