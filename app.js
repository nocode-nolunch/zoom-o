var express = require('express');
var app = express();
app.get('/', function (req, res) {
	res.send("mooz");
});
app.listen(5000);
