import React from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Featured from './components/slider/Featured'
import '../src/resources/style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  return (
    <div className="App">
      <Header />
      <>    
      <Featured />
      </>
      <div style={{height:"800px",background:'red'}}></div>
      <div style={{height:"800px",background:'blue'}}></div>
      <div style={{height:"800px",background:'yellow'}}></div>
      <Footer />
    </div>
  );
}

export default App;
