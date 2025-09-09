
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

//Imagenes
import img1 from '../../assets/Gallery/1.jpg'
import img2 from '../../assets/Gallery/2.jpg'
import img3 from '../../assets/Gallery/3.jpg'
import img4 from '../../assets/Gallery/4.jpg'
import img5 from '../../assets/Gallery/5.jpg'
import img6 from '../../assets/Gallery/6.jpg'
import img7 from '../../assets/Gallery/7.jpg'
import img8 from '../../assets/Gallery/8.jpg'
import img9 from '../../assets/Gallery/9.jpg'
import img10 from '../../assets/Gallery/10.jpg'
import img11 from '../../assets/Gallery/11.jpg'
import img12 from '../../assets/Gallery/12.jpg'
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';


const Gallery = ({galleryRef})=>{
       
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))


    return(
        <Box ref={galleryRef}  sx={{ display:'flex', flexDirection: 'column', alignItems:'center' , justifyContent: 'center',   
        minHeight: 350 , width: '100%' , backgroundColor: 'var(--bg-primary)', marginTop: 7, paddingY: 5 }}>
            <Typography variant="h5"  gutterBottom color= 'var(--txt-light)'  >Galería</Typography>
            <ImageList sx={{ width: '80%', height: 500, padding: 2 }} cols={ isMobile ? 2 : 4} rowHeight={250}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    srcSet={`${item.img}`}  //?w=164&h=164&fit=cover&auto=format&dpr=2
                    // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
            </ImageList>

        </Box>
    )
}


const itemData = [
    {
        img: img1,
        title: '1',
    },
    {
        img: img2,
        title: '2',
    },
    {
        img: img3,
        title: '3',
    },
    {
        img: img4,
        title: '4',
    },
    {
        img: img5,
        title: '5',
    },
    {
        img: img6,
        title: '6',
    },
    {
        img: img11,
        title: '11',
    },
    {
        img: img12,
        title: '12',
    },
    {
        img: img7,
        title: '7',
    },
    {
        img: img8,
        title: '8',
    },
    
    {
        img: img9,
        title: '9',
    },
    
    {
        img: img10,
        title: '10',
    },
    

    
    ];

export default Gallery