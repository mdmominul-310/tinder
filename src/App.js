import React from 'react';

import './App.css';
import Navigation from './Navigation/Navigation';
import { Lines, Ripple, CustomPreloader } from 'react-preloaders2';
import logo from './img/logo.png'

import 'animate.css';
import SliderCard from './sliderCard/SliderCard';
import Footer from './Footer/Footer';
import { Animator, ScrollPage, Fade, batch, Move, Sticky, ScrollContainer, MoveOut } from 'react-scroll-motion';






function App() {
  const FadeUp = batch(Fade(), Sticky(), MoveOut(0, -230));

  return (
    <React.Fragment>
      <div className="App">
        <div className='image-container'>
          <Navigation />
          <div className='d-flex justify-content-center align-items-center w-100'>
            <ScrollContainer>
              <ScrollPage>
                <Animator animation={FadeUp}>
                  <div>
                    <h1 className='text-light' >Start something epic.  </h1>
                    <div className='d-flex  justify-content-center'>
                      <button className='btn-primary '>
                        Create account
                      </button>
                    </div>
                  </div>
                </Animator>
              </ScrollPage>
            </ScrollContainer>
          </div>
        </div>
        <SliderCard />
        <Footer />
      </div>
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
