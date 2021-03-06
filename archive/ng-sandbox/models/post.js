// Generated by CoffeeScript 1.6.3
(function() {
  var Schema, mongoose, postSchema;

  mongoose = require("mongoose");

  Schema = mongoose.Schema;

  postSchema = Schema({
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true,
      unique: true
    },
    created: {
      type: Date,
      "default": Date.now
    }
  });

  module.exports = mongoose.model("Post", postSchema);

}).call(this);
