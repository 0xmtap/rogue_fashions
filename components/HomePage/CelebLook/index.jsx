import { Box, Grid, Slide, Typography } from '@mui/material'
import React from 'react'
import ProductCard from './ProductCard';
import { merch } from '@/data/merch';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';
import { getDominantColor } from '@/functions/main';
import { useState } from 'react';

const Index = () => {

  const [bgColor,setBgColor] = useState('#1ca7c3');

  // getDominantColor('/images/ui/Arrivals.png').then((c) => setBgColor(c))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          display: 'flex',

        }}
      >
        <Box
          sx={{
            flex: 1,
            // height: '500px',
            position: 'relative'
          }}
        >
          <Image
            src={'/images/ui/New Arrival.jpg'}
            width={760}
            height={500}
          />
          <Typography
            sx={{
              textAlign: 'center',
              fontFamily: 'Rapier',
              fontSize: '70px',
              color: 'white',
              position: 'absolute',
              bottom: '25%',
              left: '20%'
            }}
          >
            NEW <br />ARRIVALS!
          </Typography>
        </Box>
        <Carousel
          sx={{
            flex: 1,
            height: '500px',
            // bgcolor: '#ed118c',
            bgcolor: bgColor
          }}
          onChange={(e) => getDominantColor(merch[e].image).then((c) => setBgColor(c))}
          indicators={false}
          navButtonsAlwaysInvisible
        >
          {merch.map((m, i) =>
            <Box
              key={i}
              sx={{
                width: '100%',
                height: '500px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <ProductCard data={m} />
            </Box>
          )}

        </Carousel>
      </Box>
      {/* <Grid
                container
                columns={{ xs: 10, md: 10, lg: 10 }}
                rowSpacing={5}
                sx={{
                    width: '100vw',
                    // paddingX: '20px',
                    mt: 2
                }}
            >
                {merch.slice(0, 5).map((m) =>
                    <Grid
                        item
                        xs={2}
                        id={m.id}
                    >
                        <ProductCard data={m} />
                    </Grid>
                )}
            </Grid> */}
    </Box>
  )
}

export default Index
