var express = require('express');
var app = express();
app.get('/', function (req, res) {
	res.send("zoom-erberg");
});
app.listen(5000);
