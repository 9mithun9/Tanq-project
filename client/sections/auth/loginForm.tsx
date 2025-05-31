'use client';

import {
  Stack,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Divider,
  Typography,
  Box,
  Tooltip,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user)); // ✅ Save user
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
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
        Sign in
      </Typography>

      <form onSubmit={handleLogin}>
        <Stack spacing={3}>
          {/* Email */}
          <TextField
            fullWidth
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Forgot password link above password */}
          <Box sx={{ textAlign: 'right' }}>
            <Typography
              component="a"
              href="/forgot-password"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.875rem',
                cursor: 'pointer',
              }}
            >
              Forgot password?
            </Typography>
          </Box>

          {/* Password field with eyelash-style icon */}
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

          {/* Submit button */}
          <Button fullWidth type="submit" variant="contained" size="large">
            Sign In
          </Button>

          {/* Error Message */}
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
        </Stack>

        <Divider sx={{ my: 3 }}>OR</Divider>

        {/* Social login icons */}
        <Stack direction="row" justifyContent="center" spacing={2}>
          <IconButton color="primary">
            <GoogleIcon fontSize="large" />
          </IconButton>
          <IconButton color="primary">
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton color="primary">
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Stack>

        {/* Register link centered at bottom */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Don’t have an account?{' '}
            <Typography
              component="a"
              href="/auth/register"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              Register
            </Typography>
          </Typography>
        </Box>
      </form>
    </Box>
  );
}
