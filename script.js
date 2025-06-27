// Initialize the map with a default center and zoom level
var map = L.map('map').setView([51.505, -0.09], 13); // Lat, Lng, zoom level

// Add a tile layer (OpenStreetMap in this case)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker (for now, as a placeholder)
L.marker([51.5, -0.09]).addTo(map)
  .bindPopup('A test marker')
  .openPopup();

