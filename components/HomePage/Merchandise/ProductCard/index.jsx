import { ArrowBack, RampRightSharp } from '@mui/icons-material'
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Index = () => {
    return (
        <Card
            sx={{
                height: '35vh',
                minWidth: '18vw',
                maxWidth: '18vw',
                borderRadius: '10px',
                position: 'relative',
                cursor: 'pointer'
            }}
            onClick={() => alert('Yet To Be Implemented')}
        >
            <CardMedia>
                <Image
                    src={'/images/product1.jpg'}
                    width={280}
                    height={280}
                />
            </CardMedia>
            <CardContent
                sx={{
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'space-between',
                    top: '80%',
                    left: '-4%',
                    width: '100%',
                    mr: 1,
                    alignItems: 'center'
                }}
            >
                <Typography
                    sx={{

                        color: 'white',
                        fontFamily: 'Futura',
                        paddingX: '10px'
                    }}
                >
                    Naruto Hoodie
                </Typography>

                <Box
                    mr={2}
                >
                    <ArrowBack
                        sx={{
                            transform: 'rotate(180deg)',
                            color: 'white'
                        }}
                    />
                </Box>
            </CardContent>
        </Card>
    )
}

export default Index
