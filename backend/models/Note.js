const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Note', noteSchema);
