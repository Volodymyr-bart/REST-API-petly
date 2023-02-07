/* eslint-disable no-useless-escape */
const { Schema, model } = require("mongoose");
const Joi = require("joi");

const phoneJoi = Joi.extend(require("joi-phone-number"));

const { handleMongooseError } = require("../helpers");

const emailRegexp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const nameRegexp = /^[a-z ,.'-]+$/i;

const passRegexp = /^\S+$/;

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
    token: {
      Type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  name: Joi.string()
    .pattern(nameRegexp)
    .required()
    .messages({ "string.pattern.base": "Лише літери англійського алфавіту" }),
  email: Joi.string().pattern(emailRegexp).required(),
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
