import { AppBar, InputBase, Typography, Grid, Button, Drawer, ListItem, List, Avatar, ListItemText } from "@mui/material";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import colombiaIcon from '../../assets/colIcon.png'
import React, { useState } from 'react';
import NavListDrawer from "./NavListDrawer";
import Slide from '@mui/material/Slide';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
import iconPT from '../../assets/LogoPT.svg'
import { SiNike } from 'react-icons/si'
import { CgAdidas } from 'react-icons/cg'
import { AiFillApple } from 'react-icons/ai'
import { SiNewbalance } from 'react-icons/si'
import { SiJordan } from 'react-icons/si'
import {BiSupport} from 'react-icons/bi'


export default function Navbar({ navLinks, productos }) {


    // Array of products for the recommended product bar
    const itemsNavbar = [
        {
            titulo: 'Strange Love',
            precio: '300.000',
            imagen: 'https://i.postimg.cc/pVzg3ctS/Strange-Love1.webp',
            id: 101
        },
        {
            titulo: 'Psg local 23/24',
            precio: '170.000',
            imagen: 'https://i.postimg.cc/Zn7xZG6t/Camiseta2-PSG.webp',
            id: 4
        },
        {
            titulo: 'Yeezy 350 V2',
            precio: '200.000',
            imagen: 'https://i.postimg.cc/NfBfMYKc/adidasyeezy350v2black1.webp',
            id: 109
        },
        {
            titulo: 'Milan local 23/24',
            precio: '170.000',
            imagen: 'https://i.postimg.cc/jSZFrDZW/Camiseta2-Milan.webp',
            id: 7
        },
        {
            titulo: 'Jordan I Historia De Origen',
            precio: '200.000',
            imagen: 'https://i.postimg.cc/ryjXHLQn/nike971.webp',
            id: 111
        },
        {
            titulo: 'RM local 23/24',
            precio: '200.000',
            imagen: 'https://i.postimg.cc/zf59qwFk/Camiseta2-RM.webp',
            id: 5
        },
    ]



    // State to store the search query
    const [searchQuery, setSearchQuery] = useState('');

    // Function to handle changes in the search query
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter products based on the search query
    const filteredProducts = productos.filter((product) =>
        // Convert both the search query and product name to lowercase
        // and check if the product name includes the search query
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );




    // Function to handle clicking on a product (e.g., for closing a component)
    const handleProductClick = () => {
        setOpenInput(false); // Sets the state "openInput" to "false" to close a component
    };

    // State to manage whether the navigation menu (navbar) is open or closed
    const [open, setOpen] = useState(false);

    // State to manage whether the input (search bar) is open or closed
    const [openInput, setOpenInput] = useState(false);


    return (

        <>
            {/* 
            * Container with brand icons and a country icon.
            * This container displays brand icons and a country icon in the top app bar.
            * The brand icons (e.g., Nike, Adidas, Apple, New Balance, Jordan).
            * The country icon represents the user's country (e.g., Colombia).
           */}

            <AppBar position="static" elevation={0}>
                <Toolbar style={{ minHeight: '35px', backgroundColor: '#f5f5f5' }}
                    alignItems="center">
                    <Box display="flex" flexGrow={1}>

                        {/* Brand Icons */}
                        <IconButton disableRipple sx={{ fill: 'black', color: 'black', height: '36px', width: '36px' }}>
                            <SiNike />
                        </IconButton>
                        <IconButton disableRipple sx={{ fill: 'black', color: 'black', height: '36px', width: '36px' }}>
                            <CgAdidas />
                        </IconButton>
                        <IconButton disableRipple sx={{ fill: 'black', color: 'black', height: '36px', width: '36px' }}>
                            <AiFillApple />
                        </IconButton>
                        <IconButton disableRipple sx={{ fill: 'black', color: 'black', height: '36px', width: '36px' }}>
                            <SiNewbalance />
                        </IconButton>
                        <IconButton disableRipple sx={{ fill: 'black', color: 'black', height: '36px', width: '36px' }}>
                            <SiJordan />
                        </IconButton>

                    </Box>
                    <Box>

                        {/* Country Icon */}
                        <IconButton disableRipple
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                                cursor: 'default',
                            }}>
                            <img src={colombiaIcon} alt="Custom Icon" style={{ width: 25, height: 25, fill: 'white' }} />
                        </IconButton>

                    </Box>
                </Toolbar>
            </AppBar>





            {/* Segunda nav que contiene los elementos principales******************
            * Large Navbar Container
            * This container represents the large navigation bar displayed at the top of the application.
            * It contains brand icons, navigation links, a search input, and recommended products.
            */}
            <AppBar position="static">
                <Toolbar style={{ minHeight: '55px', backgroundColor: 'black' }}>
                    <Grid container alignItems="center">
                        {/* Left Section */}
                        <Grid item xs={4} display="flex" alignItems="center">
                            {/* Menu Icon Button */}
                            <IconButton color="inherit" onClick={() => setOpen(true)} sx={{ display: { display: "flex", lg: "none" } }}>
                                <MenuIcon />
                            </IconButton>
                            {/* Home Link */}
                            <Link to="/" style={{ textDecorationLine: 'none' }}>
                                <img src={iconPT} alt="Custom Icon" style={{ width: 43, height: 43, fill: 'white' }} />
                            </Link>
                        </Grid>

                        {/* Middle Section */}
                        <Grid item xs={4}>
                            {/* Navigation Links for Large Screens */}
                            <Box sx={{ display: { xs: "none", lg: "block" } }} justifyContent="center" textAlign={"center"}>
                                {navLinks.map(item => (
                                    <Button
                                        key={item.title}
                                        component={NavLink}
                                        to={item.path}
                                        style={{
                                            marginTop: '1.7rem',
                                            fontSize: '1rem',
                                            color: 'white',
                                            fontWeight: '600',
                                        }}
                                    >
                                        {item.title}
                                    </Button>
                                ))}
                            </Box>
                        </Grid>

                        {/* Right Section */}
                        <Grid item xs={4} display="flex" justifyContent="flex-end" alignItems="center">
                            <Box display="flex" alignItems="center" gap={'.5rem'}>
                                {/* Search Input */}
                                <Button
                                    onClick={() => setOpenInput(true)}
                                    sx={{
                                        backgroundColor: 'transparent',
                                        border: '1px solid white',
                                        color: 'white',
                                        borderRadius: '0px'
                                    }}
                                    startIcon={<SearchIcon />}
                                >
                                    Buscar
                                </Button>
                                {/* Search Input Slide */}
                                <Slide direction="down" in={openInput}>
                                    <Box
                                        sx={{
                                            position: 'fixed',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            backgroundColor: 'white',
                                            zIndex: 999,
                                        }}
                                    >
                                        {/* Search Input Box */}
                                        <Box
                                            sx={{
                                                padding: '8px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: '#f6f7f8',
                                                padding: '1.5rem',
                                                zIndex: '99'
                                            }}
                                        >
                                            {/* Search Input Field */}
                                            <InputBase
                                                value={searchQuery}
                                                onChange={handleSearchChange}
                                                placeholder="BUSCAR"
                                                sx={{
                                                    border: '2px solid black',
                                                    borderRadius: '0px',
                                                    backgroundColor: 'white',
                                                    padding: '4px',
                                                    marginRight: '8px',
                                                    width: '95%',
                                                    height: '3.5rem',
                                                    padding: '10px',
                                                }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <SearchIcon />
                                                    </InputAdornment>
                                                }
                                            />

                                            {/* Close Icon Button */}
                                            <IconButton
                                                onClick={() => setOpenInput(false)}
                                                sx={{
                                                    color: 'black',
                                                    fontSize: '1rem',
                                                    '&:hover': {
                                                        boxShadow: '0 0 0 4px rgba(0, 0, 0, 0.0)',
                                                        borderRadius: '50%'
                                                    }
                                                }}
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                        </Box>

                                        {/* Scrollable Results */}
                                        <Grid container spacing={2} sx={{ padding: '8px', color: 'black', maxHeight: 400, overflow: 'auto' }}>
                                            {/* Recent Search Results */}
                                            <Grid item xs={12} md={4}>
                                                {/* Title for Recent Search Results */}
                                                <Box sx={{ width: '100%', marginTop: '1rem', marginBottom: '1rem', marginLeft: '3rem' }}>
                                                    <Typography variant="h6" component="h6" fontWeight={'600'}>
                                                        RESULTADOS DE BÚSQUEDA:
                                                    </Typography>
                                                </Box>
                                                {/* Display search results if there is a search query */}
                                                {searchQuery && (
                                                    <Box
                                                        sx={{
                                                            height: 'auto',
                                                            marginLeft: '2rem',
                                                            zIndex: '-1'
                                                        }}
                                                    >
                                                        {/* Display a list of search results */}
                                                        {filteredProducts.length > 0 ? (
                                                            <List style={{}}>
                                                                {filteredProducts.map((product) => (
                                                                    <Link to={`/producto/${product.id}`} style={{ textDecoration: 'none' }} onClick={handleProductClick}>
                                                                        {/* Display each search result item */}
                                                                        <ListItem key={product.id} sx={{
                                                                            '&:hover': {
                                                                                backgroundColor: '#f6f7f8',
                                                                            },
                                                                            zIndex: '-1'
                                                                        }}>
                                                                            {/* Display product image */}
                                                                            <Avatar alt={product.name} src={product.image} sx={{ borderRadius: '7px', height: '60px', width: '60px' }} />
                                                                            {/* Display product name */}
                                                                            <ListItemText primary={product.name} sx={{
                                                                                margin: '1rem', color: 'black',
                                                                            }} />
                                                                        </ListItem>
                                                                    </Link>
                                                                ))}
                                                            </List>
                                                        ) : (
                                                            // Display a message when no search results are found
                                                            <p style={{ marginLeft: '1rem' }}>No se encontraron resultados para tu búsqueda.</p>
                                                        )}
                                                    </Box>
                                                )}
                                            </Grid>

                                            {/* Recommended Products */}
                                            <Grid item xs={12} md={8} color={'black'} sx={{ position: 'sticky', top: 0 }}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Grid container>
                                                        {/* Title for Recommended Products */}
                                                        <Box sx={{ width: '100%', marginTop: '1rem', marginBottom: '1rem' }}>
                                                            <Typography variant="h6" component="h6" fontWeight={'600'}>
                                                                PRODUCTOS RECOMENDADOS
                                                            </Typography>
                                                        </Box>
                                                        {/* Map through itemsNavbar to display recommended products */}
                                                        {itemsNavbar.map((item) => (
                                                            <Grid item xs={12} md={6}>
                                                                {/* Create a link to the product details page */}
                                                                <Link to={`/producto/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }} onClick={handleProductClick}>
                                                                    {/* Display each recommended product */}
                                                                    <Grid item xs={12} md={6} sx={{ minHeight: '80px', padding: '5px', display: 'flex', alignItems: 'center' }}>
                                                                        {/* Display the product image */}
                                                                        <img src={item.imagen} alt="Custom Icon" style={{ width: 85, height: 80, fill: 'white', marginRight: '1rem' }} loading="lazy" />
                                                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                                            <Box>
                                                                                {/* Display the product title */}
                                                                                <Typography fontWeight={'600'} sx={{ width: '100%' }}>{item.titulo}</Typography>
                                                                            </Box>
                                                                            <Box>
                                                                                {/* Display the product price */}
                                                                                <Typography variant="body2" component="h6" fontWeight={'600'} margin={'1rem 0  1rem'}>
                                                                                    {item.precio}
                                                                                </Typography>
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                </Link>
                                                            </Grid>
                                                        ))}
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Slide>
                            </Box>
                            {/* Favorites Link */}
                            <Link to="/Favoritos">
                                <IconButton sx={{ color: "white" }} fontSize="medium">
                                    <FavoriteBorderIcon />
                                </IconButton>
                            </Link>
                            <Link to="/Soporte">
                                <IconButton sx={{ color: "white" }} fontSize="medium">
                                    <BiSupport />
                                </IconButton>
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>




            <Drawer
                // Open state controls whether the drawer is visible or hidden
                open={open}
                // The anchor determines from which side the drawer appears (in this case, left)
                anchor="left"
                // When the user clicks outside the drawer, it will close
                onClose={() => setOpen(false)}
            >
                {/* Render the NavListDrawer component */}
                <NavListDrawer
                    // Pass the navigation links as a prop
                    navLinks={navLinks}
                    // Pass the NavLink component as a prop
                    NavLink={NavLink}
                    // Pass the setOpen function to allow NavListDrawer to close the drawer
                    setOpen={setOpen}
                />
            </Drawer>

        </>
    )
}