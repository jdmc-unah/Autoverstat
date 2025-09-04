import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


const Stats = ({texto})=>{

    return(
        <Box height={120} width={90} 
        sx={{ display:'flex', flexDirection:'column', justifyContent:'center' , backgroundColor: 'var(--rojo)', borderRadius: 1.5 }} >
            <Typography textAlign={'center'} variant="body1" color="var(--blanco)" sx={{whiteSpace: 'pre-line'}} >
                {texto}
            </Typography>
        </Box>
    )
}

export default Stats