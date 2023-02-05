const { Schema, model } = require('mongoose');

const noticeShema = Schema(
  {
    category: {
      type: String,
      enum: ['lost-found', 'in-good-hands', 'sell'],
    },
    title: {
      type: String,
      required: [true, 'Set title for notice'],
    },
    name: {
      type: String,
    },
    birthday: {
      type: Date,
    },
    breed: {
      type: String,
    },
    theSex: {
      type: String,
      enum: ['male', 'female'],
    },
    location: {
      type: String,
    },
    price: {
      type: Number,
    },
    petAvatar: {
      type: String,
    },
    comments: {
      type: String,
    },
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'user',
    // },
  },
  { versionKey: false, timestamps: true }
);

const Notice = model('notice', noticeShema);

module.exports = Notice;
