'use client';

import Head from 'next/head';
import { Box, Container } from '@mui/material';
import RegisterForm from '../../sections/auth/registerForm';

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Register | Tanq MyApp</title>
      </Head>

      {/* ✅ Floating Tanq logo */}
      <Box
        sx={{
          position: 'fixed',
          top: 24,
          left: 24,
          zIndex: 1000,
        }}
      >
        <img src="/assets/tanq.svg" alt="Tanq Logo" style={{ height: 32 }} />
      </Box>

      {/* ✅ Black to Yellow gradient background */}
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom right, #000000, #FFD700)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Container maxWidth="sm">
          <RegisterForm />
        </Container>
      </Box>

      {/* ✅ Floating support T icon */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          left: 24,
          width: 48,
          height: 48,
          borderRadius: '50%',
          backgroundColor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          boxShadow: 3,
          zIndex: 1000,
          cursor: 'pointer',
        }}
        title="Tanq Support"
      >
        T
      </Box>
    </>
  );
}
