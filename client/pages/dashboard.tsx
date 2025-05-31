'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  TextField,
  Stack,
  IconButton,
} from '@mui/material';
import { Edit, Delete, Save } from '@mui/icons-material';
import DashboardLayout from '../layouts/DashboardLayout';

interface Item {
  _id: string;
  name: string;
  description: string;
  price: number;
}

export default function Dashboard() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editPrice, setEditPrice] = useState('');

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';

  const fetchItems = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(res.data);
    } catch (err) {
      console.error('Error fetching items:', err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAddItem = async () => {
    if (!name || !description || !price) return;

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/items`,
        { name, description, price: Number(price) },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setName('');
      setDescription('');
      setPrice('');
      fetchItems();
    } catch (err) {
      console.error('Failed to add item:', err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchItems();
    } catch (err) {
      console.error('Failed to delete item:', err);
    }
  };

  const startEdit = (item: Item) => {
    setEditId(item._id);
    setEditName(item.name);
    setEditDescription(item.description);
    setEditPrice(String(item.price));
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/items/${editId}`,
        {
          name: editName,
          description: editDescription,
          price: Number(editPrice),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEditId(null);
      setEditName('');
      setEditDescription('');
      setEditPrice('');
      fetchItems();
    } catch (err) {
      console.error('Failed to update item:', err);
    }
  };

  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom>
        Product Items
      </Typography>

      <Stack spacing={2} direction="row" my={2}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />
        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleAddItem}>
          + Add Item
        </Button>
      </Stack>

      <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
        <Table>
          <TableHead>
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
                <TableCell>
                  {editId === item._id ? (
                    <TextField
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      size="small"
                    />
                  ) : (
                    item.name
                  )}
                </TableCell>
                <TableCell>
                  {editId === item._id ? (
                    <TextField
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      size="small"
                    />
                  ) : (
                    item.description
                  )}
                </TableCell>
                <TableCell>
                  {editId === item._id ? (
                    <TextField
                      value={editPrice}
                      onChange={(e) => setEditPrice(e.target.value)}
                      type="number"
                      size="small"
                    />
                  ) : (
                    `$${item.price}`
                  )}
                </TableCell>
                <TableCell>
                  {editId === item._id ? (
                    <IconButton color="primary" onClick={handleUpdate}>
                      <Save />
                    </IconButton>
                  ) : (
                    <IconButton color="primary" onClick={() => startEdit(item)}>
                      <Edit />
                    </IconButton>
                  )}
                  <IconButton color="error" onClick={() => handleDelete(item._id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
}
