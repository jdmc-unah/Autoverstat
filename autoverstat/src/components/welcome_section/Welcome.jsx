
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import Years from './Years'

import FadeImage from './FadeImage'


const Welcome =()=>{

    return(
        
        <>
            <Box sx={{  mt: 8, display:'flex', alignItems:'center', flexDirection:'column'}} >
                <Typography textAlign={'center'} variant="h4" >Donde la experiencia se convierte en excelencia</Typography>
                <Typography sx={{pt:2, pb:4}} variant="body1" color="text.secondary">Acabados de la mejor calidad para tu vehículo</Typography>
                <Button   size='medium' variant="contained" sx={{backgroundColor: "var(--bg-primary)", textTransform: 'none'}}>
                    Empezar
                </Button>
            </Box>

           

            <Box sx={{display:'flex', justifyContent:'space-around', alignItems: 'center', mt:5,
                 position: 'relative', //TODO > este cambia con vista phone
            }}>
                <Years />
                <FadeImage/>
            </Box>

        </>
        
    )
}

export default Welcome