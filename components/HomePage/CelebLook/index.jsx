import { Box, Grid, Slide, Typography } from '@mui/material'
import React from 'react'
import ProductCard from './ProductCard';
import { merch } from '@/data/merch';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';
import { getDominantColor } from '@/functions/main';
import { useState } from 'react';
import image from '../../../images/Arrival.jpg'

const Index = () => {

  const [bgColor, setBgColor] = useState('#1ca7c3');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: ['column', 'column', 'column', 'row'],
        // overflowY: 'hidden',
      }}
    >

      <Box
        sx={{
          display: 'flex',
          width: ['100vw', '100vw', '100vw', '50vw'],
          justifyContent: 'center',
          alignItems: 'center',
          height: ['60vh', '80vh', '80vh', '90vh'],
          position: 'relative',
          // backgroundImage: `url()`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <Image 
          src={'/images/ui/Arrival.jpg'}
          fill
          style={{
            objectFit: 'cover',
            zIndex: 0,
            objectPosition: 'center bottom'
          }}
        />
        <Typography
          sx={{
            fontFamily: 'Rapier',
            fontSize: ['60px', '80px'],
            color: 'white',
            textAlign: 'center',
            zIndex: 1
          }}
        >
          New<br /> Arrivals!
        </Typography>
      </Box>

      <Carousel
        sx={{
          width: ['100vw', '100vw', '100vw', '50vw'],
          height: ['60vh', '80vh', '80vh', '90vh'],

          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          bgcolor: 'rgb(44,89,131)',
          // bgcolor: 'rgb(0,203,197)'

        }}
        onChange={(e) => getDominantColor(merch[e].image).then((c) => console.log(c))}
        indicators={false}
        navButtonsAlwaysInvisible
      >
        {merch.map((m, i) =>
          <Box
            key={i}
            sx={{
              height: ['60vh', '80vh', '80vh', '90vh'],
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <ProductCard data={m} />
          </Box>
        )}

      </Carousel>
    </Box >
  )
}

export default Index
