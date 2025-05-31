'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Logo } from '@/components/logo';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import ArticleIcon from '@mui/icons-material/Article';
import LogoutIcon from '@mui/icons-material/Logout';

import Link from 'next/link';
import { ReactNode } from 'react';

const drawerWidth = 240;

const navItems = [
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { label: 'User', icon: <PeopleIcon />, path: '/user' },
  { label: 'Product', icon: <StoreIcon />, path: '/product' },
  { label: 'Logout', icon: <LogoutIcon />, path: '/logout' }
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '' });

  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          setUserData({ name: user.name || '', email: user.email || '' });
        } catch (e) {
          console.error('Failed to parse user from localStorage:', e);
        }
      }
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
      {/* Logo */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Logo sx={{ height: 40 }} />
      </Box>

      {/* User Info */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Avatar
          src="/assets/avatar_1.jpg"
          alt="User Avatar"
          sx={{ width: 64, height: 64, mx: 'auto', mb: 1 }}
        />
        <Typography variant="subtitle1">{userData.name || 'User'}</Typography>
        <Typography variant="caption" color="text.secondary">
          {userData.email || 'user@example.com'}
        </Typography>
      </Box>

      {/* Navigation Links */}
      <List>
        {navItems.map((item) => (
          <Link href={item.path} key={item.label} passHref legacyBehavior>
            <ListItemButton selected={router.pathname === item.path}>
              <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: 1,
          bgcolor: 'transparent',
          background: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Logo sx={{ height: 32 }} />
          <Box>
            <IconButton color="inherit">
              <LanguageIcon />
            </IconButton>
            <IconButton color="inherit">
              <NotificationsNoneIcon />
            </IconButton>
            <IconButton color="inherit">
              <Avatar src="/assets/avatar_1.jpg" sx={{ width: 32, height: 32 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              bgcolor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              bgcolor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              backdropFilter: 'blur(12px)',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
          background: 'linear-gradient(to bottom right, #000000, #FFD700)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
