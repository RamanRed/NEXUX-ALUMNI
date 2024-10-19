/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@mui/material/TextField';
import { Search } from '@mui/icons-material';

export default function SearchBar({ searchTerm, handleSearch }) {
  return (
    <div className="mb-6">
      <TextField
        variant="outlined"
        placeholder="Search alumni..."
        value={searchTerm}
        onChange={handleSearch}
        className="max-w-sm"
        InputProps={{
          startAdornment: (
            <Search className="h-4 w-4 text-muted-foreground" />
          ),
        }}
        fullWidth
      />
    </div>
  );
}
