import React from 'react';
import Typography from '@mui/material/Typography';
import PlacedOrder from '../../Components/PlacedOrder';
import './style.css';

const styles = {
  header: {
    marginTop: '80px',
    marginLeft: '80px',
  },
};

function PreviousOrders() {
  return (
    <div className="PreviousOrdersWrapper">
      <Typography sx={styles.header} variant="h4" gutterBottom component="div">
        Your Order History
      </Typography>
      <PlacedOrder />
    </div>
  );
}

export default PreviousOrders;
