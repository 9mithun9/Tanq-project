import { useEffect, useState } from 'react';
import {
  Box, Typography, Card, CardContent, TextField, Button,
  Grid, IconButton, Alert, TableContainer, Paper,
  Table, TableHead, TableBody, TableRow, TableCell
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import DashboardLayout from '../layouts/DashboardLayout';
import axios from 'axios';

export default function ProductPage() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState('');

  const fetchItems = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setItems(res.data);
    } catch (err) {
      setError('Failed to fetch items');
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      if (editId) {
        const res = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/items/${editId}`,
          { name, description, price: Number(price) },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setItems(items.map((item) => (item._id === editId ? res.data : item)));
        setEditId(null);
      } else {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/items`,
          { name, description, price: Number(price) },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setItems([...items, res.data]);
      }

      setName('');
      setDescription('');
      setPrice('');
    } catch (err) {
      setError(err.response?.data.message || 'Operation failed');
    }
  };

  const handleEdit = (item) => {
    setEditId(item._id);
    setName(item.name);
    setDescription(item.description);
    setPrice(item.price);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(items.filter((item) => item._id !== id));
    } catch (err) {
      setError('Delete failed');
    }
  };

  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom>
        Product Management
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <Card sx={{ mb: 3, p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                label="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                fullWidth
              />
            </Grid>


          <Grid item xs={12} sm={2}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              startIcon={!editId && <span style={{ fontSize: 20 }}>＋</span>}
              sx={{
                height: '100%',
                fontWeight: 600,
                borderRadius: 2,
                background: 'linear-gradient(to right, #000, #FFD700)',
                color: 'black',
                textTransform: 'none',
                '&:hover': {
                  background: 'linear-gradient(to right, #FFD700, #000)',
                },
              }}
            >
              {editId ? 'Update' : 'Add Item'}
            </Button>
          </Grid>




            
          </Grid>
        </form>
      </Card>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f4f6f8' }}>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Price</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEdit(item)}><Edit /></IconButton>
                  <IconButton color="error" onClick={() => handleDelete(item._id)}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
}
