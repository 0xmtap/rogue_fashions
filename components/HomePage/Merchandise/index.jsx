import { Box, Button, Chip, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import ProductCard from './ProductCard';
import { merch } from '@/data/merch';
import Image from 'next/image';

const Index = () => {

    const [filter, setFilter] = useState('all');

    return (
        <Box
            sx={{
                px: [2, 5],
                display: 'flex',
                flexDirection: 'column',
                gap: '3vh',
                position: 'relative',
                // overflowY: 'hidden',
                // overflowX: 'hidden'
                // minHeight: '100vh',
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'Futura',
                    fontSize: '17px',
                    color: 'rgba(0, 0, 0, 0.45)'
                }}
            >
                ROGUE SPECIALS
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: ['3vw', '1vw']
                }}
            >
                <Chip
                    label='All'
                    sx={{
                        px: '0.5vw',
                        backgroundColor: filter === 'all' ? 'black' : 'transparent',
                        color: filter === 'all' ? 'white' : 'black',
                        border: '1px solid black',
                        fontFamily: 'Montserrat',
                        ":hover": {
                            backgroundColor: 'black',
                            color: 'white'
                        }
                    }}
                    onClick={() => setFilter('all')}
                />
                <Chip
                    label='Men'
                    sx={{
                        px: '0.5vw',
                        backgroundColor: filter === 'men' ? 'black' : 'transparent',
                        color: filter === 'men' ? 'white' : 'black',
                        border: '1px solid black',
                        fontFamily: 'Montserrat',
                        ":hover": {
                            backgroundColor: 'black',
                            color: 'white'
                        }
                    }}
                    onClick={() => setFilter('men')}
                />
                <Chip
                    label='Women'
                    sx={{
                        px: '0.5vw',
                        backgroundColor: filter === 'women' ? 'black' : 'transparent',
                        color: filter === 'women' ? 'white' : 'black',
                        border: '1px solid black',
                        fontFamily: 'Montserrat',
                        ":hover": {
                            backgroundColor: 'black',
                            color: 'white'
                        }
                    }}
                    onClick={() => setFilter('women')}
                />
                <Chip
                    label='Both'
                    sx={{
                        px: '0.5vw',
                        backgroundColor: filter === 'both' ? 'black' : 'transparent',
                        color: filter === 'both' ? 'white' : 'black',
                        border: '1px solid black',
                        fontFamily: 'Montserrat',
                        ":hover": {
                            backgroundColor: 'black',
                            color: 'white'
                        }
                    }}
                    onClick={() => setFilter('both')}
                />
            </Box>
            <Grid
                container
                columns={{ xs: 2, md: 6, lg: 10 }}
                rowSpacing={5}
                columnSpacing={3}
                sx={{
                    // width: '100vw',
                    // paddingX: '20px',
                    overflowY: 'hidden',
                    overflowX: 'hidden',
                    mt: 2,
                }}
            >
                {filter === 'all' && merch.slice(0, 5).map((m) =>
                    <Grid
                        key={m.id}
                        item
                        xs={2}
                        id={m.id}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // mr: 3.8
                            }}
                        >
                        <ProductCard data={m} />
                        </Box>
                    </Grid>
                )}
                {filter !== 'all' && merch.slice(0, 5).map((m) =>
                    m.tags.includes(filter)
                    &&
                    <Grid
                        key={m.id}
                        item
                        xs={2}
                        id={m.id}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                        <ProductCard data={m} />
                        </Box>
                    </Grid>
                )}
            </Grid>
            <Button
                href={'/terms'}
                sx={{
                    backgroundColor: 'transparent',
                    color: 'black',
                    textDecorationLine: 'underline',
                    width: '3vw',
                    marginX: 'auto',
                    ":hover": {
                        textDecorationLine: 'underline',
                        backgroundColor: 'transparent',
                    }
                }}
            >
                More
            </Button>
        </Box>
    )
}

export default Index
