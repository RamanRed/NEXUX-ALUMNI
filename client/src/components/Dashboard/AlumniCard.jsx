//me
import React from 'react';
import { Card, CardContent, CardHeader, CardActions, Typography, Avatar, Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LinkedInButton from '../common/LinkedInButton';

function AlumniCard({ alumni }) {
  return (
    <Card sx={{ p: 2, boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            {alumni.name[0]}
          </Avatar>
        }
        title={<Typography variant="h6">{alumni.name}</Typography>}
        subheader={`Class of ${alumni.batch}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          <WorkIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} /> {alumni.company}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <EmailIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} /> {alumni.email}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <EmojiEventsIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} /> {alumni.achievement}
        </Typography>
        <CardActions sx={{ mt: 2 }}>
          <LinkedInButton alumni={alumni} />
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default AlumniCard;
