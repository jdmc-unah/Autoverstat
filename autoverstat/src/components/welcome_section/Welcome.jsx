
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import Details from './Details'
import FadeImage from './FadeImage'

const Welcome =()=>{

    return(
        
        <>
            <Box sx={{  mt: 10, display:'flex', alignItems:'center', flexDirection:'column'}} >
                <Typography textAlign={'center'} variant="h4" color="var(--negro)">Donde la experiencia se convierte en excelencia</Typography>
                <Typography sx={{pt:2, pb:4}} variant="body1" color="text.secondary">Acabados de la mejor calidad para tu vehículo</Typography>
                <Button   size='medium' variant="contained" sx={{backgroundColor: "var(--rojo)", textTransform: 'none'}}>
                    Empezar
                </Button>
            </Box>

            <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems: 'top', mt:5}}>
                <Details texto={ `20+ \n Años de Servicio`}/>
                <FadeImage/>
                <Details texto={ `20+ \n Años de Servicio`}/>
            </Box>

        </>
        
    )
}

export default Welcome