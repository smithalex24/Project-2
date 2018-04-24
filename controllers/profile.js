console.log('JS is working!');


// Include express 
var express = require('express');
var request = require('request');
var router = express.Router();

// Include the user model!
var User = require('../models/user');
var map;
var infowindow;

function initMap() {
        var seattle = {lat: 47.604800, lng: 47.604800};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: seattle
        });
        var marker = new google.maps.Marker({
          position: seattle,
          map: map
        });
      }




module.exports = router;