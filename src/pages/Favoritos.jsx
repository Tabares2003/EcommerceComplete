
import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Box, Button, Divider, IconButton, SnackbarContent, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { TbHeartMinus } from 'react-icons/tb'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { RiSubtractFill } from 'react-icons/ri'



export default function Favoritos() {



    //Consts measured, 80% and in md 100%.
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

    //Consts measured carousel
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    //Items Finals carousel
    const items = [
        <Link to={`/producto/113`} style={{ textDecoration: 'none', }}>
            <div
                className="item"
                data-value="1"
                style={{ margin: '.3rem', position: 'relative' }}
            >
                <img src={'https://i.postimg.cc/15Yzk3mr/airmax901.webp'} alt="your image" style={{ width: '100%', height: '100%', borderRadius: '5px' }} loading="lazy" />
                <div style={{ justifyContent: 'space-between', display: 'flex', color: 'black' }}>
                    <p>
                        Air Max 90 White Metallic Gold
                    </p>
                    <p>
                        $200.000
                    </p>
                </div>
            </div>
        </Link>
        ,
        <Link to={`/producto/204`} style={{ textDecoration: 'none', }}>
            <div
                className="item"
                data-value="2"
                style={{ margin: '.3rem', position: 'relative' }}
            >
                <img src={'https://i.postimg.cc/pLc2bkKS/airpodspro.webp'} alt="your image" style={{ width: '100%', height: '100%', borderRadius: '10px' }} loading="lazy" />
                <div style={{ justifyContent: 'space-between', display: 'flex', color: 'black' }}>
                    <p>
                        Airpods Pro
                    </p>
                    <p>
                        $430.000
                    </p>
                </div>
            </div></Link>,
        <Link to={`/producto/116`} style={{ textDecoration: 'none', }}>
            <div
                className="item"
                data-value="3"
                style={{ margin: '.3rem', position: 'relative' }}
            >
                <img src={'https://i.postimg.cc/SNynCPsH/nbxstoneisland1.webp'} alt="your image" style={{ width: '100%', height: '100%', borderRadius: '10px' }} loading="lazy" />
                <div style={{ justifyContent: 'space-between', display: 'flex', color: 'black' }}>
                    <p>
                        New Balance X Stone Island
                    </p>
                    <p>
                        $400.000
                    </p>
                </div>
            </div></Link>,
        <Link to={`/producto/10`} style={{ textDecoration: 'none', }}>
            <div
                className="item"
                data-value="4"
                style={{ margin: '.3rem', position: 'relative' }}
            >
                <img src={'https://i.postimg.cc/wM0GxnF5/Camiseta2-United.webp'} alt="your image" style={{ width: '100%', height: '100%', borderRadius: '10px' }} loading="lazy" />
                <div style={{ justifyContent: 'space-between', display: 'flex', color: 'black' }}>
                    <p>
                        Man United local 23/24
                    </p>
                    <p>
                        $180.000
                    </p>
                </div>
            </div></Link>,
        <Link to={`/producto/104`} style={{ textDecoration: 'none', }}>
            <div
                className="item"
                data-value="5"
                style={{ margin: '.3rem', position: 'relative' }}
            >
                <img src={'https://i.postimg.cc/LXgxN14f/retro1high1.webp'} alt="your image" style={{ width: '100%', height: '100%', borderRadius: '10px' }} loading="lazy" />
                <div style={{ justifyContent: 'space-between', display: 'flex', color: 'black' }}>
                    <p>
                        Jordans 1 High Fearless
                    </p>
                    <p>
                        $640.000
                    </p>
                </div>
            </div></Link>

    ];




    // Favorites Page State and Effects:
    // - This section sets up the state and effects needed for the Favorites page.
    // - It initializes 'favorites' state to an empty array and manages the snackbar state.
    // - When the component mounts, it retrieves the list of favorites from local storage.

    const [favorites, setFavorites] = useState([]); // State to store the list of favorite products
    const [snackbarOpen, setSnackbarOpen] = useState(false); // State to manage the snackbar visibility
    const [snackbarMessage, setSnackbarMessage] = useState(''); // State to set snackbar message

    useEffect(() => {
        // Retrieve the list of favorites from local storage when the component mounts.
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(favorites);
    }, []);



    // Handle Remove from Favorites:
    // - This function removes a product from the list of favorites.
    // - It creates a new list of favorites without the product being removed.
    // - The updated list is stored in local storage, and the component's state is updated.

    const handleRemove = (product) => {
        // Create a new list of favorites without the product being removed.
        const newFavorites = favorites.filter((fav) => fav.id !== product.id);

        // Store the new list of favorites in local storage.
        localStorage.setItem('favorites', JSON.stringify(newFavorites));

        // Update the component's state with the new list of favorites.
        setFavorites(newFavorites);

        // Show a snackbar message indicating the product was removed from favorites.
        setSnackbarMessage('Product removed from your favorites list');
        setSnackbarOpen(true);
    };



    return (
        <>
            {/*Main Container*/}
            <Grid container justifyContent="center">

                {/*Sub Main Container - 80%, md 100%*/}
                <Grid container style={{ width: isMdDown ? '100%' : '75%', display: 'flex', margin: '0' }}>

                    {/*Box Button Back and Route*/}
                    <Box sx={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center' }}>
                        <Link to="/">
                            <Button
                                startIcon={<KeyboardReturnIcon />}
                                sx={{
                                    color: 'black',
                                    fontWeight: '600',
                                    fontSize: '.9rem',

                                    '&:hover': {
                                        backgroundColor: 'black',
                                        color: 'white',
                                        '& .MuiSvgIcon-root': {
                                            color: 'white',
                                        },
                                    },
                                    borderRadius: 0,
                                }}
                            >
                                Atrás
                            </Button>
                        </Link>
                        <Typography sx={{ fontWeight: '500', fontSize: '.8rem', marginLeft: '1rem', color: '#767677' }}>
                            Home / Favoritos
                        </Typography>
                    </Box>

                    {/*Container title page */}
                    <Grid container sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
                        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                            {/* Contenido del primer subcontenedor */}
                            <Typography sx={{ fontWeight: '700', fontSize: '2rem', color: 'black' }}>
                                FAVORITOS
                            </Typography>
                        </Grid>
                    </Grid>

                    {/*Container of favorites products */}
                    <Grid container>
                        {/* length If we do not have favorite products here*/}
                        {favorites.length === 0 ? (
                            //Box for advertance if we do no have favorite products
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem' }}> {/*Box Boton atrás*/}
                                <Typography variant="h5" align="center" sx={{ fontWeight: '500' }}>
                                    Ups, aún no hay productos en tu lista de favoritos!
                                </Typography>
                                <Link to={`/`} style={{ textDecoration: 'none', }}>
                                    <Button sx={{
                                        height: '3rem', width: 'AUTO', color: 'white', border: '1px solid black', fontWeight: '600', marginTop: '2rem', padding: '1.8rem', borderRadius: '0', backgroundColor: 'black', '&:hover': {
                                            backgroundColor: 'white', color: 'black', border: '1px solid black'
                                        },
                                    }} endIcon={<AiOutlineShoppingCart />}>
                                        SEGUIR NAVEGANDO
                                    </Button>
                                </Link>
                            </Box>
                        ) : (
                            //mapping favorites products, styles, delete button, price
                            favorites.map((product) => (
                                <Grid mt={2} item xs={6} sm={4} md={3} key={product.id}
                                    onMouseEnter={(e) => (e.currentTarget.style.border = '1px solid black')}
                                    onMouseLeave={(e) => (e.currentTarget.style.border = '1px solid transparent')} sx={{ marginBottom: '1.5rem' }}>

                                    <div style={{ position: 'relative', padding: '5px' }} >
                                        {/* Link to product details page */}
                                        <Link to={`/producto/${product.id}`}  >
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                style={{ width: '100%', height: 'auto' }}
                                                loading="lazy"
                                            />
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: 0,
                                                    backgroundColor: 'white',
                                                    padding: '0.5rem',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                <Typography sx={{ fontSize: '.9rem', color: 'black' }}>{product.price}</Typography>
                                            </div>
                                        </Link>
                                        {/*button delete */}
                                        <IconButton
                                            onClick={() => handleRemove(product)}
                                            style={{ position: 'absolute', top: 0, right: 0, margin: '10px', fill: 'black', color: 'black' }}
                                        >
                                            <TbHeartMinus />
                                        </IconButton>
                                    </div>
                                    <Typography sx={{ fontSize: '.9rem', marginLeft: '5px' }}>{product.name}</Typography>
                                    {/*Shop Button */}
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Button sx={{
                                            width: '90%', backgroundColor: 'black', color: 'white', borderRadius: '0', fontWeight: '700', marginTop: '5px',
                                            '&:hover': {
                                                backgroundColor: 'gray',
                                            },
                                        }}>
                                            COMPRAR
                                        </Button>
                                    </Box>
                                </Grid>
                            ))
                        )}


                        <Divider sx={{ marginTop: '1rem', color: 'white', border: '1px solid #000000', opacity: '99', marginBottom: '2rem', width: '100%' }} />

                        <Typography pl={3} sx={{ fontSize: '1.7rem', fontWeight: '700', marginBottom: '2rem' }}>Otros productos que te podrían gustar</Typography>

                         {/*Carousel */}
                        <AliceCarousel
                            mouseTracking
                            items={items}
                            paddingLeft={20}
                            paddingRight={20}
                            responsive={responsive}
                            renderPrevButton={() => (
                                <IconButton style={{ borderRadius: '50%', backgroundColor: '#242424', color: 'white' }}>
                                    <MdChevronLeft />
                                </IconButton>
                            )}
                            renderNextButton={() => (
                                <IconButton style={{ borderRadius: '50%', backgroundColor: '#242424', color: 'white' }}>
                                    <MdChevronRight />
                                </IconButton>
                            )}
                        />

                    </Grid>


                {/*Snackbar to tell me if it was deleted correctly */}
                    <Snackbar
                        open={snackbarOpen}
                        autoHideDuration={2000}
                        onClose={() => setSnackbarOpen(false)}
                        anchorOrigin={{ vertical: "center", horizontal: "center" }}
                    >
                        <SnackbarContent
                            sx={{ backgroundColor: "white", borderRadius: "5px", color: "green", border: '1px solid green', fontSize: '.9rem', fill: 'green' }}
                            message={
                                <span>
                                    <RiSubtractFill /> {snackbarMessage}
                                </span>
                            }
                        />
                    </Snackbar>
                </Grid>
            </Grid>


        </>
    )

}