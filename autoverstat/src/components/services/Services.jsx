import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import service1 from '../../assets/icons/service1.png'
import service2 from '../../assets/icons/service2.png'
import service3 from '../../assets/icons/service3.png'



const Services = ({servicesRef})=>{

    return(
        
        <Box ref={servicesRef}  sx={{ display:'flex', flexDirection: 'column', alignItems:'center' , justifyContent: 'center',   
        minHeight: 350 , width: '100%' , backgroundColor: 'var(--bg-primary)', marginTop: 7, paddingY: 5 }}>
            
            <Typography variant="h5"  paddingBottom={5} color= 'var(--txt-light)'  >Nuestros Servicios</Typography>
            
            <Grid
            
            container
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
            paddingX={2}
            
            >
                <Grid size={{sm: 12, md: 6, lg: 4, xl: 4 }}>
                  <Box sx={{backgroundColor: 'var(--bg-primary-light)' , padding:2 }} >
                        <Box
                        component={'img'}
                        src={service1}
                        height={64}
                        width={64}
                        pb={1}
                        >
                        </Box>
                        <Typography variant="body1"  color="var(--txt-light)" gutterBottom >Enderezado</Typography>
                        <Typography variant="body2" color="var(--txt-secondary)"> Utilizamos técnicas precisas para corregir deformaciones y asegurar que su auto vuelva a estar en condiciones óptimas.</Typography>
                  </Box>
                </Grid>
                <Grid size={{sm: 12, md: 6, lg: 4, xl: 4 }}>
                  <Box sx={{backgroundColor: 'var(--bg-primary-light)' , padding:2 }} >
                        <Box
                        component={'img'}
                        src={service2}
                        height={64}
                        width={64}
                        pb={1}
                        >
                        </Box>
                        <Typography variant="body1"  color="var(--txt-light)" gutterBottom >Auto Pintura</Typography>
                        <Typography variant="body2" color="var(--txt-secondary)">Con precisión y pasión, devolvemos el brillo original a tu automóvil, asegurando un acabado impecable que destaca en la carretera</Typography>
                  </Box>
                </Grid>
                <Grid size={{sm: 12, md: 6, lg: 4, xl: 4 }}>
                  <Box sx={{backgroundColor: 'var(--bg-primary-light)' , padding:2 }} >
                        <Box
                        component={'img'}
                        src={service3}
                        height={64}
                        width={64}
                        pb={1}
                        >
                        </Box>
                        <Typography variant="body1"  color="var(--txt-light)" gutterBottom >Pulido Profesional</Typography>
                        <Typography variant="body2" color="var(--txt-secondary)">Eliminamos imperfecciones, realzamos el brillo y protegemos la pintura, dejando tu automóvil con un acabado resplandeciente y duradero</Typography>
                  </Box>
                </Grid>
                

               
            
            
            </Grid>

        </Box>
        

        
        
    )
}


export default Services