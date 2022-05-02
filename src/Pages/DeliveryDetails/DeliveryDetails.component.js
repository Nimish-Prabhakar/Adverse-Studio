import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import './style.css';
import { useSelector } from 'react-redux';

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
  const storedDeliveryDetails = useSelector(
    (state) => state.deliveryDetailsPageReducer.deliveryDetails
  );

  const [deliveryDetails, setDeliveryDetails] = useState({
    houseNumber: '',
    street: '',
    landmark: '',
    city: '',
    state: '',
    pincode: '',
    mobileNumber: '',
  });

  const [deliveryDetailsEntered, setDeliveryDetailsEntered] = useState(false);

  const deliveryDetailsInputHandler = (e) => {
    setDeliveryDetails((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };

  const editDeliveryDetails = () => {
    setDeliveryDetailsEntered(false);
  };

  const deliveryDetailsSubmitHandler = (e) => {
    e.preventDefault();

    console.log(deliveryDetails);

    setDeliveryDetailsEntered(true);
  };

  return (
    <div className="deliveryDetailsPageWrapper">
      <div className="deliveryDetailsPageContainer">
        {!deliveryDetailsEntered && (
          <>
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
                  value={deliveryDetails.houseNumber}
                  name="houseNumber"
                  onChange={deliveryDetailsInputHandler}
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
                  value={deliveryDetails.street}
                  name="street"
                  onChange={deliveryDetailsInputHandler}
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
                  value={deliveryDetails.landmark}
                  name="landmark"
                  onChange={deliveryDetailsInputHandler}
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
                  value={deliveryDetails.city}
                  name="city"
                  onChange={deliveryDetailsInputHandler}
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
                  value={deliveryDetails.state}
                  name="state"
                  onChange={deliveryDetailsInputHandler}
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
                  value={deliveryDetails.pincode}
                  name="pincode"
                  onChange={deliveryDetailsInputHandler}
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
                  value={deliveryDetails.mobileNumber}
                  name="mobileNumber"
                  onChange={deliveryDetailsInputHandler}
                  inputProps={{
                    autocomplete: 'Mobile Number',
                    form: {
                      autocomplete: 'off',
                    },
                  }}
                />
                <ColorButton
                  onClick={deliveryDetailsSubmitHandler}
                  variant="contained"
                >
                  Save Delivery Details
                </ColorButton>
              </div>
            </form>
          </>
        )}
        {deliveryDetailsEntered && (
          <>
            <Typography variant="h6" gutterBottom component="div">
              PLEASE CONFIRM YOUR DELIVERY DETAILS
            </Typography>
            <div className="deliveryInputFields">
              <Typography variant="h6" gutterBottom component="div">
                House No./Building Name : {deliveryDetails.houseNumber}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Street : {deliveryDetails.street}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Landmark : {deliveryDetails.landmark}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                City : {deliveryDetails.city}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                State : {deliveryDetails.state}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Pincode : {deliveryDetails.pincode}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Mobile Number : {deliveryDetails.mobileNumber}
              </Typography>
              <div className="confirmEditFlex">
                <ColorButton
                  onClick={editDeliveryDetails}
                  sx={{ width: '100px' }}
                  variant="contained"
                >
                  Edit
                </ColorButton>
                <ColorButton
                  onClick={deliveryDetailsSubmitHandler}
                  sx={{ width: '100px', marginLeft: '30px' }}
                  variant="contained"
                >
                  Confirm
                </ColorButton>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DeliveryDetailsPage;
