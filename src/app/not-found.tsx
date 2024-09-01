'use client';
// pages/404.tsx
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import errorImage from '../assets/images/404Eroor.png';

const NotFound: React.FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Image src={errorImage} alt="Page Not Found" width={300} height={300} />
      </Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Go Back to Home
        </Button>
      </Link>
    </Container>
  );
};

export default NotFound;
