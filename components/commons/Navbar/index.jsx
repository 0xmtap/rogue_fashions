import { Person, Search, ShoppingCart } from '@mui/icons-material'
import { Box, AppBar, Container, Toolbar, Typography, Button, IconButton, Avatar } from '@mui/material'
import React from 'react'

const Index = () => {
    return (
        <AppBar
            sx={{
                backgroundColor: '#F7F7F7',
                boxShadow: 'none',
                pl: 2.5,
                pr: 2.5,
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
                            display: 'flex',
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
                            Men's
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
                            Women's
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
                            display: 'flex',
                            gap: '1vw'
                        }}
                    >
                        <IconButton>
                            <Search
                                sx={{
                                    color: 'rgba(0, 0, 0, 1)'
                                }}
                            />
                        </IconButton>
                        <IconButton
                            sx={{
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

                        >
                            <Person
                                sx={{
                                    color: 'rgba(0, 0, 0, 1)'
                                }}
                            />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Index
