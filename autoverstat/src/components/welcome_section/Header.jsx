
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme} from '@emotion/react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'


import MenuDrawer from './MenuDrawer'


const Header = ()=>{
    //evalua si es movil para habilitar otro tipo de menu
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    // estado del drawer
    const [open, setOpen] = useState(false);

    const opciones = [{titulo : 'Más Información', accion: '#'}, {titulo : 'Servicios', accion: '#'}, 
    {titulo : 'Contacto', accion: '#'} , {titulo :'Galería', accion: '#'}]

    
    return(
        <Box sx={{display: 'flex', justifyContent:'space-between'  }} >
           
           <Box sx={{display: 'flex', justifyContent: 'start',  }}>
                <img src="#" alt="logo" />
                <Typography variant="body1" color="var(--negro)">Autoverstat</Typography>
            </Box>

           {isMobile 
                ?
                <Box>
                    <IconButton aria-label="" onClick={()=>{setOpen(!open)}}>
                      <MenuRoundedIcon/>
                    </IconButton>
                    <MenuDrawer open={open} setOpen={setOpen} opciones={opciones}/>
                </Box>   
                :
                <Box sx={{display: 'flex', justifyContent: 'space-between', minWidth: 500  }}>
                    {opciones.map((opcion, indice)=>(
                        <Button key={indice}  color="var(--negro)" sx={{textTransform:'none'}}>{opcion.titulo}</Button>
                    ))}
                </Box>      
            }
            
            
        </Box>
    )
}

export default Header