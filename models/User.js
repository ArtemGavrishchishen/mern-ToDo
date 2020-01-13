const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  notes: [{ type: Types.ObjectId, ref: "Note" }]
});

module.exports = model("User", schema);
