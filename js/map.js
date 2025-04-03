document.addEventListener("DOMContentLoaded", function() {

    // Initialize OpenStreetMap for location
    function initMap() {
        // Location coordinates for the inn (placeholder - change to actual coordinates)
        const latitude = -22.9035;  // Example coordinates for a mountain area in Brazil
        const longitude = -43.2096;
        
        // Create map centered at the inn's location
        const map = L.map('location-map').setView([latitude, longitude], 14);
        
        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        // Add marker for the inn
        const marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup("<b>Pousada Encanto da Serra</b><br>Estrada da Montanha, Km 5<br>Serra Verde - SP").openPopup();
    }
    
    // If map element exists, initialize the map
    if (document.getElementById('location-map')) {
        initMap();
    }
});

