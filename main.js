function myMap() {

  const centro = { lat: -42.7038279, lng: -73.6593655 };  
  const ubicacion = { lat: -42.8171989, lng: -73.7094218 };  
  
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
