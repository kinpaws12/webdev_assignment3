import * as React from 'react';
import { Box } from '@mui/material';
import ProfileSidebar from './ProfileSidebar';
import ProfileMainContent from './ProfileMainContent';

const SECTIONS = ['User Information', 'Event Bookings', 'Calendar', 'Chat Room'] as const;
type Section = typeof SECTIONS[number];

export default function ProfileDashboard() {
  const [selected, setSelected] = React.useState<Section>('User Information');

  return (
    <Box sx={{ display: 'flex', minHeight: '70vh', gap: 4 }}>
      <ProfileSidebar selected={selected} onSelect={setSelected} />
      <Box sx={{ flex: 1 }}>
        <ProfileMainContent section={selected} />
      </Box>
    </Box>
  );
}
