const mongoose = require('mongoose');

const COLLECTION_NAME = "Pet Shops";
const DOCUMENT_NAME = "shop";

const userSchema = new mongoose.Schema({
    timestamp: true,
    collection: COLLECTION_NAME,
    name:{
        type:String,
        trim: true,
        maxLength: 150,
      },
    email:{
        type:String,
        trim: true,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        trim: true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
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

module.exports = mongoose.model('User', userSchema);