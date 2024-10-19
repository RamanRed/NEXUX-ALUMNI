/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Avatar, Button, Card, CardHeader, CardContent } from '@mui/material';
import { Event as EventIcon, Work as WorkIcon, School as SchoolIcon, Group as GroupIcon } from '@mui/icons-material';

const UpcomingEventsList = ({ upcomingEvents }) => {
  return (
    <Card>
      <CardHeader title="Upcoming Alumni Events" />
      <CardContent>
        <List>
          {upcomingEvents.map((event, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  {event.type === 'career' && <WorkIcon />}
                  {event.type === 'education' && <SchoolIcon />}
                  {event.type === 'networking' && <GroupIcon />}
                  {event.type === 'event' && <EventIcon />} {/* Add icon for general events */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={event.title}
                secondary={`${event.date} - ${event.location}`}
              />
              <ListItemSecondaryAction>
                <Button variant="contained" color="primary">
                  Register
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UpcomingEventsList;
