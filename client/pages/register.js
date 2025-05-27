
import { useState } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button, Typography, Link, Alert } from '@mui/material';
import axios from 'axios';
import AuthLayout from '../layouts/AuthLayout'; // ✅ Layout added

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, { name, email, password });
      router.push('/');
    } catch (err) {
      setError(err.response?.data.message || 'Registration failed');
    }
  };

  return (
    <AuthLayout>
      <Typography variant="h5" align="center" gutterBottom>
        Register
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Register
        </Button>
      </form>
      <Typography sx={{ mt: 2 }} align="center">
        Already have an account? <Link href="/">Login</Link>
      </Typography>
    </AuthLayout>
  );
}
