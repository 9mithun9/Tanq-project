import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import DashboardLayout from '../layouts/DashboardLayout';
import UserToolbar from '../components/user/UserToolbar';
import UserTable, { UserType } from '../components/user/UserTable';
import { mockUsers } from '../data/mockUsers';

export default function UserPage() {
  const [users, setUsers] = useState<UserType[]>(mockUsers);
  const [filterName, setFilterName] = useState('');

  const handleFilterName = (value: string) => {
    setFilterName(value);
  };

  const handleNewUser = () => {
    alert('You clicked "New User" — implement create user logic here.');
  };

  const handleEdit = (user: UserType) => {
    alert(`Edit user: ${user.name}`);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      <Box sx={{ my: 3 }}>
        <UserToolbar
          filterName={filterName}
          onFilterName={handleFilterName}
          onNewUser={handleNewUser}
        />
        <UserTable users={filteredUsers} onEdit={handleEdit} onDelete={handleDelete} />
      </Box>
    </DashboardLayout>
  );
}
