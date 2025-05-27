// === client/layouts/AuthLayout.js ===
import { Container, Box, Typography, Paper } from '@mui/material';

export default function AuthLayout({ children }) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome
          </Typography>
          {children}
        </Paper>
      </Box>
    </Container>
  );
}