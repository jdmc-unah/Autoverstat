import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


const Stats = ({texto})=>{

    return(
        <Box height={180} width={120} 
        sx={{ display:'flex', flexDirection:'column', justifyContent:'center' , backgroundColor: 'var(--bg-primary)', borderRadius: 1.5 }} >
            <Typography textAlign={'center'} variant="body1" color="var(--txt-light)" sx={{whiteSpace: 'pre-line'}} >
                {texto}
            </Typography>
        </Box>
    )
}

export default Stats