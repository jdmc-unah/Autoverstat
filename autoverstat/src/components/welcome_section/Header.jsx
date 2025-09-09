

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme} from '@emotion/react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


import logo from '../../assets/logo.png'

import MenuDrawer from './MenuDrawer'





const Header = ({aboutRef, servicesRef, galleryRef, homeRef ,handleScroll})=>{
    //evalua si es movil para habilitar otro tipo de menu
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    // estado del drawer
    const [open, setOpen] = useState(false);

    const opciones = [ {titulo : 'Servicios', accion: servicesRef}, {titulo : 'Nosotros', accion: aboutRef},
    {titulo : 'Agendar Cita', accion: ''  } , {titulo :'Galería', accion: galleryRef}]

    const handleAppointment = ()=>{
        window.open('https://calendar.app.google/efvcS58HYCodMQbY6', '_blank', 'noopener,noreferrer');
    }

    return(
        <>
            <AppBar position='fixed' sx={{  backgroundColor: '#ffffffff', boxShadow: 3 }} >
            <Toolbar>
                    <Box sx={{display: 'flex', justifyContent: 'start', p:1 }}>
                        <IconButton aria-label="" onClick={()=>  handleScroll(homeRef)}>
                                                  
                            <img src={logo} height='auto' width={150} alt="logo" /> 
                        </IconButton>
                        
                    </Box>

                    <Box sx={{display:'flex', marginLeft:'auto' }}  >
                        {isMobile 
                        ?
                        <Box>
                            <IconButton aria-label="" onClick={()=>{setOpen(!open)}}>
                            <MenuRoundedIcon/>
                            </IconButton>
                            <MenuDrawer open={open} setOpen={setOpen} opciones={opciones} handleAppointment={handleAppointment} handleScroll={handleScroll}/>
                        </Box>   
                        :
                        <Box sx={{display: 'flex', justifyContent:'flex-end', gap: 3  }}>
                            {opciones.map((opcion, indice)=>(
                                <Button key={indice} onClick={()=> indice == 2 ? handleAppointment() : handleScroll(opcion.accion)}  
                                sx={{textTransform:'none', color: 'text.primary' }}>{opcion.titulo}</Button>
                            ))}
                        </Box>      
                    }
                    </Box>

                
                </Toolbar>

            </AppBar>
            <Toolbar/>
        </>
    )
}

export default Header