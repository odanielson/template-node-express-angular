var express = require('express');
var morgan = require('morgan');

var app = express();

// Setup logging
app.use(morgan('combined'));

// Setup up views
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Setup static files
app.use('/static', express.static('static'));

// Setup routes
app.get('/', function (req, res) {
    res.render('index.html');
});

// Run server
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Template app listening at http://%s:%s', host, port);
});
