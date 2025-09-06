import { useEffect, useState } from 'react';
import { Fade, Box } from '@mui/material';

import blueCarCrashed from '../../assets/blueCarCrashed.png'
import blueCarFinished from '../../assets/blueCarFinished.png'

const FadeImage = () => {
  const [mostrarPrimera, setMostrarPrimera] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setMostrarPrimera((prev) => !prev);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(intervalo); // Limpieza al desmontar
  }, []);

  return (
    <Box sx={{ position: 'relative', width: 450, height: 300,   
    overflow: 'hidden' , backgroundColor: 'var(--bg-secondary)', borderRadius: 1.5}}>
      
      <Fade in={mostrarPrimera} timeout={1000}>
        <Box
          component="img"
          src={blueCarCrashed}
          
          alt="Imagen 1"
          sx={{
            pl:1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Fade>

      <Fade in={!mostrarPrimera} timeout={1000}>
        <Box
          component="img"
          src={blueCarFinished}
          alt="Imagen 2"
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Fade>
    </Box>
  );
};

export default FadeImage;
