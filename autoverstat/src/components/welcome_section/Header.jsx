
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@emotion/react'






const Header = ()=>{
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))



    return(
        <Box sx={{display: 'flex', justifyContent:'space-between'  }} >
           
           <Box sx={{display: 'flex', justifyContent: 'start',  }}>
                <img src="#" alt="logo" />
                <Typography variant="body1" color="var(--negro)">Autoverstat</Typography>
            </Box>

           {isMobile ?
                <Box>
                    <Typography variant="body1" color="initial"></Typography>
                </Box>   
                    :
                <Box sx={{display: 'flex', justifyContent: 'space-between', minWidth: 500  }}>
                    <Button color="var(--negro)" sx={{textTransform:'none'}}>Más Información</Button>
                    <Button color="var(--negro)" sx={{textTransform:'none'}}>Servicios</Button>
                    <Button color="var(--negro)" sx={{ textTransform:'none'}}>Contacto</Button>
                    <Button color="var(--negro)" sx={{ textTransform:'none'}}>Galería</Button>
                
                </Box>      
            }
            
            
        </Box>
    )
}

export default Header