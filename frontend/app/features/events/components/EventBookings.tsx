import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Button,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

type EventStatus = 'BOOKED' | 'PENDING' | 'CANCELLED';

interface EventItem {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  status: EventStatus;
  description: string;
  imageUrl: string;
}

export const mockEvents: EventItem[] = [
  {
    id: '1',
    name: 'NYC Music Fest',
    date: '10th March, 2025',
    time: '10:00 AM',
    location: 'Central Park,NYC',
    status: 'BOOKED',
    description: 'Join us for a vibrant music festival at Central Park featuring indie artists, food stalls, and immersive performances.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '2',
    name: 'Picasso & Modern Art Exhibit',
    date: '12th March, 2025',
    time: '3:00PM',
    location: 'ABC Gallery, Paris',
    status: 'PENDING',
    description: 'Join us for a vibrant art exhibit at ABC Gallery featuring indie artists, food stalls, and immersive art.',
    imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '3',
    name: 'Global Tech Innovators Summit',
    date: '12th Oct, 2023',
    time: '3:00 PM',
    location: 'Innovation Hub, New York',
    status: 'CANCELLED',
    description: 'A summit bringing together the brightest minds in technology to discuss innovation and future trends.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  }
];

const blocks: { title: string; status: EventStatus }[] = [
  { title: 'Booked Events', status: 'BOOKED' },
  { title: 'Pending Events', status: 'PENDING' },
  { title: 'Cancelled Events', status: 'CANCELLED' },
];

function EventBookings() {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      {blocks.map(({ title, status }) => {
        const events = mockEvents.filter((e) => e.status === status);

        return (
          <Card key={status} variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>

              {events.length === 0 ? (
                <Typography variant="body2" color="text.secondary">
                  No {title.toLowerCase()}.
                </Typography>
              ) : (
                <List disablePadding>
                  {events.map((ev, idx) => (
                    <React.Fragment key={ev.id}>
                      <ListItem
                        secondaryAction={
                          <Stack direction="column" spacing={1}>
                            <Button variant="outlined" size="small">
                              View Details
                            </Button>
                            {status !== 'CANCELLED' && (
                              <Button variant="text" color="error" size="small">
                                Cancel
                              </Button>
                            )}
                          </Stack>
                        }
                      >
                        <ListItemAvatar>
                          <Avatar
                            variant="rounded"
                            src={ev.imageUrl}
                            sx={{ width: 56, height: 56 }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={ev.name}
                          secondary={`${ev.date} · ${ev.time} · ${ev.location}`}
                        />
                      </ListItem>
                      {idx < events.length - 1 && <Divider component="li" />}
                    </React.Fragment>
                  ))}
                </List>
              )}
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}

export default EventBookings;