import React, { useState } from 'react';
import { Card, CardContent, Typography, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import AlumniCard from '../components/Dashboard/AlumniCard';
import EventList from '../components/Dashboard/EventList';
import CareerStats from '../components/Dashboard/CareerStats';
import AddAlumniForm from '../components/Dashboard/AddAlumniForm';
import SearchBar from '../components/ui/SearchBar';

const initialAlumniData = [
  { id: 1, name: 'John Doe', batch: 2020, company: 'Tech Corp', email: 'john@example.com', achievement: 'Promoted to Senior Developer', linkedIn: 'https://www.linkedin.com/in/johndoe', linkedInConnected: true },
  { id: 2, name: 'Jane Smith', batch: 2019, company: 'Innovate Inc', email: 'jane@example.com', achievement: 'Published research paper', linkedIn: 'https://www.linkedin.com/in/janesmith', linkedInConnected: true },
  { id: 3, name: 'Bob Johnson', batch: 2021, company: 'Future Systems', email: 'bob@example.com', achievement: 'Started a successful startup', linkedIn: '', linkedInConnected: false },
];

export default function CollegeDashboard() {
  const [selectedBatch, setSelectedBatch] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [alumniData, setAlumniData] = useState(initialAlumniData);

  const handleAddAlumni = (newAlumni) => {
    const updatedAlumniData = [...alumniData, { ...newAlumni, id: alumniData.length + 1, linkedInConnected: !!newAlumni.linkedIn }];
    setAlumniData(updatedAlumniData);
  };

  const filteredAlumni = alumniData
    .filter(alumni => selectedBatch === 'all' || alumni.batch.toString() === selectedBatch)
    .filter(alumni => alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                      alumni.company.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={{ padding: '2rem', background: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        PCCOE Alumni Dashboard
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        Connecting Past, Present, and Future
      </Typography>

      <AddAlumniForm onAdd={handleAddAlumni} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        <div>
          <Card>
            <CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                  <InputLabel>Batch</InputLabel>
                  <Select
                    value={selectedBatch}
                    onChange={(e) => setSelectedBatch(e.target.value)}
                    label="Batch"
                  >
                    <MenuItem value="all">All Batches</MenuItem>
                    <MenuItem value="2021">2021</MenuItem>
                    <MenuItem value="2020">2020</MenuItem>
                    <MenuItem value="2019">2019</MenuItem>
                  </Select>
                </FormControl>

                <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>

              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {filteredAlumni.map(alumni => (
                  <AlumniCard key={alumni.id} alumni={alumni} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div style={{ display: 'grid', gap: '2rem' }}>
          <EventList />
          <CareerStats />
        </div>
      </div>
    </div>
  );
}
