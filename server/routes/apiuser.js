const express = require('express');
const router = express.Router();
// if our user.js file is at app/models/user.js
var User = require('../models/user');

// Get all posts
router.get('/create', (req, res) => {
    // create a new user
    var newUser = User({
      name: 'Raju Dutta',
      username: 'Raju',
      password: 'password',
      admin: true
    });

    // save the user
    newUser.save(function(err) {
      if (err) throw err;
      res.status(200).json('User created!');
      console.log('User created!');
    });
});

router.get('/get', (req, res) => {
  // get all the users
  User.find({}, function(err, users) {
    if (err) throw err;

    // object of all the users
    res.status(200).json(users);
    console.log(users);
  });
});

module.exports = router;