
var map = L.map('mapa').setView([40.37642, -3.6054], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);


var destinoLatLng = [40.37642, -3.6054]; 


L.marker(destinoLatLng).addTo(map)
    .bindPopup('ECOLOGY')
    .openPopup();


function mostrarUbicacionYRuta(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;


    var ubicacionVisitante = [lat, lon];
    L.marker(ubicacionVisitante).addTo(map)
        .bindPopup('Tu ubicación actual')
        .openPopup();


    map.fitBounds([ubicacionVisitante, destinoLatLng]);

    obtenerRuta(ubicacionVisitante, destinoLatLng);
}


function errorUbicacion(error) {
    console.error("Error al obtener la ubicación:", error.message);
}


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacionYRuta, errorUbicacion);
} else {
    alert("La geolocalización no está disponible en este navegador.");
}


function obtenerRuta(origen, destino) {
    var apiKey = '5b3ce3597851110001cf624878ce56403ce745e39d85ca66e73522f2'; 

    var url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${origen[1]},${origen[0]}&end=${destino[1]},${destino[0]}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var coordinates = data.routes[0].geometry.coordinates;
            var route = coordinates.map(coord => [coord[1], coord[0]]);  

            L.polyline(route, {color: 'blue'}).addTo(map);
        })
        .catch(error => console.error('Error al obtener la ruta:', error));
}
