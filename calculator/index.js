'use strict';

var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(index.html);
});

app.use(function (req, res, next) {
    res.status(404).send("Sorry I can't find that!")
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.listen(PORT, function () {
    console.log('App listening on port ' + PORT + '!');
});