import { Close, MenuBook, Person, Search, ShoppingCart } from '@mui/icons-material'
import { Box, AppBar, Container, Toolbar, Typography, Button, IconButton, Avatar, Menu, Drawer, InputBase, Divider } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const SubDrawer = ({ open, setOpen }) => {
    return (
        <Box
            px={2}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2vh',
                mb: 10
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Rapier',
                        fontSize: '35px',
                        // color: '#85111D'
                        color: 'black'
                    }}
                >
                    ROGUE<span style={{ color: '#85111D' }}>.</span>
                </Typography>
                <IconButton
                    onClick={() => setOpen(!open)}
                >
                    <Close
                        sx={{
                            color: 'rgba(0, 0, 0, 1)'
                        }}
                    />
                </IconButton>
            </Box>

            <Divider
                sx={{
                    width: ['50vw', '10vw'],
                    marginX: 'auto'
                    // backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}
            />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2vh',
                }}
            >
                <Link
                    href={'/'}
                    style={{ textDecorationLine: 'none' }}
                >
                    <Typography
                        sx={{
                            color: 'black',
                            fontFamily: 'Montserrat'
                        }}
                    >
                        Men&apos;s
                    </Typography>
                </Link>
                <Link
                    href={'/'}
                    style={{ textDecorationLine: 'none' }}
                >
                    <Typography
                        sx={{
                            color: 'black',
                            fontFamily: 'Montserrat'
                        }}
                    >
                        Women&apos;s
                    </Typography>
                </Link>
                <Link
                    href={'/'}
                    style={{ textDecorationLine: 'none' }}
                >
                    <Typography
                        sx={{
                            color: 'black',
                            fontFamily: 'Montserrat'
                        }}
                    >
                        Beauty
                    </Typography>
                </Link>
            </Box>
            <Divider
                sx={{
                    mt: '1vh',
                    mb: '3vh',
                    width: ['50vw', '10vw'],
                    marginX: 'auto'
                    // backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '5vw'
                }}
            >
                <Button
                    sx={{
                        color: 'black',
                        display: 'flex',
                        gap: '1vw',
                        borderRadius: '30px',
                        px: 3,
                        py: 0.5
                    }}
                >
                    <ShoppingCart

                    />
                    <Typography
                        sx={{
                            color: 'black'
                        }}
                    >
                        Cart
                    </Typography>
                </Button>
                <Button
                    sx={{
                        color: 'black',
                        display: 'flex',
                        gap: '1vw',
                        borderRadius: '30px',
                        px: 3,
                        py: 0.5
                    }}
                >
                    <Person />
                    <Typography>
                        Profile
                    </Typography>
                </Button>
            </Box>

            <Divider
                sx={{
                    mt: '1vh',
                    mb: '3vh',
                    width: ['50vw', '10vw'],
                    marginX: 'auto'
                    // backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}
            />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '4vh'
                }}
            >
                <InputBase
                    sx={{
                        border: '1px solid grey',
                        width: '50vw',
                        borderRadius: '20px',
                        px: '6px',
                        py: '2px'
                    }}
                    placeholder='Search'
                    startAdornment={<Search sx={{ ml: 1.5 }} />}
                />
                <Button
                    sx={{
                        bgcolor: 'black',
                        border: '1px solid black',
                        borderRadius: '20px',
                        color: 'white',
                        px: 3,
                        ":hover": {
                            backgroundColor: 'white',
                            color: 'black'
                        }
                    }}
                >
                    Search
                </Button>
            </Box>
        </Box>
    )
}

const Index = () => {

    const [open, setOpen] = useState(false);

    return (
        <AppBar
            sx={{
                backgroundColor: '#F7F7F7',
                boxShadow: 'none',
                pl: 2.5,
                pr: 3,
                mx: 0
            }}
        >
            <Container
                sx={{
                    p: 0,
                    m: 0
                }}
            >
                <Toolbar
                    sx={{
                        width: '90vw',
                        m: 0,
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'space-between'
                        // gap: ''
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: 'Rapier',
                                fontSize: '35px',
                                // color: '#85111D'
                                color: 'black'
                            }}
                        >
                            ROGUE<span style={{ color: '#85111D' }}>.</span>
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: ['none', 'none', 'flex'],
                            gap: '2vw'
                        }}
                    >
                        <Button
                            sx={{
                                color: 'black',
                                fontSize: '14px',
                                fontFamily: 'Montserrat',
                                borderRadius: '30px',
                                ":hover": {
                                    color: '#85111B',
                                    backgroundColor: 'transparent'
                                }
                            }}
                        >
                            Men&apos;s
                        </Button>
                        <Button
                            sx={{
                                color: 'black',
                                fontSize: '14px',
                                fontFamily: 'Montserrat',
                                borderRadius: '30px',
                                ":hover": {
                                    color: '#85111B',
                                    backgroundColor: 'transparent'
                                }
                            }}

                        >
                            Women&apos;s
                        </Button>
                        <Button
                            sx={{
                                color: 'black',
                                fontSize: '14px',
                                fontFamily: 'Montserrat',
                                borderRadius: '30px',
                                ":hover": {
                                    color: '#85111B',
                                    backgroundColor: 'transparent'
                                }
                            }}
                        >
                            Collections
                        </Button>
                        <Button
                            sx={{
                                color: 'black',
                                fontSize: '14px',
                                fontFamily: 'Montserrat',
                                borderRadius: '30px',
                                ":hover": {
                                    color: '#85111B',
                                    backgroundColor: 'transparent'
                                }
                            }}
                        >
                            Beauty
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            gap: '1vw',
                            display: 'flex'
                        }}
                    >
                        <IconButton
                            sx={{
                                display: ['none', 'flex', 'flex'],
                            }}
                        >
                            <Search
                                sx={{
                                    color: 'rgba(0, 0, 0, 1)'
                                }}
                            />
                        </IconButton>
                        <IconButton
                            sx={{
                                display: ['none', 'flex', 'flex'],
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.2)',
                                ":hover": {
                                    color: '#85111D'
                                }
                            }}
                        >
                            <ShoppingCart
                                sx={{
                                    color: 'rgba(0, 0, 0, 1)',
                                    ":hover": {
                                        color: '#85111D'
                                    }
                                }}
                            />
                        </IconButton>
                        <IconButton
                            sx={{
                                display: ['none', 'flex', 'flex'],

                            }}
                        >
                            <Person
                                sx={{
                                    color: 'rgba(0, 0, 0, 1)'
                                }}
                            />
                        </IconButton>
                        <IconButton
                            sx={{
                                display: ['flex', 'flex', 'none'],
                                ml: 5
                            }}
                            onClick={() => setOpen(!open)}
                        >
                            {open &&
                                <Close
                                    sx={{
                                        color: 'rgba(0, 0, 0, 1)'
                                    }}
                                />
                            }
                            {!open &&
                                <MenuIcon
                                    sx={{
                                        color: 'rgba(0, 0, 0, 1)'
                                    }}
                                />
                            }
                        </IconButton>

                        <Drawer
                            anchor={'top'}
                            open={open}
                            onClose={() => setOpen(!open)}
                            sx={{
                                mt: 8
                            }}
                        >
                            <SubDrawer open={open} setOpen={setOpen} />
                        </Drawer>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Index
