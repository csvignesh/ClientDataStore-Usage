var express = require('express')
var serveStatic = require('serve-static');
var app = express();

// Configure the Lasso.js
require('lasso').configure({
    plugins: [
        'lasso-marko',
        'lasso-less'
    ]
});

app.set('port', 8080);
app.use('/static', serveStatic(__dirname + '/static'));

app.get('/', require('./client'));

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})