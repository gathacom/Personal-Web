const express = require('express');
const cons = require('consolidate');
const mongoose = require('mongoose');
const path = require('path');

const Message = require('./models/message');

const app = express();


mongoose.connect('mongodb://127.0.0.1/personal_web')
.then(() => {
    console.log('connect to db');
}).catch((err) => {
    console.log(err);
})

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'docs'));
app.set('view engine', 'html');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/src/images', express.static('src/images'));
app.use('/src/svg', express.static('src/svg'));

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/message',async (req, res) => {
    const message = new Message(req.body.message);
    await message.save();
    console.log(message);
    res.redirect('/');
})

app.listen(3000, () => {
    console.log('Server is running on http://127.0.0.1:3000');
})