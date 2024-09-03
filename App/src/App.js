import React from 'react';
import Navbar from './components/navbar/navbar';
import Gallery from './components/content/imageGallery';
import Foot from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Gallery />
      <Foot />
    </div>
  );
}

export default App;

