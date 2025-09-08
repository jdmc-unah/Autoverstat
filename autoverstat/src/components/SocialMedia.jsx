// import Fab from '@mui/material/Fab';
// import whatsapp from '../assets/icons/whatsapp.png'
// import Box from '@mui/material/Box';


// const Whatsapp = ()=>{
//     const handleWhatsapp = () => {
//         window.open('https://wa.me/+50498783137', '_blank', 'noopener,noreferrer');
//     };
    
//     return(
//         <Fab size="small" color="secondary" aria-label="add"  width={30} height={30} 
//         sx={{position:'fixed' , zIndex: 20, right: 30, bottom: 30}} onClick={ handleWhatsapp} >
//             <Box component={'img'}src={whatsapp} ></Box>
//         </Fab>   
//     )
// }

// export default Whatsapp

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import chat from '../assets/icons/chat.gif'
import whatsapp from '../assets/icons/whatsapp.png'
import facebook from '../assets/icons/facebook.png'
import tiktok from '../assets/icons/tiktok.png'
import insta from '../assets/icons/instagram.png'




const  Whatsapp=()=> {
    const handleWhats = () => {
        window.open('https://wa.me/+50498783137', '_blank', 'noopener,noreferrer');
    };

    const handleFB = () => {
        window.open('https://www.facebook.com/autoverstat', '_blank', 'noopener,noreferrer');
    };

    const handleTT = () => {
        window.open('https://www.tiktok.com/@autoverstathn?_t=ZM-8zZ4iD8tnXS&_r=1', '_blank', 'noopener,noreferrer');
    };

    const handleInsta = () => {
        window.open('https://www.instagram.com/autoverstat/?hl=es', '_blank', 'noopener,noreferrer');
    };

    const socials = [
        { icon: <img src={whatsapp} alt="whatsapp" width={40} />  , action: handleWhats },
        { icon: <img src={facebook} alt="facebook" width={40} />, action: handleFB },
        { icon: <img src={tiktok} alt="tiktok" width={40} />, action: handleTT },
        { icon: <img src={insta} alt="insta" width={40} />, action: handleInsta },
    ];

  return (
    <Box sx={{ position:'fixed' , zIndex: 20, right: 30, bottom: 30, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 0, right: 0 }}
        icon={ <img
        src={chat}
        alt="GIF animado"
        style={{ width: 60, height: 60, borderRadius: '50%' }}
    />}
      >
        {socials.map((social) => (
          <SpeedDialAction
            onClick={social.action}
            key={social.name}
            icon={social.icon}
            
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export default  Whatsapp