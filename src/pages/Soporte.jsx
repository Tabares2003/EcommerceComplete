import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { MdClose } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { TbTruckReturn } from 'react-icons/tb'
import { GiReceiveMoney } from 'react-icons/gi'
import { MdOutlineLocalPolice } from 'react-icons/md'
import { GiClothes } from 'react-icons/gi'
import { MdOutlinePublishedWithChanges } from 'react-icons/md'
import { MdOutlineLocationOn } from 'react-icons/md'
import { SlScreenSmartphone } from 'react-icons/sl'
import { TfiLocationPin } from 'react-icons/tfi'
import { BsTelephone } from 'react-icons/bs'

export default function Soporte() {



    //Consts measured, 80% and in md 100%.
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));



    /**
   * State variable to manage the opening and closing of a specific dialog.
   * @type {number|null}
   */
    const [openDialog, setOpenDialog] = useState(null);

    /**
     * Opens a specific dialog based on the provided `dialogIndex`.
     * @param {number} dialogIndex - The index of the dialog to open.
     */
    const handleOpenDialog = (dialogIndex) => {
        setOpenDialog(dialogIndex);
    };

    /**
     * Closes the currently open dialog.
     */
    const handleCloseDialog = () => {
        setOpenDialog(null);
    };

    /**
     * State variable to manage the opening and closing of a general dialog.
     * @type {boolean}
     */
    const [open, setOpen] = useState(false);

    /**
     * Opens the general dialog.
     */
    const handleClickOpen = () => {
        setOpen(true);
    };

    /**
     * Closes the general dialog.
     */
    const handleClose = () => {
        setOpen(false);
    };


    /*Data buttons dialog */
    const buttonsData = [
        {
            icon: <TbTruckDelivery style={{ fontSize: '4rem', marginBottom: '1rem', marginTop: '1rem' }} />,
            text: 'ENTREGAS',
            dialogTitle: '¿Cuanto tardará en llegar mi pedido?',
            dialogContent: <Typography> Desde el momento que tú confirmas tu pedido por whatsapp y el pago haya sido efectuado, nosotros de inmediato nos contactamos con nuestros proveedores en china.  <br /> <br />A partir de este momento ellos empiezan con la preparacíon de tu producto y está llegando a Colombia aproximadamente a los 28 días, desde este momento nosotros organizamos el envío de 1 a 3 días, por lo que se tardaría aproximadamente 31 días en llegarte.</Typography>,
            rightIcon: <TbTruckDelivery style={{ fontSize: '1.5rem' }} />,
        },
        {
            icon: <AiOutlineCreditCard style={{ fontSize: '4rem', marginBottom: '1rem', marginTop: '1rem' }} />,
            text: 'PAGOS',
            dialogTitle: 'Pagos',
            dialogContent: <Typography> En nuestra tienda en línea, ofrecemos cuatro opciones de pago para tu comodidad: Coontraentrega, Nequi, Daviplata, Bancolombia. <br /> <br />una vez que hayas realizado un pedido, no podrás cambiar el método de pago. Te recomendamos revisar cuidadosamente tus opciones de pago antes de finalizar tu compra para asegurarte de seleccionar la opción que mejor se adapte a tus necesidades.</Typography>,
            rightIcon: <AiOutlineCreditCard style={{ fontSize: '1.5rem' }} />,
        },
        {
            icon: <TbTruckReturn style={{ fontSize: '4rem', marginBottom: '1rem', marginTop: '1rem' }} />,
            text: 'DEVOLUCIONES',
            dialogTitle: '¿Hacemos devoluciones?',
            dialogContent: <Typography>Entendemos que en ocasiones puedan surgir problemas. Estamos comprometidos a garantizar tu satisfacción con tus compras y a brindarte una experiencia de compra sin preocupaciones. <br /> <br />Respaldamos nuestros productos tecnológicos con una garantía de 6 meses. Esta garantía cubre defectos de fabricación y te brinda tranquilidad al realizar tu compra.<br /> <br />En productos de ropa Si recibes un producto con defectos de fabricación o alguna imperfección, estamos aquí para ayudarte.</Typography>,
            rightIcon: <TbTruckReturn style={{ fontSize: '1.5rem' }} />,
        },
        {
            icon: <GiReceiveMoney style={{ fontSize: '4rem', marginBottom: '1rem', marginTop: '1rem' }} />,
            text: 'REEMBOLSOS',
            dialogTitle: '¿Hacemos reembolsos?',
            dialogContent: <Typography> Estamos comprometidos a ofrecer productos de alta calidad y servicio al cliente excepcional. Sin embargo, queremos informarte que nuestra política de reembolso para productos tecnológicos es la siguiente: <br /> <br />Lamentablemente, no ofrecemos reembolsos completos para productos tecnológicos. En cambio, proporcionamos un reembolso del 50% del precio de compra original en caso de que desees devolver un producto tecnológico dentro del período de garantía especificado. </Typography>,
            rightIcon: <GiReceiveMoney style={{ fontSize: '1.5rem' }} />,
        },
        {
            icon: <MdOutlineLocalPolice style={{ fontSize: '4rem', marginBottom: '1rem', marginTop: '1rem' }} />,
            text: 'PRIVACIDAD',
            dialogTitle: 'Politica de privacidad',
            dialogContent: <Typography>No recopilamos datos personales a través de nuestro sitio web. Utilizamos WhatsApp como nuestra principal plataforma de comunicación para atender tus consultas y procesar tus pedidos. Tu información compartida a través de WhatsApp se manejará de manera confidencial y solo se utilizará con fines relacionados con tu pedido y servicio al cliente. No compartiremos tu información con terceros sin tu consentimiento. Si tienes alguna pregunta o inquietud sobre la privacidad, no dudes en contactarnos a través de WhatsApp. Estamos aquí para ayudarte. <br /> <br />Este mensaje refleja de manera concisa que no se recopilan datos personales a través del sitio web y que WhatsApp es la principal plataforma de comunicación. </Typography>,
            rightIcon: <MdOutlineLocalPolice style={{ fontSize: '1.5rem' }} />,
        },
        {
            icon: <GiClothes style={{ fontSize: '4rem', marginBottom: '1rem', marginTop: '1rem' }} />,
            text: 'TALLAS',
            dialogTitle: '¿Que tallas tenemos?',
            dialogContent: <Typography>Ofrecemos una variedad de tallas en nuestros productos para garantizar que encuentres el ajuste adecuado. <br /> <br />Camisas:<br /><br /> <ul> <li>Talla M</li><li>Talla L</li><li>Talla XL</li></ul> <br />Tenis:<br /><br /> Tallas disponibles: Desde 36 hasta 42</Typography>,
            rightIcon: <GiClothes style={{ fontSize: '1.5rem' }} />,
        },
        {
            icon: <MdOutlinePublishedWithChanges style={{ fontSize: '4rem', marginBottom: '1rem', marginTop: '1rem' }} />,
            text: 'CAMBIOS',
            dialogTitle: '¿Hacemos cambios?',
            dialogContent: <Typography>Solo aceptamos cambios para productos que presenten defectos de fabricación. Para solicitar un cambio, comunícate con nuestro equipo de atención al cliente dentro de 1 día posterior a la recepción de tu pedido. <br /> <br />Nuestra prioridad es resolver cualquier problema que puedas enfrentar y garantizar tu satisfacción. Si tienes alguna pregunta adicional sobre nuestra política de cambios o necesitas iniciar un proceso de cambio, no dudes en contactarnos. Estamos aquí para brindarte la mejor experiencia de compra posible.</Typography>,
            rightIcon: <MdOutlinePublishedWithChanges style={{ fontSize: '1.5rem' }} />,
        },
        {
            icon: <MdOutlineLocationOn style={{ fontSize: '4rem', marginBottom: '1rem', marginTop: '1rem' }} />,
            text: 'UBICACIÓN',
            dialogTitle: '¿Donde nos ubicamos?',
            dialogContent: <Typography>Somos una tienda colombiana que se enorgullece de brindar productos de alta calidad. Trabajamos en colaboración con proveedores ubicados en China para ofrecerte una amplia variedad de productos a precios competitivos. Debido a la ubicación de nuestros proveedores, los tiempos de envío pueden ser más largos, generalmente entre 30 y 45 días. Estamos comprometidos a proporcionarte una experiencia de compra satisfactoria y transparente, y nuestro equipo de atención al cliente está disponible para responder a tus preguntas y necesidades. Agradecemos tu confianza. <br /> <br />Nuestra prioridad es resolver cualquier problema que puedas enfrentar y garantizar tu satisfacción. Si tienes alguna pregunta adicional sobre nuestra política de cambios o necesitas iniciar un proceso de cambio, no dudes en contactarnos. Estamos aquí para brindarte la mejor experiencia de compra posible.</Typography>,
            rightIcon: <MdOutlineLocationOn style={{ fontSize: '1.5rem' }} />,
        },
    ];



    return (
        <>
            {/*Main Container*/}
            <Grid container justifyContent="center">

                {/*Sub Main Container - 80%, md 100%*/}
                <Grid container style={{ width: isMdDown ? '100%' : '70%', display: 'flex', margin: '0' }}>

                    {/*Box Button Back and Route*/}
                    <Box sx={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center' }}>
                        <Link to="/" >
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
                            Home / Soporte
                        </Typography>
                    </Box>


                    {/*Container top and container with button filters*/}
                    <Grid container sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
                        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                            {/* Contenido del primer subcontenedor */}
                            <Typography sx={{ fontWeight: '700', fontSize: '1.5rem', color: 'black' }}>
                                SOPORTE Y PREGUNTAS FRECUENTES
                            </Typography>
                        </Grid>
                    </Grid>

                    {/*Container ButtonsDialog */}
                    <Grid container spacing={2}>
                        {/* Mapping through ButtonsData */}
                        {buttonsData.map((buttonData, index) => (
                            <Grid item xs={6} sm={3}>
                                <Box sx={{ bgcolor: 'grey.300', p: '1.5rem', width: 'auto', margin: '0 auto', marginTop: '1.5rem' }}>
                                    {/* Button component */}
                                    <Button
                                        sx={{
                                            border: '2px solid black',
                                            borderRadius: '0',
                                            backgroundColor: 'black',
                                            color: 'white',
                                            fontWeight: '800',
                                            fontFamily: 'Segoe UI',
                                            '&:hover': {
                                                backgroundColor: 'white',
                                                color: 'black',
                                            },
                                        }}
                                        onClick={() => handleOpenDialog(index)}
                                        fullWidth
                                    >
                                        {/* Stack for icon and text */}
                                        <Stack spacing={1} sx={{ alignItems: 'center', marginBottom: '1rem', fontSize: '1rem', width: 'auto' }}>
                                            {/* Icon component */}
                                            {buttonData.icon}
                                            {/* Text */}
                                            {buttonData.text}
                                        </Stack>
                                    </Button>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>


                    {/*2nd part of page */}
                    <Grid container sx={{ marginTop: '2rem', marginBottom: '1rem' }}>
                        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                            {/* Contenido del primer subcontenedor */}
                            <Typography sx={{ fontWeight: '700', fontSize: '1.5rem', color: 'black', marginBottom: '1rem' }}>
                                CONTACTANOS
                            </Typography>
                        </Grid>

                        {/*Part of ContactMe */}
                        <Grid item xs={12} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Grid item xs={4} sx={{ textAlign: 'center' }}>
                                <IconButton sx={{
                                    fill: 'white', color: 'black',  
                                }}>
                                    <SlScreenSmartphone style={{ height: '3.8rem', width: '3.8rem' }} />
                                </IconButton>
                                <Typography sx={{ fontWeight: '700', fontSize: '1.3rem', color: 'black' }}>
                                    # 300 2839232
                                </Typography>
                                <Typography sx={{ fontWeight: '700', fontSize: '1.2rem', color: 'black' }}>
                                    Lun - Vie
                                </Typography>
                                <Typography sx={{ fontWeight: '700', fontSize: '1.2rem', color: 'black' }}>
                                    8am - 8pm
                                </Typography>
                            </Grid>

                            <Grid item xs={4} sx={{ textAlign: 'center' }}>
                                <IconButton sx={{
                                    fill: 'white', color: 'black' 
                                }}>
                                    <TfiLocationPin style={{ height: '3.8rem', width: '3.8rem' }} />
                                </IconButton>
                                <Typography sx={{ fontWeight: '700', fontSize: '1.2rem', color: 'black' }}>
                                    Medellín, Colombia
                                </Typography>
                            </Grid>

                            <Grid item xs={4} sx={{ textAlign: 'center' }}>
                                <IconButton sx={{
                                    fill: 'white', color: 'black' 
                                }}>
                                    <BsTelephone style={{ height: '3.8rem', width: '3.8rem' }} />
                                </IconButton>
                                <Typography sx={{ fontWeight: '700', fontSize: '1.3rem', color: 'black' }}>
                                    # 303209293
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>







            {buttonsData.map((buttonData, index) => (
                <Dialog
                    open={openDialog === index}
                    onClose={handleCloseDialog}
                    sx={{
                        '& .MuiDialog-paper': {
                            width: '80%',
                            height: 'auto',
                            borderRadius: '0'
                        },
                    }}
                >
                    <DialogTitle sx={{ fontWeight: '800', marginRight: '1rem' }}>
                        {/* Dialog Title */}
                        {buttonData.dialogTitle}
                        {/* Close Button */}
                        <IconButton
                            onClick={handleCloseDialog}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                marginLeft: '1rem',
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: 'black',
                                    color: 'white'
                                },
                            }}
                        >
                            <MdClose />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        {/* Dialog Content */}
                        <Divider sx={{ border: '1px solid black', marginBottom: '1rem', marginTop: '0', opacity: '99' }} />
                        {buttonData.dialogContent}
                        <Divider sx={{ border: '1px solid black', marginBottom: '1rem', marginTop: '2rem', opacity: '99' }} />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {/* Right Icon or Additional Content */}
                            {buttonData.rightIcon}
                        </Box>
                    </DialogContent>
                </Dialog>
            ))}




        </>
    )
}
