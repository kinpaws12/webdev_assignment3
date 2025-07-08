import React from 'react';
import { Card, Typography, Container } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { useAppSelector } from '~/redux/hooks';

function AccountPage() {
  const user = useAppSelector(state => state.auth.currentUser);

  if (!user) {
    return <Typography variant="h6">You are not signed in.</Typography>;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Card sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          My Account
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="textSecondary">
              Name
            </Typography>
            <Typography variant="h6">{user.name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="textSecondary">
              Email
            </Typography>
            <Typography variant="h6">{user.email}</Typography>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default AccountPage;