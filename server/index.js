const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth');
const corsMiddleware = require('./middleware/cors');

const app = express();
const port = process.env.PORT || config.get('port');

app.use(corsMiddleware);
app.use(express.json());    
app.use(express.urlencoded({ extended: false }));
app.use('/auth', authRouter);

const startApp = async () => {
    try {
        await mongoose.connect(config.get('databaseURL'), {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });

        app.listen(port, () => console.log(`Server has been started at ${port} port`));
    } catch (err) {
        console.log(err);
    }
}
startApp();