const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const User = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    personalInfo: {
        age: {type: Number},
        city: {type: String},
        birthDate: {type: String},
        hobby: [{type: String}],
        education: [{type: String}],
        maritalStatus: {type: String}
    },
    todos: [{ type: mongoose.Types.ObjectId, ref: 'Todos' }],
    albums: [{ type: mongoose.Types.ObjectId, ref: 'PhotoAlbum' }],
    videos: [{ type: mongoose.Types.ObjectId, ref: 'VideoAlbum' }],
    audios: [{ type: mongoose.Types.ObjectId, ref: 'AudioAlbum' }],
    friends: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
})

module.exports = model('User', User);