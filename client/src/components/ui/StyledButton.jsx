import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  backgroundColor: '#1976d2',
  color: 'white',
  '&:hover': {
    backgroundColor: '#155a8a',
  },
});

export default StyledButton;
