import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import collision from '../../assets/icons/collision.png'
import paint from '../../assets/icons/touchup.png'
import car from '../../assets/icons/new-car.png'

const Years = ()=>{

    return(
        <Box height={250} width={320} 
        sx={{ display:'flex', flexDirection:'column', justifyContent:'center' , backgroundColor: 'var(--bg-secondary)', borderRadius: 5,
            
            //TODO > esto debe cambiar solo para la vista de -900 px ademas del color de fondo que debe ser opaco
            position: 'absolute',
            top:2,
            left: 20,
            zIndex: 10,
         }} >
            <Typography fontSize={30} fontWeight={'bold'}  textAlign={'center'} variant="body1" color="var(--txt-light)" >
                +20 años
            </Typography>

            <Typography textAlign={'center'} variant="body1" color="var(--txt-light)"> 
                Operando con calidad experta
            </Typography>

             <Box
                sx={{
                    display: 'flex',
                    gap: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 2,
                    '& .icon': {
                    width: 64,
                    height: 64,
                    animation: 'pulse 4s ease-in-out infinite',
                    },
                    '& .icon:nth-of-type(1)': {
                    animationDelay: '0s',
                    },
                    '& .icon:nth-of-type(2)': {
                    animationDelay: '1s',
                    },
                    '& .icon:nth-of-type(3)': {
                    animationDelay: '2s',
                    },
                    '@keyframes pulse': {
                    '0%, 100%': {
                        transform: 'scale(1)',
                    },
                    '50%': {
                        transform: 'scale(1.3)',
                    },
                    },
                }}
                >
                <Box
                    component="img"
                    src={collision}
                    alt="Icono 1"
                    className="icon"
                />
                <Box
                    component="img"
                    src={paint}
                    alt="Icono 2"
                    className="icon"
                />
                <Box
                    component="img"
                    src={car}
                    alt="Icono 3"
                    className="icon"
                />
                </Box>
            </Box>
            


            
            
    )
}

export default Years