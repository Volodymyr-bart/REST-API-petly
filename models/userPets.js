/* eslint-disable no-useless-escape */
const { Schema, model } = require('mongoose');
const Joi = require('joi');

const textRegexp = /^[a-z ,.'-]+$/i;
const dateRegexp =
  /(0[1-9]|[12][0-9]|3[01])[- -.](0[1-9]|1[012])[- -.](19|20)\d\d/;

const userPetsSchema = new Schema(
  {
    name: {
      type: String,
      match: textRegexp,
      // required: true,
    },
    birthday: {
      type: Date,
      // required: true,
    },
    breed: {
      type: String,
      // required: true,
    },
    photo: {
      type: Object,
      default: null,
    },
    comments: {
      type: String,
      // required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const userPetsValidationSchema = Joi.object({
  name: Joi.string().min(2).max(16).pattern(textRegexp),
  birthday: Joi.string().pattern(dateRegexp),
  breed: Joi.string().min(2).max(16).pattern(textRegexp),
  // photo: Joi.string(),
  comments: Joi.string().min(8).max(120),
});

const UserPet = model('userPet', userPetsSchema);

module.exports = {
  UserPet,
  userPetsValidationSchema,
};
