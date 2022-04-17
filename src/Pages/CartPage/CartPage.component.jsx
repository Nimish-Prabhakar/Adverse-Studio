import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import CartItemDetails from '../../Components/CartItemDetails';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './CartPage.style.css';

const styles = {
  typography: {
    marginLeft: '8%',
    marginTop: '5%',
  },
  promoBtn: {
    marginLeft: '30px',
  },
  buyBtn: {
    width: '350px',
  },
};

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black',
  '&:hover': {
    backgroundColor: '#303030',
  },
}));

function CartPage() {
  const navigate = useNavigate();

  const [promoCodeApplied, setPromoCodeApplied] = useState(false);

  const homePageHandler = (e) => {
    navigate('/');
  };

  const promoHandler = (e) => {
    setPromoCodeApplied(true);
  };

  return (
    <div className="cartPageWrapper">
      <Typography
        sx={styles.typography}
        variant="h3"
        gutterBottom
        component="div"
      >
        Shopping Cart
      </Typography>
      <div className="cartDetailsContainer">
        <div className="cartItemDetails">
          <CartItemDetails />
          <CartItemDetails />
        </div>
        <div className="cartPricingDetails">
          <div className="squareOutline">
            <div className="cartPricingDetailsContainer">
              <Typography
                sx={styles.typography}
                variant="h3"
                gutterBottom
                component="div"
              >
                Your Order
              </Typography>
              <div className="cartPricingDetailsPrice">
                <Typography
                  sx={styles.typography}
                  variant="h6"
                  gutterBottom
                  component="div"
                >
                  Price
                </Typography>
                <Typography
                  sx={styles.typography}
                  variant="h4"
                  gutterBottom
                  component="div"
                >
                  $400
                </Typography>
              </div>
              <div className="cartPricingDetailsPrice">
                <Typography
                  sx={styles.typography}
                  variant="h6"
                  gutterBottom
                  component="div"
                >
                  Delivery
                </Typography>
                <Typography
                  sx={styles.typography}
                  variant="h4"
                  gutterBottom
                  component="div"
                >
                  $40
                </Typography>
              </div>
              {promoCodeApplied && (
                <div className="cartPricingDetailsPrice">
                  <Typography
                    sx={styles.typography}
                    variant="h6"
                    gutterBottom
                    component="div"
                  >
                    PromoCode
                  </Typography>
                  <Typography
                    sx={styles.typography}
                    variant="h4"
                    gutterBottom
                    component="div"
                  >
                    -$40
                  </Typography>
                </div>
              )}
              {!promoCodeApplied && (
                <div className="cartPricingDetailsPromo">
                  <input placeholder="PromoCode" className="promoInput" />
                  <ColorButton
                    onClick={promoHandler}
                    sx={styles.promoBtn}
                    variant="contained"
                  >
                    Apply
                  </ColorButton>
                </div>
              )}
            </div>
            <hr className="promoDivider" />
            <div className="cartPricingDetailsPrice">
              <Typography
                sx={styles.typography}
                variant="h6"
                gutterBottom
                component="div"
              >
                Result
              </Typography>
              <Typography
                sx={styles.typography}
                variant="h4"
                gutterBottom
                component="div"
              >
                {!promoCodeApplied ? `$440` : `$400`}
              </Typography>
            </div>
            <div className="cartPricingDetailsBtn">
              <ColorButton sx={styles.buyBtn} variant="contained">
                Buy
              </ColorButton>
              <Typography
                sx={{ marginTop: '10px' }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Or
              </Typography>
              <ColorButton
                onClick={homePageHandler}
                sx={styles.buyBtn}
                variant="contained"
              >
                Continue Shopping
              </ColorButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
