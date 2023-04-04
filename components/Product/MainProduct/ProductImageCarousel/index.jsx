import { Box, Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Carousel from 'react-material-ui-carousel'

const Index = () => {
  return (
    <Box
      sx={{
        flex: 1,
        pl: 3,
        pr: 3,
        pb: 3,
        display: 'flex',
        justifyContent: ['center', 'center', 'space-between'],
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2vh',
        // maxHeight: ['110vh', '', '90vh']
      }}
    >
      <Carousel
        sx={{
          width: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly'
          // height: ['300px', '400px', '560px']
        }}
        indicators={false}
      >
        <Box
          sx={{
            position: 'relative',
            width: ['80vw', '80vw', '45vw'],
            height: ['300px', '400px', '560px'],
            ml: ['1.3vw'],
          }}
        >
          <Image
            src={'/images/genz.jpg'}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Box
          sx={{
            position: 'relative',
            width: ['80vw', '80vw', '45vw'],
            height: ['300px', '400px', '560px'],
            ml: ['4vw', '1.3vw']
          }}
        >
          <Image
            src={'/images/genz2.jpg'}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Box
          sx={{
            position: 'relative',
            width: ['80vw', '80vw', '45vw'],
            height: ['300px', '400px', '560px'],
            ml: '1.3vw'
          }}
        >
          <Image
            src={'/images/genz3.jpg'}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Box
          sx={{
            position: 'relative',
            width: ['80vw', '80vw', '45vw'],
            height: ['300px', '400px', '560px'],
            ml: '1.3vw'
          }}
        >
          <Image
            src={'/images/genz4.jpg'}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Box
          sx={{
            position: 'relative',
            width: ['80vw', '80vw', '45vw'],
            height: ['300px', '400px', '560px'],
            ml: '1.3vw'
          }}
        >
          <Image
            src={'/images/genz5.webp'}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Box
          sx={{
            position: 'relative',
            width: ['80vw', '80vw', '45vw'],
            height: ['300px', '400px', '560px'],
            ml: '1.3vw'
          }}
        >
          <Image
            src={'/images/genz6.jpg'}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </Carousel>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
          mb: [0, 0, 1],
          mt: [2, 2, 0]
        }}
      >
        <Button
          sx={{
            backgroundColor: 'transparent',
            width: '40%',
            border: '1px solid black',
            color: 'black',
            ":hover": {
              backgroundColor: 'transparent'
            }
          }}
        >
          Add To Cart
        </Button>
        <Button
          sx={{
            width: '40%',
            backgroundColor: 'black',
            border: '1px solid black',
            color: 'white',
            ":hover": {
              backgroundColor: 'black',
            }
          }}
        >
          Buy Now
        </Button>
      </Box>
    </Box>
  )
}

export default Index
