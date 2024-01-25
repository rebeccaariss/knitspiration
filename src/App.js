import { useState, useEffect } from 'react';
import './App.css';
import { ImageList, ImageListItem } from '@mui/material';

// API documentation for HTTP Authorization header method (see "headers," below):
// https://unsplash.com/documentation#authorization

let count = 5;
const apiUrl = 'https://api.unsplash.com/photos/random/';
const headers = {
  Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
};

function App() {
  const [photosArray, setPhotosArray] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await fetch(apiUrl + `?count=${count}`, { headers });
        const data = await response.json();
        setPhotosArray(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    }
    fetchPhotos();
  }, []); // square brackets necessary to prevent errors

  return (
    <div className="App">
      <h1>Welcome to knitspiration!</h1>
      <ImageList variant="masonry" cols={3} gap={8}>
        {photosArray.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.urls.regular}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.urls.regular}?w=248&fit=crop&auto=format`}
              alt={item.alt_description || ''}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default App;
