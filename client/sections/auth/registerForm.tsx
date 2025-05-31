'use client';

import {
  Stack,
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Tooltip,
  Divider,
} from '@mui/material';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

export default function RegisterForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      // Replace this with your backend API call
      // await axios.post(...)

      router.push('/login');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
        Tanq account
      </Typography>

      <form onSubmit={handleRegister}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <TextField
            fullWidth
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title={showPassword ? 'Hide password' : 'Show password'}>
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Icon
                        icon={showPassword ? 'eva:eye-off-fill' : 'eva:eye-fill'}
                        width={22}
                        height={22}
                      />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Confirm Password"
            type={showPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button fullWidth type="submit" variant="contained" size="large">
            Create Account
          </Button>

          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Already have an account?{' '}
            <Typography
              component="a"
              href="/auth/login"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              Sign in
            </Typography>
          </Typography>
        </Box>
      </form>
    </Box>
  );
}
