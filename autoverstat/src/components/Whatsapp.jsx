import Fab from '@mui/material/Fab';
import whatsapp from '../assets/icons/whatsapp.png'
import Box from '@mui/material/Box';


const Whatsapp = ()=>{
    const handleWhatsapp = () => {
        window.open('https://wa.me/+50498783137', '_blank', 'noopener,noreferrer');
    };
    
    return(
        <Fab size="small" color="secondary" aria-label="add"  width={30} height={30} 
        sx={{position:'fixed' , zIndex: 20, right: 30, bottom: 30}} onClick={ handleWhatsapp} >
            <Box component={'img'}src={whatsapp} ></Box>
        </Fab>   
    )
}

export default Whatsapp