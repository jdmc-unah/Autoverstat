import Box from '@mui/material/Box';
import { useRef } from 'react';

import Whatsapp from './components/Whatsapp'
import Header from './components/welcome_section/Header'
import Welcome from './components/welcome_section/Welcome'
import Services from './components/services/Services'
import About from './components/about/about';


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
      <Whatsapp/>
      <Header handleScroll={handleScroll} aboutRef={aboutRef} servicesRef={servicesRef} contactRef={contactRef} />
      <Welcome/>
      <Services servicesRef={servicesRef}/>
      <About aboutRef={aboutRef} />
    </Box>
      
        

     
    </> 
  )
}

export default App
