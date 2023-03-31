import { Box, Button, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Index = () => {
    return (
        <Box
            sx={{
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
                <Box
                    // flex={1}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start'
                    }}
                >
                    <Image
                        src={'/images/genz.jpg'}
                        width={800}
                        height={500}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        mb: 0.5
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',

                        }}
                    >
                        <Image
                            src={'/images/genz6.jpg'}
                            width={350}
                            height={150}
                            style={{
                                objectFit: 'cover'
                            }}
                        />
                        <Image
                            src={'/images/genz5.webp'}
                            width={150}
                            height={150}
                            style={{
                                objectFit: 'cover'
                            }}
                        />

                    </Box>
                    <Image
                        src={'/images/genz3.jpg'}
                        width={500}
                        height={350}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Image
                        src={'/images/genz4.jpg'}
                        width={236}
                        height={350}
                    />
                    <Image
                        src={'/images/genz2.jpg'}
                        width={236}
                        height={150}
                        style={{
                            objectFit: 'cover'
                        }}
                    />
                </Box>
                {/* <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Futura',
                                fontSize: '30px',

                            }}
                        >
                            Go <span>Rogue</span>, Go GenZ
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                        }}
                    >
                        <Image
                            src={'/images/genz2.jpg'}
                            width={200}
                            height={300}
                        />
                        
                    </Box>
                </Box> */}
            </Box>

            <Box
                position={'absolute'}
                top={'30%'}
                left={'40%'}
                sx={{
                    fontSize: '70px',
                    color: 'white',
                    fontFamily: 'Rapier',
                    textAlign: 'center'
                }}
            >
                <motion.Typography
                    initial={{ opacity: 0, left: '10%' }}
                    animate={{ opacity: 1, left: '40%' }}
                    transition={{ delay: 0.5 }}
                >
                    Go Rogue, <br />Go GenZ
                </motion.Typography>
            </Box>

            <Box
                position={'absolute'}
                bottom={'1%'}
            >
                <Button
                    sx={{
                        textDecorationLine: 'underline',
                        textDecorationColor: 'white',
                        color: 'white',
                        zIndex: 99,
                        ":hover": {
                            textDecorationLine: 'underline',
                            textDecorationColor: 'white',
                        }
                    }}
                >
                    Browse Our Collections
                </Button>
                <Box
                    position={'absolute'}
                    height={'20px'}
                    width={'200px'}
                    // bgcolor={'#85111B'}
                    // zIndex={-1}
                    left={'9%'}
                    bottom={'15%'}
                    sx={{
                        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
                    }}
                >

                </Box>
            </Box>
        </Box>
    )
}

export default Index
