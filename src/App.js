import React from 'react';

import './App.css';
import Navigation from './Navigation/Navigation';
import { Lines, Ripple, CustomPreloader } from 'react-preloaders2';
import logo from './img/logo.png'

import 'animate.css';
import SliderCard from './sliderCard/SliderCard';
import Footer from './Footer/Footer';






function App() {

  return (
    <React.Fragment>
      <div className="App">

        <div className='image-container'>
          <Navigation />
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div>
              <h1 className='text-light' >Start something epic.  </h1>
              <div className='d-flex  justify-content-center'>
                <button className='btn-primary '>
                  Create account
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <SliderCard />
      <Footer />
      <CustomPreloader background="linear-gradient( #fd267a, #ff6036)" animation="fade">
        <div>
          <img src={logo} className="logo-img animate__animated  animate__zoomIn animate__infinite	infinite" />
        </div>
      </CustomPreloader>
    </React.Fragment>
    // 
  );
}

export default App;
