const { constants } = require('buffer');
const fs = require('fs');
const path = require('path');

class FileService {
    async createUserDir(id) {
        const filePath = path.join(__dirname, `../files/${id}`);

        try {
            await fs.promises.access(filePath, constants.F_OK);
        } catch (err) {
            await fs.promises.mkdir(filePath)
        }
    }

    async createAlbum({ type, user, _id }) {
        const filePath = path.join(__dirname, `../files/${user}/${type}/albums/${_id}`);

        try {
            await fs.promises.access(filePath, constants.F_OK);
        } catch (err) {
            await fs.promises.mkdir(filePath, { recursive: true })
        }
    }
}
module.exports = new FileService();