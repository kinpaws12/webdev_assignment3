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
import { shallowEqual } from 'react-redux';
import { fetchAllEventsById } from '~/redux/actions/events/Event-actionCreators';
import type { UserEvent } from '~/features/events/types';

type EventStatus = 'BOOKED' | 'PENDING' | 'CANCELLED';

const blocks: { title: string; status: EventStatus }[] = [
  { title: 'Booked Events', status: 'BOOKED' },
  { title: 'Pending Events', status: 'PENDING' },
  { title: 'Cancelled Events', status: 'CANCELLED' },
];

function EventBookings() {
  const dispatch = useAppDispatch();

  const { currentUserId, currentUserEvents, loading, error } = useAppSelector((state) => ({
    currentUserId: state.auth.currentUser?._id,
    currentUserEvents: state.events.currentUserEvents,
    loading: state.events.loading,
    error: state.events.error,  
}), shallowEqual);
  // CheckPoint: DO NOT DELETE
  console.log(` user: ${currentUserId}; loading: ${loading}`);

  useEffect(() => {
    if (!currentUserId || currentUserEvents.length !== 0 || loading) {
      console.log("you reached here! Check what's going wrong!")
      return;
    }
      // CheckPoint: DO NOT DELETE
      console.log("Dispatching fetchOrganizerEvents for", currentUserId);

      const loadUsrEvents = async () => {
        try {
          await dispatch(fetchAllEventsById(currentUserId!));
        } catch (err) {
          console.log(`Failed to fetch user events ${err}`);
        }
      };
      loadUsrEvents();
    }, [currentUserId, currentUserEvents.length, loading, dispatch]);

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

  if (currentUserEvents.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary" textAlign="center">
        Your events history is empty.
      </Typography>
    );
  }

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      {blocks.map(({ title, status }) => {
        const events = currentUserEvents.filter((event: UserEvent) => event.status === status);

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
                    <React.Fragment key={event._id}>
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