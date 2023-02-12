/* eslint-disable no-useless-escape */
const { Schema, model } = require("mongoose");
const Joi = require("joi");

const phoneJoi = Joi.extend(require("joi-phone-number"));

const { handleMongooseError } = require("../helpers");

const emailRegexp =
  /^([A-Za-z0-9_\-\.]{3,})+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const nameRegexp = /^[a-z ,.'-]+$/i;

const passRegexp = /^\S+$/;

const dateRegexp =
  /(0[1-9]|[12][0-9]|3[01])[- -.](0[1-9]|1[012])[- -.](19|20)\d\d/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      match: nameRegexp,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      match: emailRegexp,
      minlength: 10,
      maxlength: 63,
      required: true,
    },
    password: {
      type: String,
      minlength: 7,
      match: passRegexp,
      required: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    birthday: {
      type: Date,
    },
    token: {
      Type: String,
    },
    userAvatar: {
      type: Object,
      default: null,
    },
    favorites: [{ type: Schema.Types.ObjectId, ref: "notice" }],
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  name: Joi.string()
    .pattern(nameRegexp)
    .required()
    .messages({ "string.pattern.base": "Лише літери англійського алфавіту" }),
  email: Joi.string().pattern(emailRegexp).min(10).max(63).required().messages({
    "string.pattern.base":
      "Email не має містити спецсимволів, має починатися від 3 символів перед собачкою",
    "string.min.base": "Мінімальна довжина 10 символів",
  }),
  password: Joi.string()
    .pattern(passRegexp)
    .min(7)
    .max(32)
    .required()
    .messages({ "string.pattern.base": "Пароль повинен бути без пробілів" }),
  address: Joi.string(),
  phone: phoneJoi
    .string()
    .phoneNumber({ defaultCountry: "UA", format: "national", strict: true }),
});

const updateSchema = Joi.object({
  name: Joi.string()
    .pattern(nameRegexp)
    .messages({ "string.pattern.base": "Лише літери англійського алфавіту" }),
  email: Joi.string().pattern(emailRegexp),
  address: Joi.string(),
  phone: phoneJoi
    .string()
    .phoneNumber({ defaultCountry: "UA", format: "national", strict: true }),
  birthday: Joi.string().pattern(dateRegexp),
  userAvatar: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(7).max(32).required(),
});

const checkEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

const schemas = {
  registerSchema,
  loginSchema,
  updateSchema,
  checkEmailSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
