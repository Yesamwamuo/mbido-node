var express = require('express');
var app = express();

var port = process.env.PORT || 3000;


app.get('/', function (req, res) {

    res.send('OWWWWWWFARRRRRR NAAAAA!!!');
});

app.get('/api/:oruko', function (req, res) {
    res.json({
        kilode: req.params.oruko + ' Party Don start',
        kilonso: req.params.oruko + ' Make we start to roll kopuuuuuu!!!!'
    });
});

// app.listen(port);

module.exports.add = (a, b) => {
    return a + b;
};