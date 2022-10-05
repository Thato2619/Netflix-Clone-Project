import React from 'react'
import './App.css';
import Row from './Row'

/*add two row components and customise them by adding titles of each genre */
function App() {
  return (
    <div className="App">
      <h1>Let successfully complete this netflix clone in Jesus name</h1>
      <Row title="NETFLIX ORIGINALS" />
      <Row title="Trending Now" /> 
    </div>
  );
}

export default App;
