const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const User = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    personalInfo: {
        mainInfo: {
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },
            age: {type: Number},
            gender: {type: String},
            relationship: {type: String},
            hometown: {type: String}
        },
        contactInfo: {
            mobile: String,
            altPhone: String,
            skype: String,
            facebook: String,
            gmail: String,
            vkontakte: String,
            whatsapp: String,
            telegram: String,
            instagram: String,
            personalWebsite: String
        },
        interests: {
            hobbies: String,
            favouriteMovies: String,
            favouriteMusic: String,
            favouriteBooks: String,
            favouriteGames: String,
            aboutInfo: String
        },
        education: {
            educationCountry: String,
            educationState: String,
            educationCity: String,
            institution: String,
            faculty: String,
            modeOfStudy: String,
            status: String,
            entranceYear: String,
            graduationYear: String
        },
        career: {
            careerCountry: String,
            careerState: String,
            careerCity: String,
            company: String,
            position: String,
            from: String,
            to: String
        },
    },
    // todos: [{ type: mongoose.Types.ObjectId, ref: 'Todos' }],
    // photos: [{ type: mongoose.Types.ObjectId, ref: 'PhotoAlbum' }],
    // videos: [{ type: mongoose.Types.ObjectId, ref: 'VideoAlbum' }],
    // audios: [{ type: mongoose.Types.ObjectId, ref: 'AudioAlbum' }],
    // friends: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
})

module.exports = model('User', User);