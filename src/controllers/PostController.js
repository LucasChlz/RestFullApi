const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    
});


module.exports = app => app.use('/posts', router);