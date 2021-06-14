const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const fileService = require('../services/fileService');
const File = require('../models/file');
class AuthController {
    async signUp(req, res) {
        try {
            const { email, password, firstName, lastName } = req.body;
            
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: `User with email ${email} already exists` });
            }

            const {isValid, errors} = req.validation;
            if (!isValid) {
                return res.status(400).json({message: `${errors.errors[0].msg}`});
            }

            const hashedPassword = await bcryptjs.hash(password, 7);
            const user = new User({ email, password: hashedPassword, personalInfo: { mainInfo: { firstName, lastName } } });
            await user.save();
            await fileService.createUserDir(user._id);
            return res.json({ message: 'User has been created', user });
        } catch (err) {
            console.log(err);
            res.send({ message: 'Server error' })
        }
    }

    async logIn(req, res) {
        try {
            const { email, password } = req.body;
            const existingUser = await User.findOne({ email });

            if (!existingUser) {
                return res.status(400).json({ message: 'User not found' });
            }

            const {isValid, errors} = req.validation;
            if (!isValid) {
                return res.status(400).json({message: `${errors.errors[0].msg}`});
            }

            const isPassValid = await bcryptjs.compare(password, existingUser.password);
            if (!isPassValid) {
                return res.status(400).json({ message: 'Invalid password' });
            }

            const token = jwt.sign({ id: existingUser._id }, config.get('secretJWTKey'), { expiresIn: '1 year' });
            return res.json({ token, user: existingUser });

        } catch (err) {
            res.send({ message: 'Server error' })
        }
    }

    async auth(req, res) {
        try {
            const user = await User.findOne({_id: req.user.id});
            const token = jwt.sign({id: user._id}, config.get('secretJWTKey'), {expiresIn: '1 year'});

            return res.json({ token, user });
        } catch (err) {
            res.send({ message: 'Server error' })
        }
    }
}

module.exports = new AuthController();