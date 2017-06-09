const express = require('express');
const router = express.Router();
var Squad = require('../models/squad');

router.post('/create', (req, res) => {

    // get squad with ID of 1
    Squad.find({squadId:1}, function(err, squad) {
      if (err) throw err;

      var newSquad;

      if(squad.length > 0){
        // create a new Squad
        var newSquad = squad[0];
        newSquad.players=req.body.players;
      }
      else{
        var newSquad = Squad({
              squadId:req.body.squadId,
              squadname:req.body.squadname,
              players: req.body.players
        });
      }

      // save the Squad
      newSquad.save(function(err) {
          if (err) throw err;
          res.status(200).json('Squad created!');
          console.log('Squad created!');
        });
      

    });
});

router.get('/get', (req, res) => {
  // get the Squad
  var squad_id = req.param('squadId');

  Squad.find({squadId:squad_id}, function(err, squad) {
    if (err) throw err;

    // object of the Squad
    res.status(200).json(squad);
    console.log(squad);
  });
});

module.exports = router;