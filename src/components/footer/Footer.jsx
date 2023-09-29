import { Grid, Typography, Divider, Box, IconButton } from "@mui/material"
import iconPT from '../../assets/LogoPT.svg'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { Link } from "react-router-dom"

// This component renders the footer section of the website
export default function Footer() {
  return (
    <>
      {/* Container for the footer */}
      <Box bgcolor="black" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box bgcolor="black" color="white" display={'flex'} sx={{ width: '80%', flexDirection: 'column' }}>
          {/* Horizontal divider line */}
          <Divider sx={{ border: '1px solid white', marginBottom: '2rem', marginTop: '2.3rem' }} />

          {/* Grid container for footer content */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {/* Support section */}
            <Grid item xs={6} md={3} style={{ padding: '1rem' }}>
              <Typography style={{ margin: '0 0 10px 10px', fontWeight: '500', fontFamily: 'Segoe UI', fontWeight: '800', fontSize: '.9rem' }}>
                SOPORTE
              </Typography>

              {/* Links for support */}
              <Link to="/Soporte" style={{ textDecorationLine: 'none' }}>
                <Typography style={{ margin: '0 0 5px 10px', fontSize: '.9rem', fontFamily: 'Segoe UI', fontWeight: '700', color: 'white', }}>
                  Preguntas Frecuentes
                </Typography>
              </Link>
              <Typography style={{ margin: '0 0 5px 10px', fontSize: '.9rem', fontFamily: 'Segoe UI', fontWeight: '700', }}>
                Contáctanos
              </Typography>
            </Grid>

            {/* About Us section */}
            <Grid item xs={6} md={3} style={{ padding: '1rem' }}>
              <Typography style={{ margin: '0 0 10px 10px', fontWeight: '500', fontFamily: 'Segoe UI', fontWeight: '800', fontSize: '.9rem' }}>
                QUIENES SOMOS
              </Typography>
              <Link to="/Soporte" style={{ textDecorationLine: 'none' }}>
                <Typography style={{ margin: '0 0 5px 10px', fontSize: '.9rem', fontFamily: 'Segoe UI', fontWeight: '700', color: 'white' }}>
                  Quienes somos
                </Typography>
              </Link>
            </Grid>

            {/* Social Media section */}
            <Grid item xs={6} md={3} style={{ padding: '1rem' }}>
              <Typography style={{ margin: '0 0 10px 10px', fontWeight: '500', fontFamily: 'Segoe UI', fontWeight: '800', fontSize: '.9rem' }}>
                MIS REDES
              </Typography>

              {/* Links to LinkedIn and GitHub */}
              <Link to="https://www.linkedin.com/in/pablo-tabares-17483b231/" style={{ textDecorationLine: 'none' }}>
                <IconButton sx={{
                  fill: 'white', color: 'white', height: '41px', width: '41px', '&:hover': {
                    color: '#0a66c2',
                  },
                }}>
                  <AiFillLinkedin />
                </IconButton>
              </Link>
              <Link to="https://github.com/Tabares2003" style={{ textDecorationLine: 'none' }}>
                <IconButton sx={{
                  fill: 'white', color: 'white', height: '41px', width: '41px', '&:hover': {
                    color: 'gray',
                  },
                }}>
                  <AiFillGithub />
                </IconButton>
              </Link>
            </Grid>

            {/* Logo */}
            <Grid item xs={6} md={3} style={{ padding: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
            <Link to="/" style={{ textDecorationLine: 'none' }}>
              <img src={iconPT} alt="" style={{ width: '60px', height: '60px' }} />
              </Link>
            </Grid>
          </Box>

          {/* Horizontal divider line */}
          <Divider sx={{ border: '1px solid white', marginBottom: '1rem', marginTop: '2.3rem' }} />

          {/* Copyright notice */}
          <Typography style={{ fontSize: '.9rem', fontFamily: 'Segoe UI', fontWeight: '500', textAlign: 'center', color: 'gray', marginBottom: '1rem', }}>
            Todos los derechos reservados de las tiendas mencionadas. ©
          </Typography>
        </Box>
      </Box>
    </>
  )
}