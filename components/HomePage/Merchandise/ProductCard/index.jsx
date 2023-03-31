import { ArrowBack, RampRightSharp } from '@mui/icons-material'
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Index = ({ data }) => {
    return (
        <Card
            className='card-animation'
            sx={{
                height: ['45vh', '50vh', '50vh', '35vh'],
                minWidth: ['70vw', '40vw', '30vw', '15vw'],
                maxWidth: ['70vw', '40vw', '30vw', '15vw'],
                borderRadius: '2px',
                position: 'relative',
                cursor: 'pointer',
                boxShadow: 'none',
                position: 'relative'

            }}
            onClick={() => alert('Yet To Be Implemented')}
        >
            <CardMedia
                sx={{
                }}
            >
                <Image
                    src={data.image}
                    // width={280}
                    // height={280}
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
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
                    {data.title}
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
