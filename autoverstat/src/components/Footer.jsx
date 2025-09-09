import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider';


import logo from '../assets/logo.png'
import Grid from '@mui/material/Grid'





const Footer = ()=>{

    return(
        <>
            <Box  height={300} sx={{ display:'flex', flexDirection:'column',pt:2, alignItems:'space-evenly', justifyContent:'space-around'}} >
                

                <Grid container spacing={3}
                  direction="row"
                  justifyContent="space-around"
                  alignItems="start"
                  alignContent="center"
                  wrap="wrap"   
                  padding={2}
                  >

                  <Grid  >
                    <Typography variant="body1" color="initial" textAlign={'start'} gutterBottom>Contacto</Typography>
                    <Typography variant="body2"  color="text.secondary"  textAlign={'start'}>+504 9801-7703</Typography>
                    <Typography variant="body2"  color="text.secondary"  textAlign={'start'}>+504 9365-4988</Typography>
                  </Grid>

                  <Grid  >
                    <Typography variant="body1" color="initial" textAlign={'start'}  gutterBottom>Dirección</Typography>
                    <Typography width={200} variant="body2" color="text.secondary"  textAlign={'start'}>Barrio Guadalupe Avenida Junior, San Pedro Sula, Cortés</Typography>
                  </Grid>
                  
                  

                  <Grid >
                    <Box component={'img'} src={logo} height={70} width={150}></Box> 
                  </Grid>
                 
                  
                  
                </Grid>

                <Divider />


                <Box sx={{ display:'flex', paddingLeft: 1, alignItems:'center', justifyContent:'center'}} >
                  <Typography   variant="body2" >Autoverstat 2025 - Desarrollado por</Typography>  
                  <Button
                      sx={{textTransform: 'none'}}
                    color="primary"
                    onClick={()=> window.open('https://portfolio-r8at.onrender.com/', '_blank', 'noopener,noreferrer')}
                  >
                    @jdmc 
                  </Button>   
                </Box>

                
            </Box>
        </>
    )
}


export default Footer