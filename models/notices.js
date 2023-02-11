const { Schema, model } = require("mongoose");
const Joi = require("joi");

const textRegexp = /^[a-z ,.'-]+$/i;
const dateRegexp = /(0[1-9]|[12][0-9]|3[01])[- -.](0[1-9]|1[012])[- -.](19|20)\d\d/;
const numberRegexp = /^[1-9]\d*$/;

const noticeShema = Schema(
  {
    category: {
      type: String,
      enum: ["lost-found", "in-good-hands", "sell", "favorite-ads", "my-ads"],
      required: true,
    },
    title: {
      type: String,
      required: [true, "Set title for notice"],
    },
    name: {
      type: String,
      match: textRegexp,
    },
    birthday: {
      type: Date,
    },
    breed: {
      type: String,
    },
    theSex: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    petAvatar: {
      type: Object,
      default: null,
    },
    comments: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Notice = model("notice", noticeShema);

const noticeValidationSchema = Joi.object({
  category: Joi.string(),
  title: Joi.string().min(2).max(48).pattern(textRegexp).required(),
  name: Joi.string().min(2).max(16).pattern(textRegexp),
  birthday: Joi.string().pattern(dateRegexp),
  breed: Joi.string().min(2).max(24).pattern(textRegexp),
  theSex: Joi.string(),
  location: Joi.string(),
  price: Joi.string().pattern(numberRegexp).required(),
  // petAvatar: Joi.string(),
  comments: Joi.string().min(8).max(120).required(),
});

module.exports = {
  Notice,
  noticeValidationSchema,
};
