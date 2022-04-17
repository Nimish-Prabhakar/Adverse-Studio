import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import './style.css';

const styles = {
  textField: {
    width: '600px',
    marginBottom: '20px',
  },
};

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black',
  width: '400px',
  marginTop: '50px',
  '&:hover': {
    backgroundColor: '#303030',
  },
}));

function DeliveryDetailsPage() {
  const [Mno, setMno] = useState('+91  ');

  const onChange = (e) => {
    setMno(e.target.value);
    console.log(Mno);
  };

  return (
    <div className="deliveryDetailsPageWrapper">
      <div className="deliveryDetailsPageContainer">
        <Typography variant="h6" gutterBottom component="div">
          PLEASE ENTER THE DELIVERY DETAILS
        </Typography>
        <form>
          <div className="deliveryInputFields">
            <TextField
              id="standard-basic"
              label="House No./Building Name"
              variant="standard"
              sx={styles.textField}
              inputProps={{
                autocomplete: 'House No./Building Name',
                form: {
                  autocomplete: 'off',
                },
              }}
            />
            <TextField
              id="standard-basic"
              label="Street"
              variant="standard"
              sx={styles.textField}
              inputProps={{
                autocomplete: 'Street',
                form: {
                  autocomplete: 'off',
                },
              }}
            />
            <TextField
              id="standard-basic"
              label="Landmark"
              variant="standard"
              sx={styles.textField}
              inputProps={{
                autocomplete: 'Landmark',
                form: {
                  autocomplete: 'off',
                },
              }}
            />
            <TextField
              id="standard-basic"
              label="City"
              variant="standard"
              sx={styles.textField}
              inputProps={{
                autocomplete: 'City',
                form: {
                  autocomplete: 'off',
                },
              }}
            />
            <TextField
              id="standard-basic"
              label="State"
              variant="standard"
              sx={styles.textField}
              inputProps={{
                autocomplete: 'State',
                form: {
                  autocomplete: 'off',
                },
              }}
            />
            <TextField
              id="standard-basic"
              label="Pincode"
              variant="standard"
              sx={styles.textField}
              inputProps={{
                autocomplete: 'Pincode',
                form: {
                  autocomplete: 'off',
                },
              }}
            />
            <TextField
              id="standard-basic"
              label="Mobile Number"
              variant="standard"
              sx={styles.textField}
              value={Mno}
              onChange={onChange}
              inputProps={{
                autocomplete: 'Mobile Number',
                form: {
                  autocomplete: 'off',
                },
              }}
            />
            <ColorButton variant="contained">Continue</ColorButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeliveryDetailsPage;
