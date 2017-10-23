var express = require('express');
var addPlayer = require('./controllers/addPlayer.js');


var app = express();


//se tup template engine

app.set('view engine', 'ejs');

// static files


app.use(express.static('./public'));



// fire controllers 


addPlayer(app);


// listen to port

app.listen(3000);
console.log('Youare listening to port 3000');

