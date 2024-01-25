import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let photosArray = [];

// API documentation for HTTP Authorization header method (see "headers," below):
// https://unsplash.com/documentation#authorization

let count = 5;
const apiUrl = 'https://api.unsplash.com/photos/random/';
const headers = {
  Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
};

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl + `?count=${count}`, { headers });
    photosArray = await response.json();
  } catch (error) {
    // Error handling here
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App photosArray={photosArray} />
  </React.StrictMode>
);

getPhotos();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
