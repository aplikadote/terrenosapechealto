function myMap() {
    const myLatLng = { lat: -42.81652847, lng: -73.67133086 };  
  
    var mapProp = {
      center: myLatLng,
      zoom: 12.21,
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: 'Terrenos Apeche Alto'
    });
  }
  