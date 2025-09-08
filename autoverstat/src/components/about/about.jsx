import Box from '@mui/material/Box';

import video from '../../assets/Videos/video.mp4'
import Typography from '@mui/material/Typography'
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';



const About = ({aboutRef})=>{

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    


    return(
        <>
        {isMobile ? 
            
            <Box ref={aboutRef} sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
               
                <Box padding={2}>
                                        <Typography textAlign={'center'} padding={3}  variant="h5" color="initial">Acerca de Nosotros</Typography>

                    <Typography textAlign={'justify'} gutterBottom variant="body1" color="text.secondary">En Autoverstat, nos dedicamos con pasión y dedicación al arte de la pintura automotriz. Nuestra misión es brindar a nuestros clientes un servicio excepcional, combinando la más alta calidad en acabados con precios justos.</Typography>
                    <Typography textAlign={'justify'} gutterBottom variant="body1" color="text.secondary">Valoramos cada vehículo como si fuera propio y nos esforzamos por superar las expectativas de nuestros clientes en cada proyecto,  comprometiéndonos en ofrecer un servicio personalizado y cuidadoso, poniendo en práctica más de 20 años de experiencia y asegurando que cada vehículo salga de nuestro taller con un acabado impecable. </Typography>
                </Box>
                 <Box padding={2} maxWidth={400} >
                    <Box component={'video'} width={'100%'} height={'100%'}  src={video} autoPlay muted loop playsInline />
                </Box>
                
            </Box>
            :
            <Box ref={aboutRef} sx={{display:'flex', alignItems:'center', justifyContent:'space-evenly'}}>
                <Box padding={2} width={450} >
                    <Box component={'video'} width={'100%'} height={'100%'}  src={video} autoPlay muted loop playsInline />
                </Box>
                
                <Box width={550}  padding={2}>
                    <Typography textAlign={'center'} paddingBottom={3}  variant="h5" color="initial">Acerca de Nosotros</Typography>
                    <Typography textAlign={'justify'} gutterBottom variant="body1" color="text.secondary">En Autoverstat, nos dedicamos con pasión y dedicación al arte de la pintura automotriz. Nuestra misión es brindar a nuestros clientes un servicio excepcional, combinando la más alta calidad en acabados con precios justos.</Typography>
                    <Typography textAlign={'justify'} gutterBottom variant="body1" color="text.secondary">Valoramos cada vehículo como si fuera propio y nos esforzamos por superar las expectativas de nuestros clientes en cada proyecto,  comprometiéndonos en ofrecer un servicio personalizado y cuidadoso, poniendo en práctica más de 20 años de experiencia y asegurando que cada vehículo salga de nuestro taller con un acabado impecable. </Typography>
                </Box>
            </Box>

        }
        </>
        
    )
}

export default About