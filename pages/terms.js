import { Box, Typography } from '@mui/material'
import React from 'react'

const Index = () => {
  return (
    <Box
      px={5}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box
        >
          <Typography
            // width={'80vw'}
            sx={{
              width: '55vw',
              fontFamily: 'Futura',
              fontSize: '200px',
              color: 'rgba(0, 0, 0, 0.2)',
            }}
          >
            About Us
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Index
