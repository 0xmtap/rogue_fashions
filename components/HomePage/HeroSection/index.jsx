import { Box, Button, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Index = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundImage:   `url('/images/herobanner.png')`,
                width: '100vw',
                height: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}

        >
            <Typography
                sx={{
                    fontSize: ['60px', '70px', '80px'],
                    fontFamily: 'Rapier',
                    color: 'white',
                    textAlign: 'center'
                }}
            >   
                Go Rogue, <br />Go GenZ
            </Typography>
        </Box>
    )
}

export default Index
