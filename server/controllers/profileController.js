const User = require('../models/user');

class ProfileController {
    async editMain(req, res) {
        try {
            const { firstName, lastName, gender, relationship, age, hometown } = req.body

            const updatedUser = await User.findByIdAndUpdate(req.user.id, {
                $set: {
                    'personalInfo.mainInfo.firstName': firstName,
                    'personalInfo.mainInfo.lastName': lastName,
                    'personalInfo.mainInfo.gender': gender,
                    'personalInfo.mainInfo.relationship': relationship,
                    'personalInfo.mainInfo.age': age,
                    'personalInfo.mainInfo.hometown': hometown
                }
            }, { new: true });

            await updatedUser.save();

            return res.json({ updatedUser });
        } catch (err) {
            console.log(err);
            res.send({ message: 'Server error' })
        }
    }
    async editContacts(req, res) {
        try {
            const { mobile, altPhone, facebook, skype, gmail, whatsapp, telegram, instagram, personalWebsite, vkontakte } = req.body;

            const updatedUser = await User.findByIdAndUpdate(req.user.id, {
                $set: {
                    'personalInfo.contactInfo.mobile': mobile,
                    'personalInfo.contactInfo.altPhone': altPhone,
                    'personalInfo.contactInfo.skype': skype,
                    'personalInfo.contactInfo.facebook': facebook,
                    'personalInfo.contactInfo.vkontakte': vkontakte,
                    'personalInfo.contactInfo.gmail': gmail,
                    'personalInfo.contactInfo.whatsapp': whatsapp,
                    'personalInfo.contactInfo.telegram': telegram,
                    'personalInfo.contactInfo.instagram': instagram,
                    'personalInfo.contactInfo.personalWebsite': personalWebsite,
                }
            }, { new: true });

            await updatedUser.save();

            return res.json({ updatedUser });
        } catch (err) {
            console.log(err);
            res.send({ message: 'Server error' })
        }
    }
    async editInterests(req, res) {
        try {
            const { hobbies, favouriteMovies, favouriteMusic, favouriteBooks, favouriteGames, aboutInfo } = req.body

            const updatedUser = await User.findByIdAndUpdate(req.user.id, {
                $set: {
                    'personalInfo.interests.hobbies': hobbies,
                    'personalInfo.interests.favouriteMovies': favouriteMovies,
                    'personalInfo.interests.favouriteMusic': favouriteMusic,
                    'personalInfo.interests.favouriteBooks': favouriteBooks,
                    'personalInfo.interests.favouriteGames': favouriteGames,
                    'personalInfo.interests.aboutInfo': aboutInfo
                }
            }, { new: true });

            await updatedUser.save();

            return res.json({ updatedUser });
        } catch (err) {
            console.log(err);
            res.send({ message: 'Server error' })
        }
    }
    async editEducation(req, res) {
        try {
            const { educationCountry, educationState, educationCity, institution, modeOfStudy, status, entranceYear, graduationYear } = req.body

            const updatedUser = await User.findByIdAndUpdate(req.user.id, {
                $set: {
                    'personalInfo.education.educationCountry': educationCountry,
                    'personalInfo.education.educationState': educationState,
                    'personalInfo.education.educationCity': educationCity,
                    'personalInfo.education.institution': institution,
                    'personalInfo.education.modeOfStudy': modeOfStudy,
                    'personalInfo.education.status': status,
                    'personalInfo.education.entranceYear': entranceYear,
                    'personalInfo.education.graduationYear': graduationYear,
                }
            }, { new: true });

            await updatedUser.save();

            return res.json({ updatedUser });
        } catch (err) {
            console.log(err);
            res.send({ message: 'Server error' })
        }
    }
    async editCareer(req, res) {
        try {
            const { careerCountry, careerState, careerCity, company, position, from, to } = req.body

            const updatedUser = await User.findByIdAndUpdate(req.user.id, {
                $set: {
                    'personalInfo.career.careerCountry': careerCountry,
                    'personalInfo.career.careerState': careerState,
                    'personalInfo.career.careerCity': careerCity,
                    'personalInfo.career.company': company,
                    'personalInfo.career.position': position,
                    'personalInfo.career.from': from,
                    'personalInfo.career.to': to,
                }
            }, { new: true });

            await updatedUser.save();

            return res.json({ updatedUser });
        } catch (err) {
            console.log(err);
            res.send({ message: 'Server error' })
        }
    }
}

module.exports = new ProfileController();