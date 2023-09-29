import 'react-alice-carousel/lib/alice-carousel.css'
import { Box, Grid, Button, Container, Typography, Icon, IconButton } from '@mui/material'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Link } from 'react-router-dom'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function Home() {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };
    const items = [ //Items Nike Zapatos
        <div
            className="item"
            data-value="1"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/101`} style={{ textDecoration: 'none', }}>
                <img loading="lazy" src={'https://i.postimg.cc/pVzg3ctS/Strange-Love1.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>Dunk Strange Love</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>Nike</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$300.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>
        ,

        <div
            className="item"
            data-value="2"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/112`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/zfx2j6Sv/nikedunk1.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>Nike Dunk Low</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>Nike</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$230.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>,

        <div
            className="item"
            data-value="3"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/105`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/tTZbQbH6/nikextraviss1.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>Air Jordan 1 Low x Travis Scott</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>Nike</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$780.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>,


        <div
            className="item"
            data-value="4"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/113`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/15Yzk3mr/airmax901.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>Air Max 90 White Metallic Gold</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>Nike</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$450.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>,
        <div
            className="item"
            data-value="5"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/106`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/ht2fbVbt/nikexstussy1.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>Air Zoom Spiridon Cage 2 Stussy</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>Nike</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$880.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>

    ];
    const items2 = [ //Items New Balance

        <div
            className="item"
            data-value="1"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/115`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/28PxzmTn/nb5501.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>New Balance 550 Blue</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>New Balance</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$230.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>
        ,

        <div
            className="item"
            data-value="2"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/114`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/FFVpg2r4/nb20021.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>New Balance 2002</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>New Balance</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$230.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>,

        <div
            className="item"
            data-value="3"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/116`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/SNynCPsH/nbxstoneisland1.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>New Balance X Stone Island</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>New Balance</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$230.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>,

        <div
            className="item"
            data-value="4"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/117`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/rpJrBLKG/nbxbape1.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>New Balance X Bape</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>New Balance</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$230.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>,

        <div
            className="item"
            data-value="5"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/118`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/L6PkXwJf/550white1.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>New Balance 550 black</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>New Balance</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$230.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>

    ];
    const items3 = [ //Items Camisetas

        <div
            className="item"
            data-value="1"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/2`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/g2zcQ3cp/Camiseta-Arsenal1.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>Arsenal local 23/24</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>Adidas</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$220.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>
        ,

        <div
            className="item"
            data-value="2"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/1`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/85sqkNPC/camiseta-Barca.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>Barca local 23/24</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>Nike</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$250.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>,

        <div
            className="item"
            data-value="3"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/3`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/t4z7fHsm/Camiseta-Juve1.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>Juventus local 23/24</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>Adidas</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$210.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>,


        <div
            className="item"
            data-value="4"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/4`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/Zn7xZG6t/Camiseta2-PSG.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>Psg local 23/24</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>Nike</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$200.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>,
        <div
            className="item"
            data-value="5"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/5`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/zf59qwFk/Camiseta2-RM.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>Real Madrid local 23/24</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>Adidas</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$240.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>

    ];
    const items4 = [ //iTEMS Tech

        <div
            className="item"
            data-value="1"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/201`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/L6PwDDsS/airpodsmax.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>Airpods Max</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>Apple</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$900.00</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>
        ,

        <div
            className="item"
            data-value="2"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/202`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/7Y4nvnVw/airpods3.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>Airpods 3</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>Apple</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$900.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>,

        <div
            className="item"
            data-value="3"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/203`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/T1tVqZW0/airpods2.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>Airpods 2</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>Apple</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$750.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>,


        <div
            className="item"
            data-value="4"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/204`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/pLc2bkKS/airpodspro.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>Airpods pro</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>Apple</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$600.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>,
        <div
            className="item"
            data-value="5"
            style={{ margin: '1rem', position: 'relative' }}
        >
            <Link to={`/producto/205`} style={{ textDecoration: 'none', }}>
                <img src={'https://i.postimg.cc/WbQnWcHY/airdots2.webp'} alt="your image" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} loading="lazy" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: 'black' }}>Airdots 2</span>
                        <span style={{ fontSize: '.9rem', fontWeight: '500', color: '#767a80' }}>Xiaomi</span>
                    </span>
                    <span>
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: 'black' }}>$50.000</span>
                    </span>
                </div>
                <Icon
                    component={ZoomInIcon}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.5rem',
                        fontSize: '2.5rem',
                        fill: 'gray'
                    }}
                />
            </Link>
        </div>

    ];


    return (
        <>
            <Grid container style={{ minHeight: '100vh', display: 'flex' }}  >


                {/*INICIO IMAGENES INICIO*/}
                <Box component={Grid} item xs={12} md={12} lg={12} display={{ xs: 'none', md: 'block', lg: 'block' }}>
                    <img src={'https://i.postimg.cc/BvDL4ngq/presentacion.webp'} alt="Imagen 3" style={{ width: '100%', height: '520px' }} />
                </Box>
                <Box component={Grid} item xs={12} md={12} lg={12} display={{ xs: 'block', md: 'none', lg: 'none' }} position="relative">
                    <img src={'https://i.postimg.cc/jjLn8cfW/presentacion-Moviles.webp'} alt="Imagen 3" style={{ width: '100%', height: 'auto' }} />
                    <Box position="absolute" bottom={10} left="70%" sx={{ transform: "translateX(-50%)" }}>
                        <Link to={`/Tenis`} style={{ textDecoration: 'none', }}>
                            <Button
                                sx={{
                                    width: "170px",
                                    height: "45px",
                                    borderRadius: "0px",
                                    border: "2px solid #fefefe",
                                    color: 'white',
                                    marginBottom: '2rem',
                                    fontWeight: '700',
                                    "&:hover": {
                                        backgroundColor: 'black',
                                        color: 'white'
                                    },
                                }}
                            >
                                DESCUBRE LO NUEVO!
                            </Button>
                        </Link>
                    </Box>
                </Box>
                {/*FIN IMAGENES INICIO*/}


                {/*INICIO APARTADO ZAPATOS*/}

                <Container sx={{ textAlign: 'center' }}>
                    <Box sx={{ marginTop: '1rem' }}>
                        <Typography sx={{ fontWeight: '700', fontSize: '2.1rem' }}>
                            LOS MAS VENDIDOS
                        </Typography>
                    </Box>
                </Container>
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
                {/*FIN APARTADO ZAPATOS*/}


                {/*INICIO FEATURED NEW BALANCE*/}
                <Box component={Grid} item xs={12} lg={12} display={{ xs: 'none', lg: 'block' }}>
                    <img src={'https://i.postimg.cc/yxVchrMw/NB.webp'} alt="Imagen 3" style={{ width: '100%', height: 'auto' }} loading="lazy" />
                </Box>
                <Container sx={{ textAlign: 'center', marginTop: '1rem' }}>
                    <Box sx={{ marginTop: '1rem' }}>
                        <Typography sx={{ fontWeight: '700', fontSize: '2.1rem' }}>
                            DESTACADO DE NEW BALANCE
                        </Typography>
                    </Box>
                </Container>
                <AliceCarousel
                    disableDotsControls
                    disableButtonsControls={false}
                    mouseTrackingEnabled={false}
                    items={items2}
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
                <Grid container spacing={3} padding={5} style={{ height: '700', height: '100%' }} >
                    <Grid item xs={12} md={6}>
                        <Box textAlign="center">
                            <img src={'https://i.postimg.cc/V5QMj04H/NBPerfil.webp'} alt="Presentación 1 NB" style={{ width: "100%", }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box textAlign="center" height={'50%'} marginBottom={'7px'}>
                            <img src={'https://i.postimg.cc/NGnk8yrf/Nbpresentacion2.webp'} alt="Presentación 2 NB" style={{ width: "100%", }} />
                        </Box>
                        <Box textAlign="center" height={'50%'}>
                            <img src={'https://i.postimg.cc/9MkhLFcH/Nbpresentacion3.webp'} alt="Presentación 3 NB" style={{ width: "100%", }} />
                        </Box>
                    </Grid>

                </Grid>
                {/*FIN FEATURED NEW BALANCE*/}


                {/*INICIO APARTADO CAMISETAS*/}
                <Grid container>
                    <Container sx={{ textAlign: 'center' }}>
                        <Box sx={{ marginTop: '1rem' }}>
                            <Typography sx={{ fontWeight: '700', fontSize: '2.1rem' }}>
                                ADQUIERE LA CAMISETA DE TU EQUIPO
                            </Typography>
                            <Typography sx={{ fontWeight: '400', fontSize: '1.3rem', color: 'gray' }}>
                                CAMISETAS RETROS Y ACTUALES DE TU EQUIPO FAVORITO
                            </Typography>
                        </Box>
                    </Container>
                    <Grid container spacing={3} padding={5} style={{}} >

                        <Grid item xs={12} md={4}>
                            <Box position="relative">
                                <img src={'https://i.postimg.cc/WbQ2LPhw/gvardiol-Presentacion-Home.webp'} alt="gvardiol" style={{ width: "100%", height: '100%' }} loading="lazy" />
                                <Box position="absolute" bottom={0} left="50%" sx={{ transform: "translateX(-50%)" }}>
                                    <Link to={`/producto/6`} style={{ textDecoration: 'none', }}>
                                        <Button
                                            sx={{
                                                width: "130px",
                                                height: "45px",
                                                borderRadius: "0px",
                                                border: "2px solid #fefefe",
                                                color: 'white',
                                                marginBottom: '2rem',
                                                fontWeight: '700',
                                                "&:hover": {
                                                    border: '1px solid white',
                                                    backgroundImage:
                                                        "linear-gradient(to bottom, white 33.33%, #6691ae 33.33%, #6691ae 66.66%, white 66.66%)",
                                                },
                                            }}
                                        >
                                            CITY 23/24
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box position="relative">
                                <img src={'https://i.postimg.cc/5N8BLfdX/Kak-Home-Presentacion.webp'} alt="kaká" style={{ width: "100%", height: '100%' }} loading="lazy" />
                                <Box position="absolute" top={0} left="50%" sx={{ transform: "translateX(-50%)" }}>
                                    <Link to={`/producto/11`} style={{ textDecoration: 'none', }}>
                                        <Button
                                            sx={{
                                                width: "130px",
                                                height: "45px",
                                                borderRadius: "0px",
                                                border: "2px solid #fefefe",
                                                color: "white",
                                                marginTop: "2.4rem",
                                                fontWeight: "700",
                                                "&:hover": {
                                                    border: '1px solid white',
                                                    backgroundImage:
                                                        "linear-gradient(to bottom, black 33.33%, #950411 33.33%, #950411 66.66%, black 66.66%)",
                                                },
                                            }}
                                        >
                                            MILAN 06/07
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box position="relative">
                                <img src={'https://i.postimg.cc/KvCWvG74/kilyan-Presentacion-Home.webp'} alt="your image" style={{ width: "100%", height: '100%' }} loading="lazy" />
                                <Box position="absolute" bottom={0} left="50%" sx={{ transform: "translateX(-50%)" }}>
                                    <Link to={`/producto/4`} style={{ textDecoration: 'none', }}>
                                        <Button
                                            sx={{
                                                width: "130px",
                                                height: "45px",
                                                borderRadius: "0px",
                                                border: "2px solid #fefefe",
                                                color: 'white',
                                                marginBottom: '2rem',
                                                fontWeight: '700',
                                                "&:hover": {
                                                    border: '1px solid white',
                                                    backgroundImage:
                                                        "linear-gradient(to bottom, #0d004c 33.33%, #64022f 33.33%, #950411 66.66%, #0d004c 66.66%)",
                                                },
                                            }}
                                        >
                                            PSG 23/24
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <AliceCarousel
                        disableDotsControls
                        disableButtonsControls={false}
                        mouseTrackingEnabled={false}
                        items={items3}
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
                {/*FIN APARTADO CAMISETAS*/}


                {/*INICIO APARTADO TECNOLOGÍA*/}
                <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid sx={{ display: { xs: 'flex', md: 'none' } }}>

                        <Typography sx={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                            LO ULTIMO EN TECNOLOGÍA
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ backgroundColor: 'black', height: '570px', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', margin: '0' }}>
                        <Box sx={{ height: 'auto', width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', color: 'white' }}>
                            <Typography sx={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem' }}>
                                LO ULTIMO EN TECNOLOGÍA
                            </Typography>
                            <Typography sx={{ fontSize: '1rem', fontWeight: '300', marginBottom: '2rem' }}>
                                PRODUCTOS APPLE HASTA UN 40% MAS ECONOMICOS
                            </Typography>
                            <Link to={`/Tecnologia`} style={{ textDecoration: 'none', }}>
                                <Button sx={{
                                    height: '4rem', width: '15rem', border: '1px solid white', borderRadius: '0', color: 'white', fontWeight: '600', "&:hover": {
                                        background: "white", color: 'black', border: '1px solid black'
                                    }
                                }}>
                                    MIRA LOS PRODUCTOS
                                </Button>
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} display={{ xs: 'none', md: 'block', lg: 'block' }} sx={{ margin: '0', width: { xs: '100%', md: '50%' } }} >
                        <img src={'https://i.postimg.cc/7PRC6d5f/apple-Presentacion.webp'} alt="Descripción de la imagen" style={{ width: '100%', height: '570px', marginBottom: '0px' }} loading="lazy" />
                    </Grid>
                    <Grid sx={{ display: { xs: 'flex', md: 'none' }, marginTop: '1rem', flexDirection: 'column', width: '100%', textAlign: 'center' }}>

                        <Typography sx={{ fontSize: '1 rem', fontWeight: '600', marginBottom: '1rem' }}>
                            PRODUCTOS APPLE HASTA UN 40% MAS ECONOMICOS
                        </Typography>
                        <Link to={`/Tecnologia`} style={{ textDecoration: 'none', }}>
                            <Button sx={{
                                height: '3rem', width: '100%', border: '1px solid black', borderRadius: '0', color: 'black', fontWeight: '600', "&:hover": {
                                    background: "black", color: 'white', border: '1px solid white'
                                }
                            }}>
                                AQUÍ LOS PRODUCTOS
                            </Button>
                        </Link>
                    </Grid>
                    <Box sx={{ width: '100%', marginTop: '2rem' }}>
                        <AliceCarousel
                            disableDotsControls
                            disableButtonsControls={false}
                            mouseTrackingEnabled={false}
                            items={items4}
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
                    </Box>
                </Grid>

            </Grid>

        </>
    )
}