import '@/styles/globals.css'
import { useEffect, useState } from 'react';
import ProgressBar from '@badrap/bar-of-progress';
import { Router } from 'next/router';
import Navbar from '../components/commons/Navbar';
import { Box } from '@mui/material';
import Footer from '../components/commons/Footer';

export default function App({ Component, pageProps }) {
  const [child, setChild] = useState();

  useEffect(() => {
    setChild(true);
  }, []);

  if (!child) {
    return null;
  }

  const progress = new ProgressBar({
    size: 3,
    // color: '#044C59',
    color: '#85111D',
    className: 'z-50',
    delay: 100
  });

  Router.events.on('routeChangeStart', progress.start);
  Router.events.on('routeChangeComplete', progress.finish);
  Router.events.on('routeChangeError', progress.finish);

  return (
    <Box
      sx={{
        maxWidth: '100vw',
        overflowX: 'hidden'
      }}
    >
      <Navbar />
      <Box
        mt={8.5}
      >
        <Component {...pageProps} />
      </Box>
      <Footer />
    </Box>
  )
}
