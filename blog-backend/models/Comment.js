const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', CommentSchema);
