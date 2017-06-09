const express = require('express');
const router = express.Router();

var Squad = require('../models/squad');
var Player = require('../models/player');
var jsonfile = require('jsonfile');
var file = './server/json/players.json';

router.post('/create', (req, res) => {
    // create a new Player
    var newPlayer = Player(req.body);

    // save the player
    newPlayer.save(function(err) {
      if (err) throw err;
      res.status(200).json('Player created!');
      console.log('Player created!');
    });
});

router.get('/get', (req, res) => {
  Squad.find({squadId:1}, function(err, squad) {
    if (err) throw err;

     // get all the players
      jsonfile.readFile(file, function(err, allPlayers) {
          if (err) throw err;
          var players = allPlayers.data;
          console.log(squad);
          if(squad.length > 0){
            players = intersect(allPlayers.data,squad[0].players);
          }
          res.status(200).json(players);
      });
  });
});

function intersect(arr1, arr2) {
            var intersect = [];
            for(var i=0;i<arr1.length;i++){
              var a =arr1[i];
              var isAvailableToSquad=false;
              for(var j=0;j<arr2.length;j++){
                  var b=arr2[j];
                  isAvailableToSquad=AvailableToSquad(a, b);
                  if(isAvailableToSquad)
                    break;
              }
              if (!isAvailableToSquad){
                         intersect.push(a);
              }
            }

            return intersect;
}
function AvailableToSquad(a, b) {
            if (a.playerId === b.playerId)
                return true;
            else return false;
}

module.exports = router;