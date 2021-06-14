const User = require('../models/user');
const Album = require('../models/album');
const File = require('../models/file');
const fileService = require('../services/fileService');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const config = require('config');

class FileController {
    async addFiles(req, res) {

        const file = req.files.file;
        const { albumTitle, fileType } = req.body;

        const { _id } = await User.findById(req.user.id);

        const getAlbumAndSetFiles = async (title, type) => {
            const album = await Album.findOne({ title, type });
            const filePath = path.join(__dirname, `../files/${_id}/${type}/albums/${album._id}/${file.name}`);

            // if (fs.existsSync(filePath)) {
            //     return res.status(400).json({message: `File ${file.name} already exists`})
            // }

            await file.mv(filePath);

            const newFile = new File({
                name: file.name,
                type: fileType,
                parent: album._id,
                user: _id,
            })

            await newFile.save();
            album.children.push(newFile._id);
            await album.save();

            const files = await File.find({ type, parent: album._id, user: req.user.id });
            return res.json({files});
        }

        const existingAlbum = await Album.findOne({ title: albumTitle, type: fileType });

        if (!existingAlbum) {
            const newAlbum = new Album({ title: albumTitle, description: '', type: fileType, user: _id });
            await newAlbum.save();
            await fileService.createAlbum(newAlbum);

            getAlbumAndSetFiles(albumTitle, fileType);
        } else {
            getAlbumAndSetFiles(albumTitle, fileType);
        }
    }


    async getFiles(req, res) {
        const { album, type } = req.query;

        try {
            const existingAlbum = await Album.findOne({ user: req.user.id, type, _id: album });
            const files = await File.find({ type, parent: album, user: req.user.id });

            console.log(files);
            return res.json({ files, album: existingAlbum });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Can not get files" });
        }

    }
}

module.exports = new FileController();