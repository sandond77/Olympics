  //All divs and parent containers must be set to 100% width and 100% height for the map to be rendered using % numbers. If using px, it is not required


  function initMap() {
    var centerPoint = {lat: 0, lng:  0};

    // Create a map object and specify the DOM element for display.
    var mapOptions = { //we can change the variable and ID to change the map selection
      center: centerPoint,
      zoom: 2
    };

    // var gold = new google.maps.Map(document.getElementById("goldMap"), mapOptions);
    var silver = new google.maps.Map(document.getElementById("silverMap"), mapOptions);
    // var bronze = new google.maps.Map(document.getElementById("bronzeMap"), mapOptions);
    // marker(gold);
    marker(silver);
    // marker(bronze);
  }


  //this current adds a marker at the clicker location, we dont need this. I was just testing it
  // google.maps.event.addListener(gold, 'click', function(event) {
  //  addMarker(event.latLng,  gold);
  // });

  //This function takes in coordinates, a map, and label text and puts a marker on the map 
  function addMarker(location, mapname, medals) {
    var marker = new google.maps.Marker({
	      position: location,
	      label: medals.toString(), 
	      map: mapname
    });
    marker.addListener('click', function(event) { 
        $('#modal1').modal('open');
    })
  }


    //we should put this data into mysql and add markers using an ORM or handlebars??
    //https://developers.google.com/public-data/docs/canonical/countries_csv this contains coordinates for various countries
  function marker(mapname){
    addMarker({lat: 60.472024,  lng: 8.468946}, mapname, "NO") //adds a marker on norway
    addMarker({lat: 51.165691,  lng: 10.451526}, mapname, "DE") //adds a marker on germany
    addMarker({lat: 56.130366,  lng: -106.346771}, mapname, "CA") //adds a marker on canada
    addMarker({lat: 37.09024,   lng: -95.712891}, mapname, "USA") //adds a marker on united states
    addMarker({lat: 52.132633,  lng: 5.291266}, mapname, "NL") //adds a marker on netherlands
    addMarker({lat: 60.128161,  lng: 18.643501}, mapname, "SE") //adds a marker on sweden
    addMarker({lat: 35.907757,  lng: 127.766922}, mapname, "KR") //adds a marker on south korea
    addMarker({lat: 46.818188,  lng: 8.227512}, mapname, "CH") //adds a marker on switzerland
    addMarker({lat: 46.227638,  lng: 2.213749}, mapname, "FR") //adds a marker on france
    addMarker({lat: 47.516231,  lng: 14.550072}, mapname, "AT") //adds a marker on austria
    addMarker({lat: 36.204824,  lng: 138.252924}, mapname, "JP") //adds a marker on japan
    addMarker({lat: 41.87194,   lng: 12.56738}, mapname, "IT") //adds a marker on italy
    addMarker({lat: 61.52401,   lng: 105.318756}, mapname, "RU") //adds a marker on russia
    addMarker({lat: 49.817492,  lng:  15.472962}, mapname, "CZ") //adds a marker on czech republic
    addMarker({lat: 53.709807,  lng: 27.953389}, mapname, "BY") //adds a marker on belarus
    addMarker({lat: 35.86166,   lng: 104.195397}, mapname, "CN") //adds a marker on china
    addMarker({lat: 48.669026,  lng: 104.195397}, mapname, "SK") //adds a marker on slovakia
    addMarker({lat: 61.92411,   lng: 25.748151}, mapname, "FI") //adds a marker on finland
    addMarker({lat: 55.378051,  lng: -3.435973}, mapname, "GB") //adds a marker on united kingdom
    addMarker({lat: 51.919438,  lng: 19.145136}, mapname, "PL") //adds a marker on poland
    addMarker({lat: 47.162494,  lng: 19.503304}, mapname, "HU") //adds a marker on hungary
    addMarker({lat: 48.379433,  lng: 31.16558}, mapname, "UA") //adds a marker on ukraine
    addMarker({lat: -25.274398, lng: 133.775136}, mapname, "AU") //adds a marker on australia
    addMarker({lat: 46.1512413, lng: 14.995463}, mapname, "SI") //adds a marker on slovenia
    addMarker({lat: 50.5038873, lng: 4.469936}, mapname, "BE") //adds a marker on belgium
    addMarker({lat: 40.463667,  lng: -3.74922}, mapname, "ES") //adds a marker on spain
    addMarker({lat: -40.900557, lng: 174.885971}, mapname, "NZ") //adds a marker on new zealand
    addMarker({lat: 48.019573,  lng: 66.923684}, mapname, "KZ") //adds a marker on kazakhstan
    addMarker({lat: 47.166,     lng: 9.555373}, mapname, "LI") //adds a marker on liechtenstein
  }