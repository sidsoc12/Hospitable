var markers = [];
var circles = [];
var boxPop = [];

var stateConv = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
};

var map;

function initMap(){
  var styledMapType = new google.maps.StyledMapType(
    [
      {elementType: 'geometry', stylers: [{color: '#fcfad9'}]}, //reservations
      {elementType: 'labels.text.fill', stylers: [{color: '#000000'}]}, //text color
      {elementType: 'labels.text.stroke', stylers: [{color: '#ffffff'}]}, //text outline
      {
        featureType: 'administrative', //borders
        elementType: 'geometry.stroke',
        stylers: [{color: '#616161'}]
      },
      {
        featureType: 'administrative.land_parcel', //more borders
        elementType: 'geometry.stroke',
        stylers: [{color: '#616161'}]
      },
      {
        featureType: 'administrative.land_parcel', // text
        elementType: 'labels.text.fill',
        stylers: [{color: '#000000'}]
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [{color: '#fffde6'}]
      },
      {
        featureType: 'poi',
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: 'poi.medical',
        stylers: [{ visibility: "on" }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ visibility: "off"}]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{color: '#e6e5d8'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#e8e7d5', visibility: "off"}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#e8e7d5'}]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [{color: '#e6e5d1'}]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.stroke',
        stylers: [{color: '#e6e5d1'}]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{color: '#000000'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{color: '#fffce0'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.fill',
        stylers: [{color: '#000000'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#ffffff'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{color: '#dbdbdb'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{color: '#d4f8ff'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#000000'}]
      }
    ],
    {name: 'Styled Map'});

  var markerCreated = false;
  let zoomVal = 3.5;


  document.getElementById("home").onclick = function() {
    map.setZoom(16);
    getUserCoordinates();
  };

  function getUserCoordinates(){
    if ('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition(position => {
        var coords = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        map.setCenter(coords);
        if (!markerCreated){
          var marker = new google.maps.Marker({
            position: coords,
            map: map,
            icon: {
              //url: 'home_icon.png',
              scaledSize: new google.maps.Size(17*2, 20.32*2), // scaled size
              origin: new google.maps.Point(0,0), // origin
              anchor: new google.maps.Point(0,0) // anchor
            }
          });
          markerCreated = true;
        }
      });
    zoomConst = 16;
  } else {
    console.log("hello");
  }
  }


  //Map Options
  var options = {
    center: getUserCoordinates(),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    style: styledMapType
  }
  //Creating the map
  map = new google.maps.Map(document.getElementById('map'), options);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

  //create coronavirus getData
  getCoViDData();
  async function getCoViDData(){
    var today = new Date();
    var yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    var dd = yesterday.getDate(); //yesterday
    var mm = yesterday.getMonth()+1;
    var yyyy = yesterday.getFullYear();

    if(mm < 10){
      var dateStr = "0" + mm + "-" + dd + "-" + yyyy;
    } else {
      var dateStr = mm + "-" + dd + "-" + yyyy;
    }
    var fileName = "/COVID-19/csse_covid_19_data/csse_covid_19_daily_reports/" + dateStr + ".csv";

    const response = await fetch(fileName);
    const data = await response.text();
    const rows = data.split('\n');

    console.log(rows);

    rows.forEach(elt => {
      const row = elt.split(',');
      cases = parseInt(row[7]);
      deaths = parseInt(row[8]);
      lati = parseFloat(row[5]);
      long = parseFloat(row[6]);
      population = 100000;
      var rad = (Math.log2(cases)+1)*7.3;
      var icon = {
        url: "trackingCircle.png", // url
        scaledSize: new google.maps.Size(rad, rad), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(rad/2,rad/2) // anchor
      };

      var cityCircle = new google.maps.Marker({
        icon: icon,
        opacity: Math.log(population)/100,
        map: map,
        position: {lat: lati, lng: long},
      });
      //coordiantes of the "box"
      boxPop.push([lati+(rad/600), long-(rad/600), lati-(rad/600), long+(rad/600), lati, long, rad, Math.log(population)/50, row[2]])
      circles.push(cityCircle);
    });
  }


  //Add Marker Function

  getData();
  async function getData(){
    const response = await fetch('draft1.csv');
    const data = await response.text();

    const rows = data.split('\n').slice(1);
    let longitude = 0;
    let latitude = 0;
    rows.forEach(elt => {
      const row = elt.split(',');
      temp = boxPop.filter(function(list){
        return stateConv[row[2]] == list[8];
      });
      staffed = parseInt(row[3]);
      console.log(row)
      predicted_avail = parseInt(parseFloat(staffed*0.5)-parseInt(row[14]));
      percent = parseFloat(predicted_avail/staffed);
      if (predicted_avail < 0){
        predicted_avail = 0;
      }
      address = row[0]+", "+row[1]+", "+row[2];
      phone = "(000) 000-0000";
      latitude = parseFloat(row[4]);
      longitude = parseFloat(row[5]);

      temp.forEach(list => {
        if(latitude<list[0] && longitude>list[1] && latitude>list[2] && longitude<list[3]){
          dist = Math.sqrt(Math.pow(latitude-list[4], 2)+Math.pow(longitude-list[5], 2));
          opacNum = list[7];
          percent = .05*(dist*4)/((opacNum*2));
        }
      });
      addMarker({lat:latitude,lng:longitude}, row[0], address, staffed, predicted_avail, phone, percent);
    });
  }

  function addMarker(coords, name, address, staffed, available, phone, percent){
    available = parseInt((staffed*.34)-(staffed*percent));
    if (percent < .15 && Math.log2(staffed) > 5){
      var icon = {
        url: "marker_red.png", // url
        scaledSize: new google.maps.Size(6, 6), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(3, 3) // anchor
      };
    } else if (percent < .43){
      var icon = {
        url: "marker_yellow.png", // url
        scaledSize: new google.maps.Size(6, 6), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(3, 3) // anchor
      };
    } else {
      var icon = {
        url: "marker_green.png", // url
        scaledSize: new google.maps.Size(6, 6), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(3, 3) // anchor
      };
    }

    var marker = new google.maps.Marker({
      position: coords,
      map: map,
      icon: icon,
      //opacity: 0.5,
    });
    markers.push(marker);

    var infoWindow = new google.maps.InfoWindow({
      disableAutoPan: true,
      content: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+name+'</h1>'+
            '<div id="bodyContent">'+
            '<p>\t<i class="fas fa-map-marked-alt"></i>&emsp;<b>Address </b>'+address+'</p>'+
            '<p><i class="fas fa-bed"></i>&emsp;<b>Staffed Beds </b>'+staffed+'</p>'+
            '<p><i class=></i>&emsp;&emsp;&nbsp;<b>Available Beds </b>'+available+'</p>'+
            '<p><i class="fas fa-phone-alt"></i>&emsp;<b>Phone Number </b>'+phone+'</p>'+
            '</div>'+
            '</div>'
    });

    var infoPanel = document.createElement('div');

    google.maps.event.addListener(marker, 'click', function(){
      if(marker.open){
        infoWindow.close();
        marker.open = false;
      } else {
        infoWindow.open(map, marker);
        marker.open = true;
      }
    });
  }

  //search
  var input = document.getElementById('pac-input');
  var autocomplete = new google.maps.places.Autocomplete(input);

  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo('bounds', map);

  // Set the data fields to return when the user selects a place.
  autocomplete.setFields(
      ['address_components', 'geometry', 'icon', 'name']);

  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);
  var marker2 = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });


  autocomplete.addListener('place_changed', function() {
    marker2.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    marker2.setPosition(place.geometry.location);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }
  });
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Sets the map on all markers in the array.
function setCircsOnAll(map) {
  for (var i = 0; i < circles.length; i++) {
    circles[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearCircles() {
  setCircsOnAll(null);
}

// Shows any markers currently in the array.
function showCircles() {
  setCircsOnAll(map);
}