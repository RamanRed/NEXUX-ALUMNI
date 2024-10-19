/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography } from '@mui/material';
import StyledButton from '../ui/StyledButton';
import { Work as WorkIcon, School as SchoolIcon, Message as MessageIcon } from '@mui/icons-material';

const QuickLinks = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Quick Links
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <StyledButton startIcon={<WorkIcon />} fullWidth>
            Job Portal
          </StyledButton>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledButton startIcon={<SchoolIcon />} fullWidth>
            Course Registration
          </StyledButton>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledButton startIcon={<MessageIcon />} fullWidth>
            Alumni Connect
          </StyledButton>
        </Grid>
      </Grid>
    </>
  );
};

export default QuickLinks;
