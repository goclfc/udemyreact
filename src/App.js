import React from 'react';
import Header from './components/header/Header'
const App = () => {
  return (
    <div className="App">
      <Header />
      <div style={{height:"800px",background:'red'}}></div>
      <div style={{height:"800px",background:'blue'}}></div>
      <div style={{height:"800px",background:'yellow'}}></div>
    </div>
  );
}

export default App;
