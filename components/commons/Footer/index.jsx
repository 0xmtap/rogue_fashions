import { Email, Instagram, Reddit, Twitter } from '@mui/icons-material'
import { Box, Button, IconButton, InputBase, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Index = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: ['column', 'column', 'row'],
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '30vh',
                py: 5,
                px: 5,
                gap: '3vw'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: ['column'],
                    justifyContent: ['center', 'space-between'],
                    alignItems: 'center',
                    py: 5,
                    gap: '5vh'
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Rapier',
                        fontSize: '20px'
                    }}
                >
                    ROGUE FASHIONS
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '1vw'
                    }}
                >
                    <IconButton
                        sx={{
                            color: 'black'
                        }}
                    >
                        <Instagram />
                    </IconButton>
                    <IconButton
                        sx={{
                            color: 'black'
                        }}
                    >
                        <Twitter />
                    </IconButton>
                    <IconButton
                        sx={{
                            color: 'black'
                        }}
                    >
                        <Email />
                    </IconButton>
                    <IconButton
                        sx={{
                            color: 'black'
                        }}
                    >
                        <Reddit />
                    </IconButton>
                </Box>
            </Box>
            <Box
                sx={{
                    // flexGrow: 1,
                    display: 'flex',
                    gap: '10vw',
                    flexDirection: ['column', 'column', 'row']
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: ['5vh', 'vh', '10vw'],
                        flexDirection: ['column', 'row', 'row'],
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1vh',
                            justifyContent: 'center',
                            alignItems:'center'
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontSize: '20px',
                                fontWeight: 600,
                                mt: 3,
                                mb: 2
                                // color: 'rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            Categories
                        </Typography>
                        <Link
                            href={'/'}
                            style={{ textDecorationLine: 'none' }}
                        >
                            <Typography
                                sx={{
                                    color: 'black',
                                    fontSize: '15px',
                                    fontFamily: 'Futura'
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
                                    fontSize: '15px',
                                    fontFamily: 'Futura'
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
                                    fontSize: '15px',
                                    fontFamily: 'Futura'
                                }}
                            >
                                Beauty
                            </Typography>
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems:'center',
                            gap: '2vh',
                            pt: 4
                        }}
                    >
                        <Link
                            href={'/'}
                            style={{ textDecorationLine: 'none' }}
                        >
                            <Typography
                                sx={{
                                    color: 'black',
                                    fontSize: '15px',
                                    fontFamily: 'Futura'
                                }}
                            >
                                Terms And Conditions
                            </Typography>
                        </Link>

                        <Link
                            href={'/'}
                            style={{ textDecorationLine: 'none' }}
                        >
                            <Typography
                                sx={{
                                    color: 'black',
                                    fontSize: '15px',
                                    fontFamily: 'Futura'
                                }}
                            >
                                Company Policy
                            </Typography>
                        </Link>

                        <Link
                            href={'/'}
                            style={{ textDecorationLine: 'none' }}
                        >
                            <Typography
                                sx={{
                                    color: 'black',
                                    fontSize: '15px',
                                    fontFamily: 'Futura'
                                }}
                            >
                                Partners
                            </Typography>
                        </Link>

                        <Link
                            href={'/'}
                            style={{ textDecorationLine: 'none' }}
                        >
                            <Typography
                                sx={{
                                    color: 'black',
                                    fontSize: '15px',
                                    fontFamily: 'Futura'
                                }}
                            >
                                Return Policy
                            </Typography>
                        </Link>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: ['', 'center', 'flex-end'],
                        gap: '2vh'
                    }}
                >
                    <InputBase
                        placeholder='Your Email Goes Here'
                        sx={{
                            border: '1px solid black',
                            px: 2,
                            py: '3px',
                            width: ['80vw', '50vw', '25vw', '20vw'],
                            borderRadius: '3px',
                            fontFamily: 'Futura'
                        }}
                    />

                    <Button
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            border: '1px solid black',
                            maxWidth: '70vw',
                            margin: ['auto', '0', '0', '0'],
                            px: 1,
                            ":hover": {
                                backgroundColor: 'white',
                                color: 'black'
                            }
                        }}
                    >
                        Stay In Touch
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Index
