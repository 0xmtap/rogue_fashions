import React from 'react'
import Detail from './Detail'
import ProductImageCarousel from './ProductImageCarousel';
import { Box } from '@mui/material';

const Index = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: ['column', 'column', 'row']
      }}
    >
      <ProductImageCarousel />
      <Detail />
    </Box>
  )
}

export default Index
