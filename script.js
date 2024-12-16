// script.js

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('msg').value;

    // Validate form data
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Here you can add code to send the data to a server or process it
    console.log('Form submitted:', { name, email, phone, message });

    // Optionally, reset the form
    document.querySelector('form').reset();
}

// Add event listener to the form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});

// Example function to initialize a map (if using Google Maps)
function initMap() {
    const mapOptions = {
        center: { lat: -13.163140, lng: -72.544963 }, // Coordinates for Machu Picchu
        zoom: 10,
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// Load the map when the window loads
window.onload = initMap;


