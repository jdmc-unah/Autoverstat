import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import collision from '../../assets/icons/collision.png'
import paint from '../../assets/icons/touchup.png'
import car from '../../assets/icons/new-car.png'
import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material'

const Years = ()=>{

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const mobileStyles =  { display:'flex', flexDirection:'column', justifyContent:'center' , 
    backgroundColor: 'var(--bg-secondary-trans)', borderRadius: 5, position: 'absolute', top:70, zIndex: 10,}
    const largeStyles =  { display:'flex', flexDirection:'column', justifyContent:'center' , 
    backgroundColor: 'var(--bg-secondary)', borderRadius: 5, mr: 2}


    return(
        <Box height={ isMobile ? 200 : 250} width={ isMobile ?  '90%' : 370} 
        sx={  isMobile ? mobileStyles : largeStyles} >
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