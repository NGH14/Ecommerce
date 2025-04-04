const mongoose = require('mongoose');

const COLLECTION_NAME = 'tokens';
const DOCUMENT_NAME = 'token';


const tokenSchema = new mongoose.Schema({
  collection: COLLECTION_NAME,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'shop',
    required: true,
  },
  publicKey: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(DOCUMENT_NAME, tokenSchema);
