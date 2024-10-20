//me
import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const events = [
  { id: 1, name: 'Annual Alumni Meet', date: '2023-12-15' },
  { id: 2, name: 'Career Fair', date: '2024-01-20' },
  { id: 3, name: 'Tech Talk Series', date: '2024-02-05' },
];

function EventList() {
  return (
    <Card sx={{ bgcolor: 'primary.light', color: 'white' }}>
      <CardHeader
        title={
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
            <CalendarTodayIcon sx={{ mr: 1 }} /> Upcoming Alumni Events
          </Typography>
        }
      />
      <CardContent>
        <ul>
          {events.map(event => (
            <li key={event.id} style={{ marginBottom: '10px' }}>
              <Typography variant="body1">
                {event.name} - {event.date}
              </Typography>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default EventList;
