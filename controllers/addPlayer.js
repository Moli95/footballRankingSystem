var bodyParser = require('body-parser');

var data = [
	{
		playerName: "Tom",
		points: 1200
	},
	{
		playerName: "Mark"
		points: 1300
	},
	{
		playerName: "Kati",
		points: 800
	}
];

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

app.get('/addPlayer', function(req, res) {
	res.render('addPlayer', {players: data});
});

app.post('/addPlayer', urlencodedParser, function(req, res) {
	data.push(req.body);
	res.json(data);
	console.log(data);

});

app.delete('/addPlayer', function(req, res) {
	
});

}