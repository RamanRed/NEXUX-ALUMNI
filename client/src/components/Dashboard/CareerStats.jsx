//me
import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StatBar from '../common/StatBar';

const careerStats = [
  { label: 'Employed', value: 85 },
  { label: 'Higher Studies', value: 10 },
  { label: 'Entrepreneurs', value: 5 },
];

function CareerStats() {
  return (
    <Card sx={{ p: 2 }}>
      <CardHeader
        title={
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
            <EmojiEventsIcon sx={{ mr: 1 }} /> Career Success Stats
          </Typography>
        }
      />
      <CardContent>
        {careerStats.map((stat, index) => (
          <div key={index}>
            <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <span>{stat.label}</span>
              <span>{stat.value}%</span>
            </Typography>
            <StatBar value={stat.value} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default CareerStats;
