//me
import React, { useState } from 'react';
import { Button, TextField, Card, CardContent, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const AddAlumniForm = ({ onAdd }) => {
  const [newAlumni, setNewAlumni] = useState({
    name: '',
    batch: '',
    company: '',
    email: '',
    achievement: '',
    linkedIn: '',
  });

  const handleChange = (e) => {
    setNewAlumni({ ...newAlumni, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newAlumni); // Pass the new alumni details to the parent component
    setNewAlumni({
      name: '',
      batch: '',
      company: '',
      email: '',
      achievement: '',
      linkedIn: '',
    }); // Reset form fields after submission
  };

  return (
    <Card sx={{ margin: '2rem 0', padding: '1rem' }}>
      <CardContent>
        <Typography variant="h6">Add a New Alumni</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={newAlumni.name}
            onChange={handleChange}
            sx={{ marginBottom: '1rem' }}
          />
          <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
            <InputLabel>Batch</InputLabel>
            <Select
              name="batch"
              value={newAlumni.batch}
              onChange={handleChange}
            >
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2019}>2019</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Company"
            name="company"
            value={newAlumni.company}
            onChange={handleChange}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={newAlumni.email}
            onChange={handleChange}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            fullWidth
            label="Achievement"
            name="achievement"
            value={newAlumni.achievement}
            onChange={handleChange}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            fullWidth
            label="LinkedIn URL"
            name="linkedIn"
            value={newAlumni.linkedIn}
            onChange={handleChange}
            sx={{ marginBottom: '1rem' }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Alumni
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddAlumniForm;
