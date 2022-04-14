

var markers = [];
var circles = [];
var boxPop = [];

var markers_on = true;
var circles_on = true;

var zoomConst = 16;

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

function CSVToArray( strData, strDelimiter ){
        strDelimiter = (strDelimiter || ",");


        var objPattern = new RegExp(
            (
                "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

                "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

                "([^\"\\" + strDelimiter + "\\r\\n]*))"
            ),
            "gi"
            );


        // Create an array to hold our data. Give the array
        // a default empty first row.
        var arrData = [[]];

        // Create an array to hold our individual pattern
        // matching groups.
        var arrMatches = null;


        // Keep looping over the regular expression matches
        // until we can no longer find a match.
        while (arrMatches = objPattern.exec( strData )){

            // Get the delimiter that was found.
            var strMatchedDelimiter = arrMatches[ 1 ];

            // Check to see if the given delimiter has a length
            // (is not the start of string) and if it matches
            // field delimiter. If id does not, then we know
            // that this delimiter is a row delimiter.
            if (
                strMatchedDelimiter.length &&
                strMatchedDelimiter !== strDelimiter
                ){

                // Since we have reached a new row of data,
                // add an empty row to our data array.
                arrData.push( [] );

            }

            var strMatchedValue;

            // Now that we have our delimiter out of the way,
            // let's check to see which kind of value we
            // captured (quoted or unquoted).
            if (arrMatches[ 2 ]){

                // We found a quoted value. When we capture
                // this value, unescape any double quotes.
                strMatchedValue = arrMatches[ 2 ].replace(
                    new RegExp( "\"\"", "g" ),
                    "\""
                    );

            } else {

                // We found a non-quoted value.
                strMatchedValue = arrMatches[ 3 ];

            }


            // Now that we have our value string, let's add
            // it to the data array.
            arrData[ arrData.length - 1 ].push( strMatchedValue );
        }

        // Return the parsed data.
        return( arrData );
    }

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
  zoomConst = 3.5;


  document.getElementById("home").onclick = function() {
    zoomConst = 16;
    map.setZoom(zoomConst);
    getUserCoordinates();
  };

  document.getElementById("zoom-in").onclick = function() {
    zoomConst += 1;
    map.setZoom(zoomConst);
  };
  document.getElementById("zoom-out").onclick = function() {
    zoomConst -= 1;
    map.setZoom(zoomConst);
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
    }
    
    
    function errorHandler(err) {
      if(err.code == 1) {
         alert("Error: Access is denied!");
      } else if( err.code == 2) {
         alert("Error: Position is unavailable!");
      }
   }
  }


  //Map Options
  var options = {
    center: getUserCoordinates(),
    zoom: zoomConst,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    style: styledMapType
  }
  //Creating the map
  // Bug Fix
  map = new google.maps.Map(document.getElementById('map'), options);
  // map = new google.maps.Map(document.getElementById('map'));

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
    // var fileName = "/COVID-19/csse_covid_19_data/csse_covid_19_daily_reports/" + dateStr + ".csv";
   //var fileName = "/COVID-19/csse_covid_19_data/csse_covid_19_daily_reports/07-1-2020.csv";
   var fileName = "/10-16-202.csv";
    
    // Beginning of New Code 

    /* 

    var MyFile = new File(fileName, );
    var reader = new FileReader();
    
    reader.onload = function () {
      var text = reader.result();
      console.log(e.target.result);
    }
   
    reader.readAsText(MyFile);

  
    console.log(reader);

    const data2 = reader;

    console.log(data2);

    */

    // End of New Code ..

    
  
   const response = await fetch(fileName);
   const data = await response.text();
   const rows = data.split('\n');

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
    const response = await fetch("/Hospitals.csv");
    // const response = await fetch("/Hospitals.csv");
    const data = await response.text();

    /* New Code 
    var reader = new FileReader();
    
    reader.readAsText('Hospitals.csv');

    console.log(reader);

    const data = reader;

    console.log(data);
   
    New Code */


    let longitude = 0;
    let latitude = 0;

    const rows = CSVToArray(data, ",");
    rows.forEach(elt => {
      const row = elt;
      temp = boxPop.filter(function(list){
        return stateConv[row[7]] == list[8];
      });
      staffed = parseInt(row[31]);
      predicted_avail = parseInt(parseFloat(staffed*0.5)-parseInt(temp[14]));
      percent = parseFloat(predicted_avail/staffed);
      if (staffed == -999){
        staffed = 0;
        predicted_avail = 0;
        percent = 10;
      }
      address = row[5].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})+", "+row[6].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})+", "+row[7];
      phone = row[10];
      latitude = parseFloat(row[1]);
      longitude = parseFloat(row[0]);

      temp.forEach(list => {
        if(latitude<list[0] && longitude>list[1] && latitude>list[2] && longitude<list[3]){
          dist = Math.sqrt(Math.pow(latitude-list[4], 2)+Math.pow(longitude-list[5], 2));
          opacNum = list[7];
          percent = .05*(dist*4)/((opacNum*2));
        }
      });
      addMarker({lat:latitude,lng:longitude}, row[4].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}), address, staffed, predicted_avail, phone, percent, row[20].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}), row[25]);
    });
  }

  function addMarker(coords, name, address, staffed, available, phone, percent, hospital, website){
    //available = parseInt((staffed*.34)-(staffed*percent));
    if( available < 0)
    {
      var icon = {
        url: "marker_red.png", // url
        scaledSize: new google.maps.Size(6, 6), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(3, 3) // anchor
      };
    }
    else if (available > 15){
      var icon = {
        url: "marker_green.png", // url
        scaledSize: new google.maps.Size(6, 6), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(3, 3) // anchor
      };

    } else if (available < 15 && available > 10){
      var icon = {
        url: "marker_yellow.png", // url
        scaledSize: new google.maps.Size(6, 6), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(3, 3) // anchor
      };
    } else if (available < 10){
      var icon = {
        url: "marker_red.png", // url
        scaledSize: new google.maps.Size(6, 6), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(3, 3) // anchor
      };
    } else {
      var icon = {
        url: "marker_black.png", // url
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

    google.maps.event.addListener(marker, 'click', function(){
      
      console.log(website);
      document.getElementById("panel").innerHTML = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+name+'</h1>'+
            '<div id="bodyContent">'+
            '<p>\t<i class="fas fa-map-marked-alt"></i>&emsp;<b>Address </b><br> &emsp;&emsp;&emsp;&nbsp;&emsp;&nbsp;'+address+'</p>'+
            '<p><i class="fas fa-bed"></i>&emsp;<b>Staffed Beds </b>'+staffed+'</p>'+
            '<p><i class=></i>&emsp;&emsp;&nbsp;&emsp;<b>Predicted Available Beds </b>'+available+'</p>'+
            '<p><i class="fas fa-phone-alt"></i>&emsp;<b>Phone Number </b>'+phone+'</p>'+
            '<p><i class="fas fa-clinic-medical"></i>&emsp;<b>Hospital Type </b>'+hospital+'</p>'+
            '<p><i class="fas fa-wifi"></i>&emsp;<b>Website </b><a href="'+website+'" target="_blank"> Click here.</a></p>'+
            '</div>'+
            '</div>';
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
      zoomConst = 17;
      map.setCenter(place.geometry.location);
      map.setZoom(zoomConst);  // Why 17? Because it looks good.
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


function damarkers(){
  if (markers_on){
    clearMarkers();
    markers_on = false;
  } else {
    showMarkers();
    markers_on = true;
  }
}

function dacircles(){
  if (circles_on){
    clearCircles();
    circles_on = false;
  } else {
    showCircles();
    circles_on = true;
  }
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




