const { Schema, model } = require('mongoose');

const COLLECTION_NAME = 'tokens';
const DOCUMENT_NAME = 'token';


const tokenSchema = new Schema({
  collection: COLLECTION_NAME,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'shop',
    required: true,
  },
  publicKey: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: Array,
    default: [],
  },
});

module.exports = model(DOCUMENT_NAME, tokenSchema);
