const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date },
  owner: { type: Types.ObjectId, ref: "User" }
});

module.exports = model("Note", schema);
