import { Box, Button, TextField, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  filterName: string;
  onFilterName: (value: string) => void;
  onNewUser: () => void;
};

export default function UserToolbar({ filterName, onFilterName, onNewUser }: Props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
      sx={{ mb: 3 }}
    >
      <TextField
        label="Search user..."
        variant="outlined"
        value={filterName}
        onChange={(e) => onFilterName(e.target.value)}
        size="small"
      />
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onNewUser}
        sx={{ borderRadius: 2 }}
      >
        New User
      </Button>
    </Stack>
  );
}
