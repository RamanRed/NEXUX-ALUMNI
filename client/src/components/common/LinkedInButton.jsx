//me
import React from 'react';
import { Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function LinkedInButton({ alumni }) {
  const handleLinkedInConnect = (alumniId) => {
    console.log(`Connecting to LinkedIn for alumni ID: ${alumniId}`);
  };

  return alumni.linkedInConnected ? (
    <Button
      size="small"
      color="primary"
      startIcon={<LinkedInIcon />}
      endIcon={<OpenInNewIcon />}
      href={alumni.linkedIn}
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn Profile
    </Button>
  ) : (
    <Button
      variant="outlined"
      size="small"
      color="primary"
      startIcon={<LinkedInIcon />}
      onClick={() => handleLinkedInConnect(alumni.id)}
    >
      Connect LinkedIn
    </Button>
  );
}

export default LinkedInButton;
