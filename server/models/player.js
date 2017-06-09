// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var playerSchema = new Schema({
  playerId: Number,
  dob: Number,
  fullName: String,
  nationality: String,
  price: Number,
  rightArmBat: Boolean,
  rightArmBowl: Boolean,
  role: {type : Array , "default" : [] },
  shortName: String,
  teamId: Number,
  teamAbbreviation:String,
  uncapped: Boolean,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// the schema is useless so far
// we need to create a model using it
var Player = mongoose.model('Player', playerSchema);

// make this available to our users in our Node applications
module.exports = Player;
