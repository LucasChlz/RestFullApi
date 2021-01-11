const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        return cb(null, "resource/uploads/")
    },
    filename: (request, file, cb) => {
    
        crypto.randomBytes(16, (err, hash) => {
            if (err) cb(err);

            const fileName = `${hash.toString('hex')}-${file.originalname}`;

            return cb(null, fileName);
        });      
    }
});

const upload = multer({
    storage: storage,
    
    fileFilter: (request,file, cb) => {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            request.fileValidationError = 'Only images and gif';
            return cb(null, false, new Error('Only images and gif'));
        }
        return cb(null, true)
    },

});

module.exports = upload;