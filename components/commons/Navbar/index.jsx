import { Person, Search, ShoppingCart } from '@mui/icons-material'
import { Box, AppBar, Container, Toolbar, Typography, Button, IconButton, Avatar } from '@mui/material'
import React from 'react'

const Index = () => {
    return (
        <AppBar
            sx={{
                backgroundColor: 'white',
                boxShadow: 'none',
                px: 0,
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
                        width: '95vw',
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
                                fontSize: '25px',
                                color: '#85111D'
                            }}
                        >
                            Rogue F.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: '1vw'
                        }}
                    >
                        <Button
                            sx={{
                                color: 'black',
                                fontSize: '14px',
                                fontFamily: 'Futura',
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
                                fontFamily: 'Futura',
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
                                fontFamily: 'Futura',
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
                                    color: 'rgba(0, 0, 0, 0.3)'
                                }}
                            />
                        </IconButton>
                        <IconButton>
                            <ShoppingCart
                                sx={{
                                    color: 'rgba(0, 0, 0, 0.3)'
                                }}
                            />
                        </IconButton>
                        <IconButton>
                            <Person
                                sx={{
                                    color: 'rgba(0, 0, 0, 0.3)'
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
