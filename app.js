var express = require('express');
var app = express();
var mustache = require('mustache-express');

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.use(express.static('public'))

function guessCurrentGuess(){
  return Math.floor( (max - min) / 2 );
}

var min = 0;
var max = 100;
var currentGuess = guessCurrentGuess();

app.get('/', function(req, res){
  res.render("index.mustache", {currentGuess: currentGuess});
})

app.listen(3000, function(){
  console.log("Listening on http://0.0.0.0:3000")
})
