const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const fileUpload = require('express-fileupload');
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');
const albumRouter = require('./routes/albums');
const fileRouter = require('./routes/files')
const corsMiddleware = require('./middleware/cors');

const app = express();
const port = process.env.PORT || config.get('port');

app.use(fileUpload({}));
app.use(corsMiddleware);
app.use(express.json());    
app.use(express.urlencoded({ extended: false }));
// app.use(express.static('files'));
app.use('/auth', authRouter);
app.use('/edit', profileRouter);
app.use('/albums', albumRouter);
app.use('/files', fileRouter)

mongoose.set('returnOriginal', false);

const startApp = async () => {
    try {
        await mongoose.connect(config.get('databaseURL'), {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });

        app.listen(port, () => console.log(`Server has been started at ${port} port`));
    } catch (err) {
        console.log(err);
    }
}
startApp();