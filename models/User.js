const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  avatar: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date },
  notes: [{ type: Types.ObjectId, ref: 'Note' }]
});

module.exports = model('User', schema);
