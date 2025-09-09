import Box from '@mui/material/Box';
import { useRef } from 'react';

import SocialMedia from './components/SocialMedia'
import Header from './components/welcome_section/Header'
import Welcome from './components/welcome_section/Welcome'
import Services from './components/services/Services'
import About from './components/about/about';
import Footer from '../src/components/Footer' 
import Map from './components/Map';
import Gallery from './components/gallery/Gallery';

function App() {

  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const galleryRef = useRef(null)
  const homeRef = useRef(null)
  
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <Box position={'relative'} >
      <SocialMedia/>
      <Header handleScroll={handleScroll} aboutRef={aboutRef} servicesRef={servicesRef} galleryRef={galleryRef} homeRef ={homeRef }  />
      <Welcome homeRef={homeRef}/>
      <Services servicesRef={servicesRef}/>
      <About aboutRef={aboutRef} />
      <Map/>
      <Gallery galleryRef={galleryRef} />
      


  

      <Footer/>
    </Box>
      
        

     
    </> 
  )
}

export default App
