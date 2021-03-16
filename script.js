// Unsplash API
const count = 10;
const apiKey = secrets.ACCESS_KEY;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API

const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    // Catch error here
    console.log;
  }
};

// On load
// getPhotos();
