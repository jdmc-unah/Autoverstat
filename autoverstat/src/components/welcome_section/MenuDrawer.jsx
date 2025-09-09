import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const MenuDrawer = ({open, setOpen, opciones, handleScroll,handleAppointment})=> {
  
  const handleClose =()=>{
    setOpen(false);
  }


  const DrawerList = (
    <Box sx={{ width: 170 }} role="presentation" onClick={handleClose}>
      <List>
        {opciones.map((opcion, indice)=>(
          <ListItem key={indice} disablePadding>
            <ListItemButton onClick={()=> indice == 2 ? handleAppointment() : handleScroll(opcion.accion)} >
                <ListItemText primary={opcion.titulo} />
            </ListItemButton>
            
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor='right' open={open} onClose={handleClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default MenuDrawer