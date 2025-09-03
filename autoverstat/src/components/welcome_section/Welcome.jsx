
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'




const Welcome =()=>{

    return(
        <Box sx={{  mt: 10, display:'flex', alignItems:'center', flexDirection:'column'}} >
            <Typography textAlign={'center'} variant="h4" color="var(--negro)">Donde la experiencia se convierte en excelencia</Typography>
            <Typography sx={{pt:2, pb:4}} variant="body1" color="text.secondary">Acabados de la mejor calidad para tu vehículo</Typography>
            <Button   size='medium' variant="contained" sx={{backgroundColor: "var(--rojo)", textTransform: 'none'}}>
              Empezar
            </Button>

        </Box>
    )
}

export default Welcome