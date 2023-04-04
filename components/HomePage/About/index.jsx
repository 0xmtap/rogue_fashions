import { FormatQuote } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Index = () => {
    return (
        <Box
            sx={{
                // overflowY: 'hidden',
                // overflowX: 'hidden',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: ['column', 'column', 'row', 'row'],
                    gap: '2vw',
                    overflowY: 'hidden',
                    overflowX: 'hidden'
                }}
            >
                <Box
                >
                    <Typography
                        sx={{
                            width: ['98vw', '100vw', '45vw', '55vw'],
                            fontFamily: 'Futura',
                            fontSize: ['50px', '80px', '100px', '200px'],
                            textAlign: 'center',
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
                        position: 'relative',
                        pl: 3,
                        pr: 3
                    }}
                >
                    <FormatQuote 
                        sx={{
                            position: 'absolute',
                            top: ['-15%', '-40%', '-20%', '17.5%'],
                            left: ['0%','', '',  '2%'],
                            transform: 'rotate(180deg)',
                            fontSize: '100px',
                            color: 'rgba(0, 0, 0, 0.2)'
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: '18px',
                            textAlign: 'center',
                            fontFamily: 'Montserrat',
                            fontWeight: 300
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
