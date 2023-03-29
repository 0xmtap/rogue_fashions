import { Box, Chip, Typography } from '@mui/material'
import React from 'react'
import ProductCard from './ProductCard';

const Index = () => {
    return (
        <Box
            sx={{
                px: 5,
                display: 'flex',
                flexDirection: 'column',
                gap: '3vh',
                minHeight: '100vh',
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'Futura',
                    fontSize: '17px',
                    color: 'rgba(0, 0, 0, 0.45)'
                }}
            >
                ROGUE MERCHANDISE
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: '1vw'
                }}
            >
                <Chip
                    label='All'
                    sx={{
                        px: '0.5vw',
                        backgroundColor: 'transparent',
                        border: '1px solid black',
                        fontFamily: 'Montserrat',
                        ":hover": {
                            backgroundColor: 'black',
                            color: 'white'
                        }
                    }}
                />
                <Chip
                    label='Men'
                    sx={{
                        px: '0.5vw',
                        backgroundColor: 'transparent',
                        border: '1px solid black',
                        fontFamily: 'Montserrat',
                        ":hover": {
                            backgroundColor: 'black',
                            color: 'white'
                        }
                    }}
                />
                <Chip
                    label='Women'
                    sx={{
                        px: '0.5vw',
                        backgroundColor: 'transparent',
                        border: '1px solid black',
                        fontFamily: 'Montserrat',
                        ":hover": {
                            backgroundColor: 'black',
                            color: 'white'
                        }
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: '2vw',
                    maxWidth: '100vw',
                    overflowX: 'scroll',
                }}
            >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Box>
        </Box>
    )
}

export default Index
