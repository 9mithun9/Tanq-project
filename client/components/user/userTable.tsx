import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  Paper
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

export type UserType = {
  id: string;
  name: string;
  company: string;
  role: string;
  status: 'active' | 'banned';
  avatarUrl: string;
};

type Props = {
  users: UserType[];
  onEdit: (user: UserType) => void;
  onDelete: (id: string) => void;
};

export default function UserTable({ users, onEdit, onDelete }: Props) {
  return (
    <TableContainer component={Paper} elevation={1}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#F4F6F8' }}>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Company</strong></TableCell>
            <TableCell><strong>Role</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
            <TableCell align="right"><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar src={user.avatarUrl} alt={user.name} sx={{ mr: 2 }} />
                  <Typography>{user.name}</Typography>
                </Box>
              </TableCell>
              <TableCell>{user.company}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Chip
                  label={user.status === 'active' ? 'Active' : 'Banned'}
                  color={user.status === 'active' ? 'success' : 'error'}
                  size="small"
                />
              </TableCell>
              <TableCell align="right">
                <Tooltip title="Edit">
                  <IconButton color="primary" onClick={() => onEdit(user)}>
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton color="error" onClick={() => onDelete(user.id)}>
                    <Delete />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
