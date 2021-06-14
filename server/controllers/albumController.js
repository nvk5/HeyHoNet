const User = require('../models/user');
const Album = require('../models/album');
const fileService = require('../services/fileService');

class AlbumController {
    async createAlbum(req, res) {
        try {
            const { title, description, type } = req.body;
            const { _id } = await User.findById(req.user.id);

            const existingAlbum = await Album.findOne({ title, user: _id, type });
            if (existingAlbum) {
                return res.status(400).json({ message: 'Album already exists' })
            }

            const newAlbum = new Album({ title, description, type, user: _id });
            await newAlbum.save();
            await fileService.createAlbum(newAlbum);

            const albums = await Album.find();
            return res.json(albums);
        } catch (err) {
            console.log(err);
            res.send({ message: 'Server error' })
        }
    }

    async getAlbums(req, res) {
        try {
            const albums = await Album.find({ user: req.user.id, type: req.query.type });
            return res.json(albums);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Can not get files" });
        }
    }
}

module.exports = new AlbumController();