const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const File = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    // data: {type: Buffer},
    parent: { type: mongoose.Types.ObjectId, ref: 'Album' },
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    likes: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    shares: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    comments: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
})

module.exports = model('File', File);