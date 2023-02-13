import React, {useEffect} from 'react'; 
import AOS from 'aos'

import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/UI/Hero/Hero';
import Exercises from './Components/UI/Exercises/Exercises';
import Start from './Components/UI/Start/Start';
import Pricing from './Components/UI/Pricing/Pricing';
import Testimonials from './Components/UI/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
      <Header/>
      <Hero/>
      <Exercises/>
      <Start/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
