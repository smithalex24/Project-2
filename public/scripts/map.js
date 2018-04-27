console.log('JS is working!');


 
// Function to render search results and append specified result properties to results list
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      // createMarker(results[i]);///still neeed to figure out putting the marker down
      // $('#hikeList').append('<p>').append('Name: '+ results[i].name + ' ' +  'Rating: ' + results[i].rating + ' ' + 'Address: ' + results[i].formatted_address);

      $("#hikeList").append("<h3 class='hike-name'>"+results[i].name+"</h3>");
      $("#hikeList").append("<h5 class='hike-name'>"+results[i].rating+"</h5>");
      $("#hikeList").append("<h5 class='hike-name'>"+results[i].formatted_address+"</h5>");


      $("#hikeList").append("<form method='POST' action='/wishlist' id='form" + i + "'" + "></form>");//inputs and submit button must be inside form element
      $('#form'+i).append("<input type='hidden' name='name' value='"+ results[i].name +"'>");
      $('#form'+i).append("<input type='hidden' name='rating' value='"+ results[i].rating +"'>");
      $('#form'+i).append('<input type="hidden" name="location" value="'+ results[i].formatted_address +'">');
      $('#form'+i).append("<input type='submit' class='sub-button'>")
                    
      $("#hikeList").append("<hr>"); 


    }
  }
}


$('#refreshList').click(function() {
  $('#hikeList').empty();
  $('#search-hike').remove();
});

var getLocation =  function(address) {
  var latitude, longitude;
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': address}, function(results, status) {

  if (status == google.maps.GeocoderStatus.OK) {
      latitude = results[0].geometry.location.lat();
      longitude = results[0].geometry.location.lng();
      console.log(latitude, longitude);//this works
    } 
  }); 
  return {lat:latitude, lon: longitude};
}

// var test = getLocation("seattle");

$(".search-hike").on("submit", function(e){//this function gets called when I press the button
  e.preventDefault();                      //mostly working, just needs that damn lat long 
  // console.log($("#hike-input").val());
  var loc = $("#hike-input").val();
  // var finalLoc = getLocation(loc);


  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': loc}, function(results, status) {

  if (status == google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      // console.log(latitude, longitude);//this works
      var request = {
        location: {lat: latitude, lng: longitude},//the name I get from the input
        radius: '50',
        query: 'hike'
      };


      service = new google.maps.places.PlacesService(map);
      service.textSearch(request, callback);
        } 
  }); 

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.4957, lng: -122.335167},
    zoom: 13,
    mapTypeId: 'roadmap',
  
  });
})

function searchHikes(){
// e.preventDefault();
  // console.log(this);
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.4957, lng: -122.335167},
    zoom: 13,
    mapTypeId: 'roadmap',
  
  });
  var request = {
    location: {lat: 47.4957, lng: -122.335167},//the name I get from the input
    radius: '500',
    query: 'hike'
  };

  service = new google.maps.places.PlacesService(map);
  // console.log("####", service);
  service.textSearch(request, callback);
  // console.log(service);
}

// console.log(test);

///write new function that rerenders map with new data from form

  //1. Use geocoder API to take city & give you lat/long 
  //2. Generate new map with map API with vals from step 1
  //3. Do places search with new location + distance val
