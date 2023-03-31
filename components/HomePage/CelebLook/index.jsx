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

  // getDominantColor('/images/ui/Arrivals.png').then((c) => setBgColor(c))

  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     height: '100vh'
    //     // position: 'relative'
    //   }}
    // >
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       flexDirection: ['column', 'column', 'row'],
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         flex: 1,
    //         zIndex: 999,
    //         height: '600px',
    //         position: ['', '', 'relative']
    //       }}
    //     >
    //       <Image
    //         src={'/images/ui/New Arrival.jpg'}
    //         fill
    //         style={{
    //           objectFit: 'cover',
    //         }}
    //       />
    //       <Typography
    //         sx={{
    //           textAlign: 'center',
    //           fontFamily: 'Rapier',
    //           fontSize: '70px',
    //           color: 'white',
    //           position: 'absolute',
    //           bottom: '25%',
    //           left: '20%'
    //         }}
    //       >
    //         NEW <br />ARRIVALS!
    //       </Typography>
    //     </Box>
    //     <Box
    //       sx={{
    //         flex: 1,
    //         zIndex: 999,
    //         height: '600px',
    //         position: ['', '', 'relative']
    //       }}
    //     >
    //       <Carousel
    //         sx={{
    //           flex: 1,
    //           height: '600px',
    //           // bgcolor: '#ed118c',
    //           bgcolor: bgColor
    //         }}
    //         onChange={(e) => getDominantColor(merch[e].image).then((c) => setBgColor(c))}
    //         indicators={false}
    //         navButtonsAlwaysInvisible
    //       >
    //         {merch.map((m, i) =>
    //           <Box
    //             key={i}
    //             sx={{
    //               width: '100%',
    //               height: '600px',
    //               display: 'flex',
    //               justifyContent: 'center',
    //               alignItems: 'center'
    //             }}
    //           >
    //             <ProductCard data={m} />
    //           </Box>
    //         )}

    //       </Carousel>
    //     </Box>
    //   </Box>
    // </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: ['column', 'column', 'column', 'row']
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
          backgroundImage: `url('/images/ui/Arrival.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Rapier',
            fontSize: ['60px', '80px'],
            color: 'white',
            textAlign: 'center'
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
          bgcolor: bgColor
        }}
        onChange={(e) => getDominantColor(merch[e].image).then((c) => setBgColor(c))}
        indicators={false}
        navButtonsAlwaysInvisible
      >
        {merch.map((m, i) =>
          <Box
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
