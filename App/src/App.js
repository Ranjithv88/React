import React from 'react';
import Navbar from './components/navbar/navbar';
import ContentOfWeb from './components/content/contentPage';
import Foot from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContentOfWeb />
      <Foot />
    </div>
  );
}

export default App;

