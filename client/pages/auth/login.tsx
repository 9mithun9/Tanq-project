'use client';

import Head from 'next/head';
import { Box, Container } from '@mui/material';
import LoginForm from '../../sections/auth/loginForm'; // or RegisterForm

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login | Tanq MyApp</title>
      </Head>

      {/* Floating Tanq logo */}
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

      {/* 🔥 Black-yellow gradient background */}
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
          <LoginForm /> {/* Or <RegisterForm /> for register.tsx */}
        </Container>
      </Box>

      {/* Floating chat-style icon */}
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
