const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const Album = new Schema({
    title: { type: String, required: true },
    type: {type: String, required: true},
    description: { type: String, default: '' },
    children: [{ type: mongoose.Types.ObjectId, ref: 'File' }],
    user: { type: mongoose.Types.ObjectId, ref: 'User' }
})

module.exports = model('Album', Album);