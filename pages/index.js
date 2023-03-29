import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button } from '@mui/material'
import { app } from '@/firebase'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  console.log(app);
  const router = useRouter();

  return (
    <Box>
      <Button
        onClick={() => router.push('/terms')}
      >
        Terms
      </Button>
    </Box>
  )
}
