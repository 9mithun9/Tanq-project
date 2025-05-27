
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Button,
  IconButton,
  Alert,
  Paper,
  TableContainer
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';
import DashboardLayout from '../layouts/DashboardLayout'; // ✅ Layout added

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/');
      return;
    }

    const fetchItems = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setItems(res.data);
      } catch (err) {
        setError('Failed to fetch items');
      }
    };
    fetchItems();
  }, [router]);

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
      setError(err.response?.data.message || 'Delete failed');
    }
  };

  return (
    <DashboardLayout>
      <Typography variant="h5" gutterBottom>
        Item Management
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
        <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth margin="normal" />
        <TextField label="Price" value={price} onChange={(e) => setPrice(e.target.value)} fullWidth margin="normal" type="number" />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          {editId ? 'Update Item' : 'Add Item'}
        </Button>
      </form>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(item)}><Edit /></IconButton>
                  <IconButton onClick={() => handleDelete(item._id)}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
}
