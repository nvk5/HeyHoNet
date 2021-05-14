const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const Post = new Schema({
    author: { type: mongoose.Types.ObjectId, ref: 'User' },
    text: String,
    date: { type: Date, default: new Date() },
    likes: [{ type: mongoose.Types.ObjectId, ref: 'Like' }],
    comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
    shares: [{ type: mongoose.Types.ObjectId, ref: 'Share' }],
})

module.exports = model('Post', Post);