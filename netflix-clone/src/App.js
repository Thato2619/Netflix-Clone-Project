import React from'react'
import './App.css';
import Row from './Row'
import requests from './requests';

/*add two row components and customise them by adding titles of each genre */
function App() {
  return (
    <div className="App">
      <h1>Let successfully complete this netflix clone in Jesus name</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} /> 
    </div>
  );
}

export default App;
