import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useAppSelector } from '~/redux/hooks';

function AccountPage() {
  const user = useAppSelector(state => state.auth.currentUsers);

  if (!user) {
    return <Typography variant="h6">You are not signed in.</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Hello&nbsp;<strong>{user.name}</strong>
        </Typography>

        <Typography variant="h5" gutterBottom>
          Your email is: &nbsp;<strong>{user.email}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AccountPage;