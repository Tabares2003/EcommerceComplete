import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { useParams } from 'react-router-dom';
import { AccordionDetails, AccordionSummary, Box, Button, Divider, Grid, IconButton, SnackbarContent, Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import { Accordion } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { ExpandMore } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import products from '../data/NCamisetas';
import zapatos from '../data/Zapatos';
import techproducts from '../data/Tech';
import { BsCheck2All } from 'react-icons/bs'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'



export default function DetalleProducto() {



  //Consts measured, 80% and in md 100%.
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));


  //Consts measured carousel
  const responsive = {
    0: { items: 2 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  //Items Finals carousel
  const items = [
    <Link to={`/producto/4`} style={{ textDecoration: 'none', }}>
      <div
        className="item"
        data-value="1"
        style={{ margin: '.3rem', position: 'relative' }}
      >
        <img src={'https://i.postimg.cc/Zn7xZG6t/Camiseta2-PSG.webp'} alt="your image" style={{ width: '100%', height: '100%', borderRadius: '5px' }} />
      </div>
    </Link>
    ,
    <Link to={`/producto/106`} style={{ textDecoration: 'none', }}>
      <div
        className="item"
        data-value="2"
        style={{ margin: '.3rem', position: 'relative' }}
      >
        <img src={'https://i.postimg.cc/h4V883J4/nikexstussy2.webp'} alt="your image" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
      </div></Link>,
    <Link to={`/producto/201`} style={{ textDecoration: 'none', }}>
      <div
        className="item"
        data-value="3"
        style={{ margin: '.3rem', position: 'relative' }}
      >
        <img src={'https://i.postimg.cc/L6PwDDsS/airpodsmax.webp'} alt="your image" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
      </div></Link>,
    <Link to={`/producto/5`} style={{ textDecoration: 'none', }}>
      <div
        className="item"
        data-value="4"
        style={{ margin: '.3rem', position: 'relative' }}
      >
        <img src={'https://i.postimg.cc/zf59qwFk/Camiseta2-RM.webp'} alt="your image" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
      </div></Link>,
    <Link to={`/producto/112`} style={{ textDecoration: 'none', }}>
      <div
        className="item"
        data-value="5"
        style={{ margin: '.3rem', position: 'relative' }}
      >
        <img src={'https://i.postimg.cc/qM2mYzX9/nikedunk3.webp'} alt="your image" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
      </div></Link>

  ];



  /**
  * Extracts the 'id' parameter from the URL using React Router's 'useParams' hook.
  * Parses the 'id' as an integer to ensure it's treated as a number.
  * Searches for a product with a matching 'id' in three different arrays.
  * The search order is 'zapatos' -> 'products' -> 'techproducts'.
  * If found, assigns the matching product to the 'product' variable.
  * If not found in any of the arrays, 'product' remains undefined.
  */
  const { id } = useParams(); // Extract the 'id' parameter from the URL.
  const productId = parseInt(id, 10); // Parse 'id' as an integer (base 10).

  const product =
    zapatos.find((zapato) => zapato.id === productId) || // Check 'zapatos' array.
    products.find((product) => product.id === productId) || // Check 'products' array.
    techproducts.find((product) => product.id === productId); // Check 'techproducts' array.



  const [snackbarOpen1, setSnackbarOpen1] = useState(false); // Display a message indicating that the product is already a favorite.
  const [snackbarOpen2, setSnackbarOpen2] = useState(false); // Display a success message indicating that the product was added to favorites.



  /**
  * Handles the functionality of adding a product to favorites.
  * - Retrieves the current list of favorites from local storage or initializes an empty array.
  * - Checks if the product is already in the favorites list.
  *   - If found, displays a message indicating that the product is already a favorite.
  *   - If not found, adds the product to the favorites list, updates local storage, and displays a success message.
  */
  const handleAddToFavorites = () => {
    // Get the current list of favorites from local storage or initialize an empty array.
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if the product is already in the list of favorites.
    if (favorites.some((fav) => fav.id === product.id)) {
      // If the product is already in the list, show an appropriate message.
      setSnackbarOpen1(true); // Display a message indicating that the product is already a favorite.
    } else {
      // If the product is not in the list, add it.
      favorites.push(product);

      // Save the updated list of favorites to local storage.
      localStorage.setItem('favorites', JSON.stringify(favorites));

      // Show a success message.
      setSnackbarOpen2(true); // Display a success message indicating that the product was added to favorites.
    }
  };


  //Part of Expand on false the acordion
  const [expand, setExpand] = React.useState(false);

  const toggleExpansion = () => {
    setExpand((prev) => !prev);
  };





  return (
    <>
      {/*Main Container*/}
      <Grid container justifyContent="center" display={'flex'} >

        {/*Sub Main Container - 80%, md 100%*/}
        <Grid container style={{ width: isMdDown ? '100%' : '80%', display: 'flex', margin: '0' }}>

          {/*Box Button Back and Route from product type*/}
          <Box sx={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', width: '100%' }}>
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
              {product.type} / {product.name}
            </Typography>
          </Box>



          {/*
          // Bootstrap Carousel for Product Images:
          // - This section sets up a Bootstrap carousel to display product images.
          // - It includes three carousel items for different product images.
          // - Indicators and navigation buttons allow users to navigate between images.
          */}
          <Grid item xs={12} md={6}>
            <div className="container">
              <div className="row d-flex justify-content-center mt-5">
                <div className="col-md-12">
                  <div
                    id="myCarousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    align="center"
                  >
                    <div className="carousel-inner" style={{ width: '100%' }}>
                      {/* Carousel Item 1 (Active) */}
                      <div className="carousel-item active">
                        <img
                          src={product.image}
                          className="rounded"
                          style={{ width: '100%', height: 'auto' }}
                          loading="lazy"
                        />
                      </div>
                      {/* Carousel Item 2 */}
                      <div className="carousel-item">
                        <img
                          src={product.image2}
                          className="rounded"
                          style={{ width: '100%', height: 'auto' }}
                          loading="lazy"
                        />
                      </div>
                      {/* Carousel Item 3 */}
                      <div className="carousel-item">
                        <img
                          src={product.image3}
                          className="rounded"
                          style={{ width: '100%', height: 'auto' }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    {/* Carousel Indicators */}
                    <ol
                      className="carousel-indicators list-inline"
                      style={{ position: 'static', marginTop: '0px' }}
                    >
                      {/* Indicator 1 (Active) */}
                      <li
                        className="list-inline-item active"
                        style={{ width: '100px' }}
                      >
                        <a
                          id="carousel-selector-0"
                          className="selected"
                          data-bs-slide-to="0"
                          data-bs-target="#myCarousel"
                        >
                          <img
                            src={product.image}
                            className="img-fluid rounded"
                            style={{ display: 'block' }}
                            loading="lazy"
                          />
                        </a>
                      </li>
                      {/* Indicator 2 */}
                      <li className="list-inline-item" style={{ width: '100px' }}>
                        <a
                          id="carousel-selector-1"
                          data-bs-slide-to="1"
                          data-bs-target="#myCarousel"
                        >
                          <img
                            src={product.image2}
                            className="img-fluid rounded"
                            style={{ display: 'block' }}
                            loading="lazy"
                          />
                        </a>
                      </li>
                      {/* Indicator 3 */}
                      <li className="list-inline-item" style={{ width: '100px' }}>
                        <a
                          id="carousel-selector-2"
                          data-bs-slide-to="2"
                          data-bs-target="#myCarousel"
                        >
                          <img
                            src={product.image3}
                            className="img-fluid rounded"
                            style={{ display: 'block' }}
                            loading="lazy"
                          />
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </Grid>


          {/*Right container - info pruduct */}
          <Grid item xs={12} md={6} mt={5} paddingLeft={5} paddingRight={5}>
            <Grid container direction="column">
              <Grid item>
                <Typography sx={{ fontWeight: '600', fontSize: '2rem' }}>{product.name}</Typography>
                <Typography sx={{ fontSize: '1.3rem', fontWeight: '500', color: '#757575' }}>{product.brand}</Typography>
                <Box sx={{ display: 'flex', textAlign: 'end', alignSelf: 'flex-end' }} >
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: '700', color: 'black' }}>${product.price}</Typography>
                  <Box sx={{ alignSelf: 'center', marginLeft: '1REM' }}>
                    <Typography sx={{ fontSize: '1.1rem', fontWeight: '700', color: '#9e3500', textDecoration: 'line-through' }}> {product.offert}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item mt={2} >
                <Typography fontSize={'1.2rem'}>{product.description}</Typography>
                <Typography fontSize={'1.2rem'} mt={3} mb={1} fontWeight={'700'}>Colores disponbles:</Typography>
                {/*Mapping colors products*/}
                {product.availableColors && (
                  <div style={{ marginBottom: '1rem' }}>
                    {product.availableColors.map((color) => (
                      <span
                        key={color}
                        style={{
                          backgroundColor: color,
                          height: '25px',
                          width: '25px',
                          borderRadius: '50%',
                          display: 'inline-block',
                          margin: '2px',
                          border: '2px solid black',
                        }}
                      />
                    ))}
                  </div>
                )}

                {/*Box with buttons*/}
                <Box textAlign={'center'} mt={3} mb={5}>
                  {/*Button for favorite product*/}
                  <Button
                    endIcon={<FavoriteBorderIcon />}
                    onClick={handleAddToFavorites}
                    sx={{
                      height: '3.7rem',
                      width: '80%',
                      border: '1px solid black',
                      borderRadius: '30px',
                      backgroundColor: 'black',
                      color: 'white',
                      fontWeight: '600',
                      fontSize: '1rem',
                      '&:hover': {
                        backgroundColor: 'white',
                        border: '1px solid black',
                        color: 'black'
                      },
                    }}
                  >
                    Agregar a favoritos
                  </Button>

                  <Button endIcon={<WorkOutlineIcon />} sx={{
                    height: '3.7rem', width: '80%', border: '1px solid black', borderRadius: '30px', backgroundColor: 'black', color: 'white', fontWeight: '600', fontSize: '1rem', marginTop: '1rem',
                    '&:hover': {
                      backgroundColor: 'white',
                      border: '1px solid black',
                      color: 'black'
                    },
                  }}
                  >
                    COMPRAR
                  </Button>
                </Box>
              </Grid>

              {/*Container acordions*/}
              <Grid item>
                <Accordion sx={{ boxShadow: 'none', backgroundColor: 'white', borderLeft: 'none', borderRight: 'none', borderTop: '1px solid gray', borderBottom: '1px solid gray', borderRadius: '0' }}>
                  <AccordionSummary expandIcon={<ExpandMore sx={{ color: 'black' }} />}>
                    <Typography variant="h6" sx={{ color: 'black', fontWeight: '600' }}>Detalles y materiales</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" sx={{ color: 'black', fontWeight: '500' }}>{product.detalles}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>

            </Grid>
          </Grid>


          <Divider sx={{ width: '100%', border: '1px solid #000000', opacity: '99', marginBottom: '1rem' }} />


          <Typography sx={{ fontSize: '2rem', fontWeight: '700', color: 'black', textAlign: 'center', margin: '0 auto', marginTop: '0' }}>Ejemplos del producto</Typography>

          {/*Container img*/}
          <Grid container>
            <Grid item xs={6} md={6} sx={{ padding: '10px' }}>
              <img src={product.image4} alt="" style={{ width: '100%', height: '100%' }} loading="lazy" />
            </Grid>
            <Grid item xs={6} md={6} sx={{ padding: '10px' }}>
              <img src={product.image5} alt="" style={{ width: '100%', height: '100%' }} loading="lazy" />
            </Grid>
          </Grid>

          {/*Container Carousel*/}
          <Grid container>
            <Grid item xs={12}>
              <Box textAlign={'center'} mt={2} mb={3}>
                <Typography sx={{ fontSize: '2rem', fontWeight: '700', color: 'black', }}>Productos Recomendados</Typography>
              </Box>
              <AliceCarousel
                disableDotsControls
                disableButtonsControls={false}
                mouseTrackingEnabled={false}
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
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
          </Grid> 
        </Grid> 
      </Grid>




      
      {/*Snacbar 1  Display a message indicating that the product is already a favorite.*/}
      <Snackbar
        open={snackbarOpen1}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen1(false)}
        anchorOrigin={{ vertical: "center", horizontal: "center" }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            color: "red",
            border: "2px solid red",
            fontSize: ".9rem"
          }}
          message={
            <span>
              <BsFillExclamationTriangleFill /> Este producto ya esta en tu lista de favoritos
            </span>
          }
        />
      </Snackbar>

      {/*Snacbar 2 Display a success message indicating that the product was added to favorites.*/}
      <Snackbar
        open={snackbarOpen2}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen2(false)}
        anchorOrigin={{ vertical: "center", horizontal: "center" }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            color: "green",
            border: "1px solid green",
            fontSize: ".9rem"
          }}
          message={
            <span>
              <BsCheck2All /> Producto agregado a tu lista de favoritos
            </span>
          }
        />
      </Snackbar>
    </>
  )
} 