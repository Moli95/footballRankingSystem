var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to the database

mongoose.connect('mongodb://admin:admin@ds233895.mlab.com:33895/frs');

// create a schema - this is like a blueprint

var frsSchema = new mongoose.Schema({
	playerName: String,
	points: Number
});

var Frs = mongoose.model('players', frsSchema);


var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

app.get('/addPlayer', function(req, res) {
	// get data form mongodb and pass it to the view
	// Todo.find({item: 'Tom'}) // if I want one item
	Frs.find({}, function(err, data) {
		if (err) throw err;
		res.render('addPlayer', {players: data});
	});
});

app.post('/addPlayer', urlencodedParser, function(req, res) {
	// get data from the view and add it to mongoDB

	var newPlayersList = Frs(req.body).save(function(err, data) {
		if (err) throw err;
		res.json(data);
	});
});

app.delete('/addPlayer', function(req, res) {
	// delete the requested item from mongoDB

});



app.get('/ranking', function(req, res) {
	Frs.find({}, function(err, data) {
		if (err) throw err;
		res.render('ranking', {players: data});
	});
});

}