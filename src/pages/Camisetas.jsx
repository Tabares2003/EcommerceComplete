import { Box, Grid, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Collapse, Divider } from "@mui/material";
import products from '../data/NCamisetas'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom';
import TuneIcon from '@mui/icons-material/Tune';
import React, { useState } from "react";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useMediaQuery, useTheme } from '@mui/material';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { SiNike } from 'react-icons/si';
import { CgAdidas } from 'react-icons/cg'
import { SiPuma } from 'react-icons/si'
import deneus from '../assets/CamisetasAPI/deneus.png'
import { RiSubtractFill } from 'react-icons/ri'
import { RiAddLine } from 'react-icons/ri'
import 'react-alice-carousel/lib/alice-carousel.css';
import 'react-alice-carousel/lib/alice-carousel.css'
import { PiBag } from "react-icons/pi"
import AliceCarousel from "react-alice-carousel";



export default function Camisetas() {



    //Consts measured carousel
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };



    //Items Finals carousel
    const items = [
        <div
            className="item"
            data-value="1"
            style={{ margin: '.5rem', position: 'relative' }}
        >
            <a
                href="https://www.youtube.com/watch?v=2MqbjHzCcpo&t=15s&ab_channel=ConsejosImagen"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
            >
                <img src={'https://i.postimg.cc/fyJNmPDM/cuidarzapatos.webp'} alt="your image" style={{ width: '100%', height: '100%', }} loading="lazy" />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80', marginTop: '1rem' }}>Cuidado del producto</span>
                        <span style={{ fontSize: '1rem', fontWeight: '700', color: 'black' }}>Como limpiar tus tenis correctamente</span>
                    </span>
                </div>

            </a>
        </div>
        ,

        <div
            className="item"
            data-value="2"
            style={{ margin: '.5rem', position: 'relative' }}
        >
            <a
                href="https://www.youtube.com/watch?v=ZRKv5atuGFw&ab_channel=yayitscindy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
            >
                <img src={'https://i.postimg.cc/pXMhYNp0/airpodsmaxreview.webp'} alt="your image" style={{ width: '100%', height: '100%', }} loading="lazy" />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80', marginTop: '1rem' }}>Video Unboxing</span>
                        <span style={{ fontSize: '1rem', fontWeight: '700', color: 'black' }}>Review Airpods Max</span>
                    </span>
                </div>

            </a>
        </div>
        ,
        <div
            className="item"
            data-value="3"
            style={{ margin: '.5rem', position: 'relative' }}
        >
            <a
                href="https://www.youtube.com/watch?v=7Q5C4LT8JM8&t=40s&ab_channel=futbolmania"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
            >
                <img src={'https://i.postimg.cc/cHSFYkyP/Review-Home.webp'} alt="your image" style={{ width: '100%', height: '100%', }} loading="lazy" />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80', marginTop: '1rem' }}>Video Review</span>
                        <span style={{ fontSize: '1rem', fontWeight: '700', color: 'black' }}>Review Camiseta City Local 23/24</span>
                    </span>
                </div>

            </a>
        </div>
        ,
        <div
            className="item"
            data-value="3"
            style={{ margin: '.5rem', position: 'relative' }}
        >
            <a
                href="https://www.youtube.com/watch?v=KRvQ_nPa118&ab_channel=LorenzWiedenmann"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
            >
                <img src={'https://i.postimg.cc/QMFyxFGC/yeezyreview.webp'} alt="your image" style={{ width: '100%', height: '100%', }} loading="lazy" />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80', marginTop: '1rem' }}>Video Review</span>
                        <span style={{ fontSize: '1rem', fontWeight: '700', color: 'black' }}>Review Adidas Yeezy 700</span>
                    </span>
                </div>

            </a>
        </div>
        ,
    ];



    //Consts measured, 80% and in md 100%.
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));



    //TOGGLE programming of filters
    const [state, setState] = useState({
        right: false,
    });



    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };



    /**
    * Generates a list of filter buttons for the right-side drawer.
    * @param {string} anchor - The anchor position of the drawer.
    */
    const list = (anchor) => (
        <List>
            {/* Button for sorting products by ascending price */}
            <ListItem sx={{ height: '4rem' }} button onClick={() => handleSort('asc')}>
                <ListItemText primary="Menor a mayor precio" />
                <RiSubtractFill />
            </ListItem>
            <Divider />

            {/* Button for sorting products by descending price */}
            <ListItem sx={{ height: '4rem' }} button onClick={() => handleSort('desc')}>
                <ListItemText primary="Mayor a menor precio" />
                <RiAddLine />
            </ListItem>
            <Divider />

            {/* Button for filtering products on promotion */}
            <ListItem sx={{ height: '4rem' }} button onClick={handlePromotionSelect}>
                <ListItemText primary="En promoción" />
                <PiBag />
            </ListItem>
            <Divider />

            {/* Button for toggling brand filters */}
            <ListItem sx={{ height: '4rem' }} button onClick={handleClick}>
                <ListItemText primary="Filtrar por marca" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Divider />

            {/* Brand filter options */}
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {/* Button for selecting Nike brand */}
                    <ListItem sx={{ height: '4rem' }} button onClick={() => handleBrandSelect('Nike')}>
                        <ListItemText primary="Nike" />
                        <SiNike />
                    </ListItem>
                    <Divider />

                    {/* Button for selecting Adidas brand */}
                    <ListItem sx={{ height: '4rem' }} button onClick={() => handleBrandSelect('Adidas')}>
                        <ListItemText primary="Adidas" />
                        <CgAdidas />
                    </ListItem>

                    {/* Button for selecting Puma brand */}
                    <ListItem sx={{ height: '4rem' }} button onClick={() => handleBrandSelect('Puma')}>
                        <ListItemText primary="Puma" />
                        <SiPuma />
                    </ListItem>

                    {/* Button for selecting Duneus brand */}
                    <ListItem sx={{ height: '4rem' }} button onClick={() => handleBrandSelect('Duneus')}>
                        <ListItemText primary="Duneus" />
                        <img src={deneus} alt="" style={{ width: '19px', height: '19px' }} loading="lazy" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );



    /**
    *Toggles the visibility of the right-side drawer (filter panel).
    *@param {string} anchor - The anchor position of the drawer (e.g., "right").
    * @param {boolean} open - Whether to open or close the drawer.
    * @returns {function} - Event handler function.
    */
    const toggleDrawer = (anchor, open) => (event) => {
        // Check if the event is a keydown event and if Tab or Shift keys are pressed.
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        // Update the component's state to open or close the specified drawer.
        setState({ ...state, [anchor]: open });
    };



    // Define a state variable to store the selected brand for filtering.
    const [selectedBrand, setSelectedBrand] = useState(null);
    /**
     * Handles the selection of a brand for filtering.
     * @param {string} brand - The selected brand name (e.g., "Nike", "Adidas").
     */
    const handleBrandSelect = (brand) => {
        // Update the selectedBrand state with the chosen brand.
        setSelectedBrand(brand);
    };



    // Define a state variable to track whether products on promotion are selected.
    const [selectedPromotion, setSelectedPromotion] = useState(false);
    /**
     * Handles the selection of products on promotion.
     * Toggles the selectedPromotion state between true and false.
     */
    const handlePromotionSelect = () => {
        // Toggle the selectedPromotion state between true and false.
        setSelectedPromotion(!selectedPromotion);
    };



    // Filter products based on selected criteria such as brand and promotion status.
    const filteredProducts = products.filter((product) =>
        // Check if a brand filter is selected, and if so, filter by brand.
        selectedBrand ? product.brand === selectedBrand : true &&
            // Check if a promotion filter is selected, and if so, filter by promotion status.
            (selectedPromotion ? product.offert : true)
    );



    // Filter Order price - Define a state variable to manage the sorting order.
    const [sortOrder, setSortOrder] = useState(null);
    /**
     * Handles the sorting of products based on the specified order.
     * @param {string} order - The sorting order ("asc" for ascending, "desc" for descending).
     */
    const handleSort = (order) => {
        // Update the sortOrder state based on the specified order.
        setSortOrder(order);
    };



    // Create a new array of products, sorted based on the selected sorting order.
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price - b.price;
        } else if (sortOrder === 'desc') {
            return b.price - a.price;
        } else {
            return 0; // If sortOrder is not defined or incorrect, maintain the original order.
        }
    });


    {/*final Buttons*/ }
    const buttons = [
        { name: 'Airpods Max En super precio', link: '/producto/201' },
        { name: 'Tenis Nike Strange Love!', link: '/producto/101' },
        { name: 'Tenis Air Force 1 originales', link: '/producto/102' },
        { name: 'Nuevos New Balance 550 black hombre y mujer', link: '/producto/117' },
        { name: 'Air Zoom Spiridon Cage 2 x Stussy Hombre', link: '/producto/106' },
        { name: 'tenis Adidas Yeezy 350 v2 negros', link: '/producto/108' },
        { name: 'Tenis Nike Spiderman Rojos', link: '/producto/110' },
        { name: 'Airpods 2 originales', link: '/producto/203' },
    ];



    return (
        <>
            {/*Main Container*/}
            <Grid container justifyContent="center">

                {/*Sub Main Container - 80%, md 100%*/}
                <Grid container style={{ width: isMdDown ? '100%' : '80%', display: 'flex', margin: '0' }}>

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
                            Home / Camisetas
                        </Typography>
                    </Box>

                    {/*Container top and container with button filters*/}
                    <Grid container sx={{ marginTop: '1rem', marginBottom: '2rem' }}>

                        {/*Container title page and # products*/}
                        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: '700', fontSize: '2rem', color: 'black' }}>
                                CAMISETAS
                            </Typography>
                            <Typography mt={'13px'} sx={{ fontWeight: '400', fontSize: '13px' }}>[{products.length}]</Typography>
                        </Grid>

                        {/*Container BUTTON FILTER end*/}
                        <Grid item xs={6} container justifyContent="flex-end">
                            <React.Fragment key={"right"}>
                                <Button
                                    // Styling for the toggle button
                                    sx={{
                                        border: '1px solid black',
                                        borderRadius: '0',
                                        color: 'black',
                                        fontWeight: '600',
                                        '&:hover': {
                                            backgroundColor: 'black',
                                            color: 'white',
                                            '& .MuiSvgIcon-root': {
                                                color: 'white',
                                            },
                                        },
                                    }}
                                    // The TuneIcon is used as the end icon of the button.
                                    endIcon={<TuneIcon />}
                                    // When clicked, it triggers the toggleDrawer function to open the right-side drawer.
                                    onClick={toggleDrawer("right", true)}
                                >
                                    FILTRAR
                                </Button>

                                <Drawer

                                    anchor={"right"} // Sets the position of the drawer to the right side of the screen.
                                    open={state["right"]} // Controls the visibility of the drawer based on state.
                                    onClose={toggleDrawer("right", false)} // Closes the drawer when clicked outside or pressing Escape.
                                    PaperProps={{ style: { width: 300 } }} // Defines the styling for the drawer, setting its width to 300 pixels.
                                >
                                    {list("right")} {/*Renders the content of the drawer using the 'list' function.*/}
                                </Drawer>

                            </React.Fragment>
                        </Grid>
                    </Grid>

                    {/*Container Products */}
                    <Grid container>
                        {/* Mapping through sorted products */}
                        {sortedProducts.map(product => (
                            <Grid item xs={6} sm={4} md={3} key={product.id}>
                                {/* Link to product details page */}
                                <Link to={`/producto/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {/* Individual product item */}
                                    <div
                                        className="item"
                                        style={{
                                            position: 'relative',
                                            padding: '3px',
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.border = '1px solid black')}
                                        onMouseLeave={(e) => (e.currentTarget.style.border = '1px solid transparent')}
                                    >
                                        {/* Product image */}
                                        <img
                                            src={product.image2}
                                            alt={product.name}
                                            style={{ width: '100%', height: 'auto' }}
                                            loading="lazy"
                                        />
                                        {/* Product information */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            {/* Product name and brand */}
                                            <span style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span style={{ fontSize: '1rem', fontWeight: '500' }}>
                                                    {product.name}
                                                </span>
                                                <span
                                                    style={{
                                                        fontSize: '.9rem',
                                                        fontWeight: '500',
                                                        color: '#767a80',
                                                    }}
                                                >
                                                    {product.brand}
                                                </span>
                                            </span>
                                            {/* Product price and offer */}
                                            <span style={{ display: 'flex', flexDirection: 'column', textAlign: 'end' }}>
                                                <span
                                                    style={{
                                                        fontSize: '1rem',
                                                        fontWeight: '500',
                                                        color: 'black',
                                                    }}
                                                >
                                                    ${product.price}
                                                </span>
                                                <span
                                                    style={{
                                                        fontSize: '.8rem',
                                                        fontWeight: '700',
                                                        color: '#9e3500',
                                                        textDecoration: 'line-through '
                                                    }}
                                                >
                                                    {product.offert}
                                                </span>
                                            </span>
                                        </div>
                                        {/* Zoom-in button */}
                                        <IconButton
                                            component={ZoomInIcon}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                padding: '0.5rem',
                                                fontSize: '2.3rem',
                                                fill: 'black',
                                            }}
                                        />
                                    </div>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>


                    <Divider sx={{ width: '100%', border: '1px solid #000000', marginBottom: '2rem', marginTop: '2.3rem' }} />

                    {/*Container another products from BUTTONS */}
                    <Grid sx={{ width: '100%' }}>
                        <Typography mt={'13px'} sx={{ fontWeight: '500', fontSize: '1.2rem' }}>Productos que te pueden interesar</Typography>
                        <Grid sx={{ width: '100%', marginTop: '1.7rem', display: 'flex', flexWrap: 'wrap', marginBottom: '3rem', justifyContent: 'center' }}>
                            {buttons.map((button) => (
                                <Box key={button.link} sx={{ marginTop: '.6rem' }}>
                                    <Button
                                        component={Link}
                                        to={button.link}
                                        sx={{
                                            border: '2px solid #bfbfbf',
                                            borderRadius: '50px',
                                            color: 'black',
                                            fontWeight: '400',
                                            width: 'auto',
                                            paddingLeft: '2rem',
                                            paddingRight: '2rem',
                                            height: 'auto',
                                            fontSize: '12px',
                                            marginRight: '1rem',
                                        }}
                                    >
                                        {button.name}
                                    </Button>
                                </Box>
                            ))}
                        </Grid>
                    </Grid>


                    <Typography mt={'13px'} mb={'2.3rem'} sx={{ fontWeight: '500', fontSize: '1.2rem' }}>Videos que te pueden interesar!</Typography>

                    {/*Carousel */}
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

                    {/*information add*/}
                    <Grid sx={{ width: '100%', }}>
                        <Typography mt={'13px'} mb={'2.3rem'} sx={{ fontWeight: '600', fontSize: '1.2rem' }}>Información adicional de los productos</Typography>
                        <Typography mt={'13px'} mb={'1rem'} sx={{ fontWeight: '400', fontSize: '1rem' }}>¿Por qué nuestros precios son tan atractivos? La respuesta es simple: queremos ser transparentes contigo. Hemos optado por ofrecer opciones con tiempos de envío un poco más prolongados, lo que nos permite reducir costos y ofrecerte precios más competitivos en comparación con las tiendas tradicionales. Tu paciencia se verá recompensada con camisas auténticas a precios sorprendentes.</Typography>
                        <Typography mb={'1rem'} sx={{ fontWeight: '400', fontSize: '1rem' }}>Entendemos que la espera puede generar inquietud, pero creemos que la calidad y la originalidad valen la pena. Cada camisa que encuentras aquí ha sido seleccionada cuidadosamente para garantizar que cumplen con los más altos estándares de diseño y fabricación. Para brindarte opciones aún más variadas, también ofrecemos camisas retro de equipos de fútbol. Aunque estas no son originales, queremos asegurarte que su calidad es indiscutible y están respaldadas por nuestra garantía.</Typography>
                        <Typography mb={'2.3rem'} sx={{ fontWeight: '400', fontSize: '1rem' }}>Sabemos lo importante que es confiar en tus compras en línea, por lo que nos comprometemos a brindarte transparencia, calidad y opciones que se ajusten a tus gustos y preferencias. Explora nuestra colección de camisas auténticas y selecciona la que mejor refleje tu estilo. Tu satisfacción es nuestra prioridad, y estamos aquí para ayudarte en cada paso del camino.</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}