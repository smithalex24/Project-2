console.log('JS is working!');


 
// Function to render search results and append specified result properties to results list
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      // createMarker(results[i]);///still neeed to figure out putting the marker down

      $("#hikeList").append("<h4 class='hike-name'>"+ "Hike Name: " +results[i].name+"</h4>");
      $("#hikeList").append("<h5 class='hike-name'>"+ "Rating: " +results[i].rating+"</h5>");
      $("#hikeList").append("<h5 class='hike-name'>"+ "Address: " +results[i].formatted_address+"</h5>");


      $("#hikeList").append("<form method='POST' action='/wishlist' id='form" + i + "'" + "></form>");//inputs and submit button must be inside form element
      $('#form'+i).append("<input type='hidden' name='name' value='"+ results[i].name +"'>");
      $('#form'+i).append("<input type='hidden' name='rating' value='"+ results[i].rating +"'>");
      $('#form'+i).append('<input type="hidden" name="location" value="'+ results[i].formatted_address +'">');
      $('#form'+i).append("<input type='submit' value='Add to Wishlist' class='sub-button'>")
                    
      $("#hikeList").append("<hr>"); 


    }
  }
}


$('#refreshList').click(function() {
  $('#hikeList').empty();
  $('#hike-input').val('');
});

// Converting lat/long to an address 
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



$(".search-hike").on("submit", function(e){//this function gets called when I press the button
  e.preventDefault();                     
  var loc = $("#hike-input").val();
  


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
    zoom: 5,
    mapTypeId: 'roadmap',
  
  });
})

function searchHikes(){
// e.preventDefault();
  // console.log(this);
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.4957, lng: -122.335167},
    zoom: 5,
    mapTypeId: 'roadmap',
  
  });
  var request = {
    location: {},//the name I get from the input
    radius: '50',
    query: 'hike'
  };

  service = new google.maps.places.PlacesService(map);
  // console.log("####", service);
  service.textSearch(request, callback);
  // console.log(service);
}



