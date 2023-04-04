import { Box, Button, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Index = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                // backgroundImage:   `url('/images/herobanner.png')`,
                width: '100vw',
                minHeight: '80vh',
                maxHeight: '900px',
                // overflowY: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Image 
                src={'/images/herobanner.png'}
                fill
                style={{
                    objectFit: 'cover',
                    zIndex: 0,
                    objectPosition: 'center left'
                }}
            />

            <Typography
                sx={{
                    fontSize: ['60px', '70px', '80px'],
                    fontFamily: 'Rapier',
                    color: 'white',
                    textAlign: 'center',
                    zIndex: 1
                }}
            >   
                Go Rogue, <br />Go GenZ
            </Typography>
        </Box>
    )
}

export default Index
