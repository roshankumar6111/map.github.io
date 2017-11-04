  function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: 23.5497, lng: 87.2909}
        });
        var geocoder = new google.maps.Geocoder();
         geocodeAddress(geocoder,map);
         document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
      }

      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
          if(address==''){
              address='NIT Durgapur, Mahatma Gandhi Road, A-Zone, Durgapur, West Bengal, India';
          }
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
             var image = 'marker.png';
              var marker = new google.maps.Marker({
              map: resultsMap,
              icon: image,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }