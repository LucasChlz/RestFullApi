const { mongo } = require('../database/database');
const mongoose = require('../database/database');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    fileUniq: {
        type: String,
        required: true
    },
    fileUri: {
        type: String,
        required: false
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;