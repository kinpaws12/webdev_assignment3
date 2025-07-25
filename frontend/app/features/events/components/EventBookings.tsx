import React, { useEffect } from 'react';
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
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { fetchAllEventsById } from '~/redux/actions/events/Event-actionCreators';
import type { TheEvent } from '~/features/events/types';

type EventStatus = 'BOOKED' | 'PENDING' | 'CANCELLED';

const blocks: { title: string; status: EventStatus }[] = [
  { title: 'Booked Events', status: 'BOOKED' },
  { title: 'Pending Events', status: 'PENDING' },
  { title: 'Cancelled Events', status: 'CANCELLED' },
];

function EventBookings() {
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector(
    (state) => state.auth.currentUser?._id || state.auth.currentUser?.id
  );
  console.log("current user id is: ", currentUserId);

  const rehydrated = useAppSelector((state: any) => state._persist?.rehydrated);
  const { items: allEvents, loading, error } = useAppSelector(
    (state) => state.events
  );

  useEffect(() => {
    if (rehydrated && currentUserId) {
      console.log("Dispatching fetchOrganizerEvents for", currentUserId);
      dispatch(fetchAllEventsById(currentUserId));
    }
  }, [rehydrated, currentUserId, loading, dispatch]);

  if (loading) {
    return (
      <Typography variant="body2" textAlign="center">
        Loading your events…
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography variant="body2" color="error" textAlign="center">
        {error}
      </Typography>
    );
  }

  // Filter events that ONLY belong to this organizer
  const userEvents = allEvents.filter(
    (e: any) =>
      (e as any).organizer_id?._id === currentUserId || e.organizer_id === currentUserId
  );

  if (userEvents.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary" textAlign="center">
        Your events history is empty.
      </Typography>
    );
  }

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      {blocks.map(({ title, status }) => {
        const events = userEvents.filter((e: TheEvent) => e.status === status);

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
                  {events.map((event, idx) => (
                    <React.Fragment key={event.id}>
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
                            src={event.imageUrl ?? "/placeholder.jpg"}
                            sx={{ width: 56, height: 56 }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={event.title}
                          secondary={`${event.date} · ${event.location}`}
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