const mongoose = require('mongoose');

const COLLECTION_NAME = 'shops';
const DOCUMENT_NAME = 'shop';
const _MAX_LENGTH = 150;
const _MIN_LENGTH = 8;

const shopSchema = new mongoose.Schema({
  timestamp: true,
  collection: COLLECTION_NAME,
  name: {
    type: String,
    trim: true,
    maxLength: _MAX_LENGTH,
    minLength: _MIN_LENGTH,
    require: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive',
  },
  verify: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model(DOCUMENT_NAME, shopSchema);
