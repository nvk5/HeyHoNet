const { check, body, validationResult } = require('express-validator');

module.exports = async (req, res, next) => {
    await body('email', 'Invalid email').isEmail().run(req);
    await body('password', 'Password must be longer than 3').isLength({ min: 3 }).run(req);

    const errors = validationResult(req);
    req.validation = {
        isValid: errors.isEmpty(),
        errors
    }

    next();
}