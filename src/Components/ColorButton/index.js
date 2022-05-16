import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black',
  '&:hover': {
    backgroundColor: '#303030',
  },
}));

export default ColorButton;
