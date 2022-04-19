import React from 'react';
import wrongShop from '../../assets/img/wrongShop.jpeg';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './style.css';

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black',
  '&:hover': {
    backgroundColor: '#303030',
  },
}));

function Page404() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/');
  };

  return (
    <div className="page404Wrapper">
      <img className="page404Img" src={wrongShop} alt="wrongshop" />
      <Typography
        sx={{ fontSize: '8rem', marginBottom: 0 }}
        variant="h1"
        component="div"
        gutterBottom
      >
        404
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        Hey Shopper! Looks like you're heading to a wrong store!
      </Typography>
      <ColorButton
        onClick={onClickHandler}
        sx={{ marginTop: '30px', width: '500px' }}
        variant="contained"
      >
        Take me back to homepage
      </ColorButton>
    </div>
  );
}

export default Page404;
