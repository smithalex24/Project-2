# Project-2

# Wanderer

### [**Click to see the App! **](https://wanderer-app-2.herokuapp.com/)<br>

![image](https://user-images.githubusercontent.com/36453286/39413282-f2e5c2d4-4bdc-11e8-8b6e-02160e3e54a5.png)

*Wanderer* is an app made for hiking enthusiasts. It allows you to create an account and search for all of the hikes within your desired location.

If you find a hike that you want to save for the future, you can add it to your wishlist and remove them from it as well. The results that are shown are the hike name, the rating, and address. Wander to any part of the world, and you can find a hike that suits you!


## Development 

### Project Requirements

*HTML / EJS: Your HTML should be semantic and valid. Your app uses EJS to render information on the page.

*Node and Express: Your app will need to have its own server, built using Express.

*MVC Pattern: Your app uses Models, Views, Controllers pattern we have gone over in class.

*Mongo + Mongoose: Your app will need to persist data. Your app should have at least two database tables. The second DB table can be post-MVP.

*CSS & Design: Your app should be pleasing to look at. Your design should take usability into account.

*JavaScript or jQuery: Your app should have some interactivity on the front end -- DOM manipulation, microinteractions, etc.

*At least 2 Resources: Relationship optional, but recommended. Most projects require one One-to-Many relationship to function properly :)

*One of these:

1.BCrypt & Auth
2.Using a third party API like Twilio, or OMBD, Google Maps, etc.


### Technologies Used

1. HTML5
2. CSS/Bootstrap
3. Jquery 
4. Javascript 
5. EJS 
6. Node
7. Express 
8. Mongo + Mongoose
9. Google Maps, Google Places and Google Geocode API - where the hiking data came from
10. AJAX
11. Auth/Bycrpt

## Routes
| CRUD          | Route             | Functionality                      |
|:--------------|:------------------|:-----------------------------------|
| GET           | /home             | Renders app homepage               |
| POST          | /wishlist         | Post favored hike to Wishlist      |             |
| DELETE        | /wishlist/:id     | Deletes hike from wishlist         |
| GET           | /auth/login       | Renders login page                 |
| POST          | /auth/login       | Authenticate login credentials     |
| GET           | /auth/signup      | Renders signup page                |
| POST          | /auth/signup      | User creation route                |
| GET           | /auth/logout      | User logout route                  |
| GET           | /profile          | Renders profile page               |
| GET           | /wishlist         | Renders wishlist page              |

## Models
User Schema

| Key           | Type         |
|:--------------|:-------------|
| name          | String       | 
| email         | String       | 
| password      | String       | 
| wishlist      | wishListSchema |

Wishlist Schema 

| Key           | Type         |
|:--------------|:-------------|
| name          | String       | 
| location      | String       | 
| rating        | String       | 
| userID  {
| type          | Schema.Types.ObjectId |
| ref           | "User"       |
| required      | true         |

### Approach Taken

1. App Type/Theme
    * Hiking app that allows a user to find a hike near them at any given location in the world
    * Nature/Outdoor theme with a wishlist included 
2. Format/Organization
    * Created a sign up and login (Auth) and the appropriate folders
    * Set up my MVC folders and built the boiler plates 
    * Styled a few of my pages to get a visual of how I wanted my project to look
    * Connected with the Google Maps, Places, and Geocoding API and completed functionality
    * Finished CRUD by including an "Add to favorites" and a "Delete from favorites" 
    * Completed the styling and UI portion of the project
    
### Code Snippet I'm Proud Of 

Below is a snippet of the google maps functionality. I'm the most proud of this particular code because it was the most difficult to render.

It took about 4 days to fully get this working on my page! What I've shown below is the process of grabbing the user's inputted location, converting the lat/lon to an address, and spitting out the hikes within 50 miles of that given location. 

```var getLocation =  function(address) {
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

```
## Challenges 

1. API Functionality - this took me 3-4 days to fully complete functionality and get my API working in my code. 
2. Understanding how to make my google API interact in the way I wanted it to - narrowing down the search to ONLY hikes was hard.
3. CSS Styling for my Profile page - it was hard to make things centered the way I wantedm 

## Future Revisions

1. I really wanted to integrate making the actual map responsive to the user's location. I wasn't able to connect the two in this amount of time, but I'd like to finish that portion to polish off the project.

2. I want to incorporate an option for Ride Sharing, similar to the Meetup app, but for car pooling to hikes. I'd like to allow users to have the option to connect to other people that are going to the same hike or interested in similar areas.

3. Google Maps didn't have a "description" property for the hikes, so if I could find a better API that gives specific information about the hike, I'd like to use that instead.


