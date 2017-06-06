//$('h1').html('Hello from js!');
//initialalize the configuration of map

  // use JS's built-in Navigator to get user's lat/lng coordinates
 // navigator.geolocation.getCurrentPosition(function(position) {
    // create an object to store lat/lng data
//    var userLocation = {
//      lat: position.coords.latitude,
//      lng: position.coords.longitude
 //   };
   // function initMap() {
     //   var here = {lat: 40.8054491, lng: -73.965441};
       // var map = new google.maps.Map(document.getElementById('map'), {
         // zoom: 4,
         // center: here
        //});
        //var marker = new google.maps.Marker({
         // position: here,
          //map: map
        //});
//initMap();

      function initMap() {
        var uluru = {lat: 40.8054491, lng: -73.9654415};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    // create a new instance of a map
    // configure map with options object
    //lat: 40.8054491, lng: -73.9654415
  //  var ourLocation = {

  //  	lat: 40.8054491;
//    	lng: -73.9654415
  //  };
    //var map = new google.maps.Map(document.getElementById('map'), {
      //center: userLocation,
      //zoom: 10,
      //scrollwheel: false
    //});

    // use Marker constructor to add a marker to map
   // var marker = new google.maps.Marker({
     // position: ourLocation,
      //map: map,
      //title: 'Our Location'
    //});

 // });
//}

