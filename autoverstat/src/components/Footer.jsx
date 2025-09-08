import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


const Footer = ()=>{

    return(
        <>
            <Box  sx={{ display:'flex', paddingLeft: 1, alignItems:'center', justifyContent:'flex-start', backgroundColor: 'var(--bg-primary)' , height: 50}} >
                <Typography   variant="body2" color="var(--txt-light)">Desarrollado por</Typography>  
                <Button
                  color="primary"
                  onClick={()=> window.open('https://portfolio-r8at.onrender.com/', '_blank', 'noopener,noreferrer')}
                >
                  @jdmc 
                </Button>   
            </Box>
        </>
    )
}


export default Footer