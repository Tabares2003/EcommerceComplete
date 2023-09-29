import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { SiJordan } from 'react-icons/si'
import { SiNewbalance } from 'react-icons/si'
import { Typography } from '@mui/material';
import { CgAdidas } from 'react-icons/cg'

export default function NavListDrawer({ navLinks, NavLink, setOpen }) { //props
    return (
        <>
            {/* Drawer container */}
            <Box sx={{ width: 250, bgcolor: "white" }}>
                <nav aria-label="main mailbox folders">
                    {/* List of navigation links */}
                    <List sx={{ backgroundColor: 'white', marginBottom: '2rem' }}>
                        {navLinks.map(item => (
                            <ListItem disablePadding key={item.title} sx={{ backgroundColor: 'white' }}>
                                {/* Navigation link button */}
                                <ListItemButton
                                    component={NavLink}
                                    to={item.path}
                                    // When a link is clicked, close the drawer
                                    onClick={() => setOpen(false)}
                                    sx={{ borderBlockEnd: '1px solid gray', opacity: '1' }}
                                >
                                    <ListItemText>{item.title}</ListItemText>
                                    {/* Right arrow icon for indicating sub-items */}
                                    <BiChevronRight />
                                </ListItemButton>
                            </ListItem>
                        ))}



                        {/* Favorites link */}
                        <ListItem disablePadding sx={{ backgroundColor: 'white' }}>
                            {/* Support link button */}
                            <Link to="/favoritos" style={{ textDecoration: 'none', width: '100%' }}>
                                <ListItemButton
                                    // When the support link is clicked, close the drawer
                                    onClick={() => setOpen(false)}
                                    sx={{ borderBlockEnd: '1px solid gray', opacity: '1' }}
                                >
                                    <ListItemText sx={{ color: 'black' }}>Favoritos</ListItemText>
                                    {/* Right arrow icon for indicating sub-items */}
                                    <BiChevronRight style={{ fill: 'black' }} />
                                </ListItemButton>
                            </Link>
                        </ListItem>

                        {/* Support link */}
                        <ListItem disablePadding sx={{ backgroundColor: 'white' }}>
                            {/* Support link button */}
                            <Link to="/Soporte" style={{ textDecoration: 'none', width: '100%' }}>
                                <ListItemButton
                                    // When the support link is clicked, close the drawer
                                    onClick={() => setOpen(false)}
                                    sx={{ borderBlockEnd: '1px solid gray', opacity: '1' }}
                                >
                                    <ListItemText sx={{ color: 'black' }}>Soporte</ListItemText>
                                    {/* Right arrow icon for indicating sub-items */}
                                    <BiChevronRight style={{ fill: 'black' }} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    </List>


                    {/*Icons Decorations NavListDrawer */}
                    <ListItem disablePadding sx={{ backgroundColor: 'white' }}> 
                        <ListItemButton >
                            <SiNewbalance style={{ fill: 'black', marginRight: '5%', marginLeft: '5%', width: '25px', height: '25px' }} />
                            <Typography sx={{ fontSize: '1rem', fontWeight: '700', fontFamily: 'Segoe UI' }}>
                                New Balance
                            </Typography>
                        </ListItemButton> 
                    </ListItem>

                    <ListItem disablePadding sx={{ backgroundColor: 'white' }}> 
                        <ListItemButton >
                            <SiJordan style={{ fill: 'black', marginRight: '5%', marginLeft: '5%', width: '25px', height: '25px' }} />
                            <Typography sx={{ fontSize: '1rem', fontWeight: '700', fontFamily: 'Segoe UI' }}>
                                Jordan
                            </Typography>
                        </ListItemButton> 
                    </ListItem>

                    <ListItem disablePadding sx={{ backgroundColor: 'white' }}> 
                        <ListItemButton >
                            <CgAdidas style={{ fill: 'black', marginRight: '5%', marginLeft: '5%', width: '25px', height: '25px' }} />
                            <Typography sx={{ fontSize: '1rem', fontWeight: '700', fontFamily: 'Segoe UI' }}>
                                Yeezy's
                            </Typography>
                        </ListItemButton> 
                    </ListItem>
                </nav>
            </Box>
        </>
    )
}