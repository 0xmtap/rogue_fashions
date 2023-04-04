import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button } from '@mui/material'
import { app } from '@/firebase'
import { useRouter } from 'next/router'
import HeroSection from '../components/HomePage/HeroSection';
import MerchandiseSection from '../components/HomePage/Merchandise';
import CelebLookSection from '../components/HomePage/CelebLook';
import AboutSection from '../components/HomePage/About';
export default function Home() {

  console.log(app);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4vh',
        minHeight: '100vh',
        overflowY: 'hidden',
        overflowX: 'hidden'
      }}
    >
      <HeroSection />
      <MerchandiseSection />
      <CelebLookSection />
      <AboutSection />
    </Box>
  )
}
