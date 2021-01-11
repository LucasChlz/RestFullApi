const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config.json');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));

require('./controllers/PostController')(app);

app.listen(PORT);



