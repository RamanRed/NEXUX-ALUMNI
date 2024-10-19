/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Button, Box } from '@mui/material';
import { Message as MessageIcon } from '@mui/icons-material';

const AlumniList = ({ alumni, searchTerm }) => {
  // Filter the alumni list based on the search term
  const filteredAlumni = alumni.filter(alum =>
    alum.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <List>
      {filteredAlumni.map((alum, index) => (
        <ListItem
          key={index}
          secondaryAction={
            <Button variant="outlined" startIcon={<MessageIcon />}>
              Connect
            </Button>
          }
        >
          <ListItemAvatar>
            <Avatar src={alum.avatar} alt={alum.name}>
              {alum.name.charAt(0)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={alum.name}
            secondary={
              <Box component="span" sx={{ display: 'block' }}>
                {`${alum.position} at ${alum.company}`}
              </Box>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

AlumniList.propTypes = {
  alumni: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      avatar: PropTypes.string
    })
  ).isRequired,
  searchTerm: PropTypes.string.isRequired
};

export default AlumniList;