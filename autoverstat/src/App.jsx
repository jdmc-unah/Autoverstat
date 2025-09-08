import Container from '@mui/material/Container'
import Header from './components/welcome_section/Header'
import Welcome from './components/welcome_section/Welcome'
import Services from './components/services/Services'

function App() {

  return (
    <>
      {/* <Container sx={{marginTop: 1}} > */}
      
        <Header/>
        <Welcome/>
        <Services/>
        
      {/* </Container> */}

     
    </> 
  )
}

export default App
