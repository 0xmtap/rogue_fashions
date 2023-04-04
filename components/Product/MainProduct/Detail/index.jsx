import { CurrencyRupee, Star } from '@mui/icons-material'
import { Box, Button, Chip, Typography } from '@mui/material'
import React, { useState } from 'react'

const Index = () => {

  const [sizes, setSizes] = useState();
  const [sizeChartModal, setSizeChartModal] = useState(false);

  return (
    <Box
      sx={{
        flex: 1,
        px: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5vh',
        height: '90vh',
        // overflowY: 'scroll'
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Futura',
          fontSize: ['20px', '23px', '25px'],
          fontWeight: 550
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid inventore, ipsum dolor laborum harum at, illum consectetur amet tempore adipisci in ipsam porro suscipit, esse saepe nostrum minus ullam? Sit.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '1vw',
          border: '1px solid rgba(0, 0, 0, 0.2)',
          width: ['30vw', '25vw', '11vw'],
          p: '3px',
          borderRadius: '10px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography
          sx={{
            pr: '10px',
            fontSize: '12px',
            borderRight: '1px solid rgba(0, 0, 0, 0.2)',
            color: 'rgba(0, 0, 0, 0.5)'
          }}
        >
          <span style={{ fontFamily: 'Rapier', fontSize: '14px' }}>Rogue</span> Ratings
        </Typography>
        <Star
          sx={{
            color: 'green',
            fontSize: '20px'
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          // justifyContent: ''
          alignItems: 'center',
          gap: ['2.5vw', '2vw', '1.5vw']
        }}
      >
        <Box
          sx={{
            display: 'flex',
            // justifyContent: ''
            alignItems: 'center',
            flexDirection: 'row',
            gap: ['1.5vw', '1vw', '0.5vw']
          }}
        >
          <CurrencyRupee />
          <Typography
            sx={{
              fontSize: '20px',
              fontFamily: 'Montserrat'
            }}
          >
            499 /-
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            // justifyContent: ''
            alignItems: 'center',
            flexDirection: 'row',
            gap: '0.5vw',
            color: 'rgba(0, 0, 0, 0.4)'
          }}
        >
          <Typography
            sx={{
              fontSize: '18px',
              fontFamily: 'Montserrat'
            }}
          >
            MRP
          </Typography>
          <Typography
            sx={{
              textDecorationLine: 'line-through',
              textDecorationColor: 'rgba(0, 0, 0, 0.2)',
              fontSize: '18px',
              fontFamily: 'Montserrat'
            }}
          >
            899
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: '20px',
            color: 'orange',
            fontFamily: 'Montserrat'
          }}
        >
          {((499 / 899) * 100).toLocaleString().slice(0, 2)}% Off
        </Typography>
      </Box>
      <Typography
        sx={{
          color: 'green',
          fontFamily: 'Montserrat',
          fontSize: '13px'
        }}
      >
        Inclusive of all taxes
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: ['3vw', '2vw', '1vw']
          }}
        >
          <Chip
            label='S'
            sx={{
              px: '10px',
              fontFamily: 'Montserrat',
              backgroundColor: sizes === 'S' ? 'black' : 'transparent',
              border: ' 1px solid black',
              color: sizes === 'S' ? 'white' : 'black',
              cursor: 'pointer',
              ":hover": {
                backgroundColor: 'black',
                color: 'white'
              }
            }}
            onClick={() => setSizes('S')}
          />

          <Chip
            label='M'
            sx={{
              px: '10px',
              fontFamily: 'Montserrat',
              backgroundColor: sizes === 'M' ? 'black' : 'transparent',
              border: ' 1px solid black',
              color: sizes === 'M' ? 'white' : 'black',
              cursor: 'pointer',
              ":hover": {
                backgroundColor: 'black',
                color: 'white'
              }
            }}
            onClick={() => setSizes('M')}
          />

          <Chip
            label='L'
            sx={{
              px: '10px',
              fontFamily: 'Montserrat',
              backgroundColor: sizes === 'L' ? 'black' : 'transparent',
              border: ' 1px solid black',
              color: sizes === 'L' ? 'white' : 'black',
              cursor: 'pointer',
              ":hover": {
                backgroundColor: 'black',
                color: 'white'
              }
            }}
            onClick={() => setSizes('L')}
          />

          <Chip
            label='XL'
            sx={{
              px: '10px',
              fontFamily: 'Montserrat',
              backgroundColor: sizes === 'XL' ? 'black' : 'transparent',
              border: ' 1px solid black',
              color: sizes === 'XL' ? 'white' : 'black',
              cursor: 'pointer',
              ":hover": {
                backgroundColor: 'black',
                color: 'white'
              }
            }}
            onClick={() => setSizes('XL')}
          />
        </Box>
        <Button
          sx={{
            color: '#85111B',
            fontFamily: 'Montserrat',
            borderRadius: '30px',
            ":hover": {
              backgroundColor: 'transparent'
            }
          }}
          onClick={() => setSizeChartModal(true)}
        >
          Size Chart
        </Button>
      </Box>
      <Box
        sx={{
          height: ['100%', '100%', '40vh'],
          overflowY: 'scroll'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontSize: ['13px', '14px', '15px'],
            wordSpacing: '0.5em',
            fontWeight: 'lighter'
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, pariatur, suscipit nobis inventore quidem eos quia, aliquid laudantium et obcaecati temporibus eaque provident sit soluta dolorem? Dolorem asperiores quod eligendi minus, maxime laboriosam obcaecati molestias nostrum ullam quidem sequi voluptatum facilis voluptatibus fugit accusantium id laudantium nemo odit tempore quae ad! Accusantium rem commodi, accusamus inventore consequuntur soluta vitae nesciunt repellat ex illum nostrum modi tenetur enim in expedita omnis temporibus velit iusto facere nobis! Dicta possimus corrupti alias officiis earum? Sunt provident veniam dolorum ipsum. Quia, praesentium quibusdam accusamus quos illum sapiente ipsa id earum repudiandae eum fugit, commodi delectus adipisci eligendi laudantium, velit ea? Illo voluptate porro accusamus eum laboriosam animi veritatis ad ex, recusandae eos officiis saepe architecto possimus, molestias natus dicta? Sit quam mollitia nisi maxime suscipit eligendi temporibus fugit quibusdam, fuga ipsum quasi! Nisi cum possimus temporibus quasi deserunt. Culpa quaerat enim quasi porro fugit animi inventore eum, odio repudiandae provident, velit dolorem aut, quidem sit non rem saepe fuga eaque minima laboriosam modi asperiores! Culpa in necessitatibus quasi maiores amet reiciendis voluptatem temporibus totam, earum odio quod porro autem cupiditate delectus, accusantium quis? Quod corporis placeat ullam delectus odio odit sint, perspiciatis incidunt consequuntur.
        </Typography>
      </Box>
    </Box>
  )
}

export default Index
