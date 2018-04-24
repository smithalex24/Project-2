console.log('JS is working!');

var map;

function initMap() {
  console.log('initializing map');
        var seattle = {lat: 47.604800, lng: 47.604800};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: seattle
        });
        var marker = new google.maps.Marker({
          position: seattle,
          map: map
        });
        console.log(marker);
      };





