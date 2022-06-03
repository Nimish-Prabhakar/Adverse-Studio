import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { addDeliveryDetails } from './DeliveryDetails.actions';
import './style.css';
import Alert from '@mui/material/Alert';
import addUserAddress from '../../services/addUserAddress.service';

const styles = {
  textField: {
    width: '600px',
    marginBottom: '20px',
  },
  alert: {
    width: '30%',
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
  const dispatch = useDispatch();

  const [deliveryDetails, setDeliveryDetails] = useState({
    email: '',
    fullName: '',
    houseNumber: '',
    street: '',
    landmark: '',
    city: '',
    state: '',
    pincode: '',
    mobileNumber: '',
  });

  const [deliveryDetailsEntered, setDeliveryDetailsEntered] = useState(false);
  const [emptyFieldError, setEmptyFieldError] = useState({
    key: '',
    state: false,
  });

  const isSignedIn = useSelector((state) => state.signInPageReducer.isSignedIn);

  const deliveryDetailsInputHandler = (e) => {
    setDeliveryDetails((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };

  const editDeliveryDetails = () => {
    setDeliveryDetailsEntered(false);
  };

  const deliveryDetailsConfirmHandler = (e) => {
    e.preventDefault();

    if (isSignedIn) {
      delete deliveryDetails.fullName;
      delete deliveryDetails.email;
      delete deliveryDetails.mobileNumber;
    }

    for (let [key, value] of Object.entries(deliveryDetails)) {
      if (value === '') {
        if (key === 'fullName') {
          key = 'Full Name';
        }
        if (key === 'houseNumber') {
          key = 'Flat, House no. or Building';
        }
        if (key === 'mobileNumber') {
          key = 'Mobile Number';
        }
        setEmptyFieldError({ key, state: true });
        return;
      } else {
        setEmptyFieldError({ state: false });
      }
    }

    setDeliveryDetailsEntered(true);
  };

  const deliveryDetailsSubmitHandler = () => {
    const finalDeliveryDetails = {
      address: deliveryDetails.houseNumber,
      area: deliveryDetails.street,
      landmark: deliveryDetails.landmark,
      city: deliveryDetails.city,
      state: deliveryDetails.state,
      pincode: deliveryDetails.pincode,
    };

    dispatch(addUserAddress(5, finalDeliveryDetails));
  };

  return (
    <>
      <div className="deliveryDetailsPageWrapper">
        <div className="deliveryDetailsPageContainer">
          {emptyFieldError.state && (
            <Alert sx={styles.alert} severity="error">
              Please enter your {emptyFieldError.key}
            </Alert>
          )}
          {!deliveryDetailsEntered && (
            <>
              <Typography variant="h6" gutterBottom component="div">
                PLEASE ENTER THE DELIVERY DETAILS
              </Typography>
              <form>
                <div className="deliveryInputFields">
                  {!isSignedIn && (
                    <>
                      <TextField
                        id="standard-basic"
                        label="Email Address"
                        variant="standard"
                        sx={styles.textField}
                        value={deliveryDetails.email}
                        name="email"
                        onChange={deliveryDetailsInputHandler}
                        inputProps={{
                          form: {
                            autocomplete: 'off',
                          },
                        }}
                      />
                      <TextField
                        id="standard-basic"
                        label="Full Name"
                        variant="standard"
                        sx={styles.textField}
                        value={deliveryDetails.fullName}
                        name="fullName"
                        onChange={deliveryDetailsInputHandler}
                        inputProps={{
                          form: {
                            autocomplete: 'off',
                          },
                        }}
                      />
                    </>
                  )}
                  <TextField
                    id="standard-basic"
                    label="Flat, House no., Building, Company, Apartment"
                    variant="standard"
                    sx={styles.textField}
                    value={deliveryDetails.houseNumber}
                    name="houseNumber"
                    onChange={deliveryDetailsInputHandler}
                    inputProps={{
                      form: {
                        autocomplete: 'off',
                      },
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Area, Street. Sector, Village"
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
                  {!isSignedIn && (
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
                  )}
                  <ColorButton
                    onClick={deliveryDetailsConfirmHandler}
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
                {!isSignedIn && (
                  <>
                    <Typography variant="h6" gutterBottom component="div">
                      {deliveryDetails.email}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                      {deliveryDetails.fullName}
                    </Typography>
                  </>
                )}
                <Typography variant="h6" gutterBottom component="div">
                  {deliveryDetails.houseNumber}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  {deliveryDetails.street}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  {deliveryDetails.landmark}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  {deliveryDetails.city}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  {deliveryDetails.state}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  {deliveryDetails.pincode}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  {deliveryDetails.mobileNumber}
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
    </>
  );
}

export default DeliveryDetailsPage;
