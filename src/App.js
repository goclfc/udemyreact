import React from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Featured from './components/slider/Featured'
import Venue from './components/venue/Venue'
import Highlights from './components/highligts';
import Pricing from './components/pricing';
import Location from './components/location';
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
      <>
        <Venue />
      </>
      <>
        <Highlights />
      </>
      <>
        <Pricing />
      </>
      <>
        <Location />
      </>
      <Footer />
    </div>
  );
}

export default App;
