import './App.css';
import { ImageList } from '@mui/material';

function App({ photosArray }) {
  return (
    <div className="App">
      <h1>Welcome to knitspiration!</h1>
      <ImageList />
    </div>
  );
}

export default App;
