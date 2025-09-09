import Box from '@mui/material/Box';
import { useRef } from 'react';

import SocialMedia from './components/SocialMedia'
import Header from './components/welcome_section/Header'
import Welcome from './components/welcome_section/Welcome'
import Services from './components/services/Services'
import About from './components/about/about';
import Footer from '../src/components/Footer' 
import Map from './components/Map';


function App() {

  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const contactRef = useRef(null)
  
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <Box position={'relative'} >
      <SocialMedia/>
      <Header handleScroll={handleScroll} aboutRef={aboutRef} servicesRef={servicesRef} contactRef={contactRef} />
      <Welcome/>
      <Services servicesRef={servicesRef}/>
      <About aboutRef={aboutRef} />
      <Map/>


  

      <Footer/>
    </Box>
      
        

     
    </> 
  )
}

export default App
