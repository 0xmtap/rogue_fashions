import { FormatQuote } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Index = () => {
    return (
        <Box
            px={5}
        >
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <Box
                >
                    <Typography
                        // width={'80vw'}
                        sx={{
                            width: '55vw',
                            fontFamily: 'Futura',
                            fontSize: '200px',
                            color: 'rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        About Us
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative'
                    }}
                >
                    <FormatQuote 
                        sx={{
                            position: 'absolute',
                            top: '1%',
                            left: '-8%',
                            transform: 'rotate(180deg)',
                            fontSize: '100px',
                            color: 'rgba(0, 0, 0, 0.2)'
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: '18px',
                            textAlign: 'center',
                            fontFamily: 'Montserrat'
                        }}
                    >
                        Welcome to <span style={{color: '#85111B', fontWeight: 600}}>Rogue Fashions </span>We offer trendy and affordable clothing for Gen Z that empowers self-expression. Our mission is to make a positive impact through sustainability and inclusivity. Join us in embracing your unique style!
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Index
