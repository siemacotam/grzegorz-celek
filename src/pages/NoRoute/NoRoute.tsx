import { Card, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';

export const NoRoute = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <Typography>UPS</Typography>
      <Typography>Podana sciezka nie istnieje</Typography>
      <Button variant="contained" onClick={() => navigate(-1)}>
        Cofnij
      </Button>
    </Card>
  );
};
