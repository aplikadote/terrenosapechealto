function myMap() {

  var x = -42.82;
  var y = -73.67;
  const centro = { lat: -42.66, lng: -73.66 };  
  const ubicacion = { lat: x, lng: y };  
  
  var mapProp = {
    center: centro,
    zoom: 10,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);

  new google.maps.Marker({
    position: ubicacion,
    map,
    title: 'Terrenos Apeche Alto'
  });
}
