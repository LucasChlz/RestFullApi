const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restful', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.set('useFindAndModify', false);

module.exports = mongoose;