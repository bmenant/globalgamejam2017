/*****************************************************************************************************
    gestion du serveur HTTP
******************************************************************************************************/


var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var server = app.listen(process.env.SOCKET_PORT);
var io = require('socket.io').listen(server);

app.use(bodyParser.json())


/*****************************************************************************************************
    gestion des sessions
******************************************************************************************************/
//app.use(session({ secret: 'keyboard cat'}))

/*****************************************************************************************************
    gestion des gets
******************************************************************************************************/

const options = { root: __dirname + '/../dist/' };

app.get('/', function (req, res) {
	res.sendFile('/index.html', options);
});
app.get('/bundle.js', function (req, res) {
    res.sendFile('/bundle.js', options);
});

function Games(channel){
  this.new_round;
  this.idRound= 1;
  this.channel = channel;
  this.nbplayers =0;

  var self = this;
  this.main = function(){
  self.new_round= setTimeout(()=>{
      self.waves(channel);
    }, 10000)
  }

  this.waves = function(){
    self.idRound++;
    io.sockets.in(self.channel).emit("incoming_wave", {roundId: self.idRound, wavePower: process.env.WAVE_POWER});
    console.log("incoming_wave"+ self.idRound, self.channel);
    self.main();
  }

  this.initialise = function(clientid){
     io.sockets.connected[clientid].emit("init", {board: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,3,3,3,3,3,0,0],

      [0,0,3,0,0,0,3,0,0],
      [0,0,3,0,1,0,3,0,0],
      [0,0,3,0,0,0,3,0,0],

      [0,0,3,3,3,3,3,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0]
      ], roundId: self.idRound});
  }
}


var List_Games = {};

io.sockets.on('connection', function (socket) {

	socket.on('register', function(message){
    if (List_Games[message.channel]) {
      console.log("Je rejoins la partie");
      socket.partie = List_Games[message.channel]
      socket.partie.initialise(socket.id);
    }
    else {
      console.log("Nouvelle partie");
      socket.partie= new Games(message.channel);
      List_Games[message.channel] = socket.partie;
      socket.partie.initialise(socket.id);
      socket.partie.main();
    }
    socket.partie.nbplayers++;
		socket.join(message.channel);
    console.log("connecter"+ message.channel);
	});

  socket.on('max_actions_reached', function(message) {
    console.log(message);
    if(message && typeof message.roundId === 'number' && message.roundId === socket.partie.idRound){
  		clearTimeout(socket.partie.new_round);
  		socket.partie.waves();
  	}
  });

	socket.on('disconnect', function () {
    console.log("user disconnect");

    if (socket.partie){
      socket.partie.nbplayers--;
      console.log("Il reste " +socket.partie.nbplayers+" sur le jeu" );
      if(socket.partie.nbplayers ==0){
        clearTimeout(socket.partie.new_round);
        delete List_Games[socket.partie.channel];
      }
    }
      
	});
});
