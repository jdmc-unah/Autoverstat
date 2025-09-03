import Container from '@mui/material/Container'
import Header from './components/welcome_section/Header'
import Welcome from './components/welcome_section/Welcome'

function App() {

  return (
    <>
      <Container sx={{marginTop: 2}} >
      
        <Header/>
        <Welcome/>
        
      </Container>

     
    </> 
  )
}

export default App
