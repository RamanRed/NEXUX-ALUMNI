/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, CardContent, CardHeader, Typography, Avatar, Button } from '@mui/material';

export default function MentorshipList({ mentorshipOpportunities }) {
  return (
    <Card>
      <CardHeader title="Mentorship Opportunities" />
      <CardContent>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {mentorshipOpportunities.map((opportunity, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <Avatar src={opportunity.mentorAvatar} alt={opportunity.mentorName}>
                {opportunity.mentorName.charAt(0)}
              </Avatar>
              <div style={{ marginLeft: '16px' }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {opportunity.mentorName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {opportunity.expertise}
                </Typography>
              </div>
              <Button variant="contained" size="small" style={{ marginLeft: 'auto' }}>
                Apply
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
