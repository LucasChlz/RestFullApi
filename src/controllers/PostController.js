const express = require('express');
const PostModel = require('../models/Post');

const upload = require('../middleware/FileAuth');

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await PostModel.find({});

    return res.json({ posts });
});

router.post('/store', upload.single('file'), async (req, res) => {
    const { title, fileUri } = req.body;

    const { originalname, filename} = req.file;

    await PostModel.create({
        title: title,
        fileName: originalname,
        fileUniq: filename,
        fileUri: fileUri
    });

    return res.json({ title, originalname, filename, fileUri});

});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const post = await PostModel.findOne({ _id: id}, (err, docs) => {
        if (err) {
            return res.status(204).json();
        } else {
            return res.json({ docs });
        }
    });
});


module.exports = app => app.use('/posts', router);