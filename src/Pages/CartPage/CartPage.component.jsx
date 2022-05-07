import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import CartItemDetails from '../../Components/CartItemDetails';
import { getCartItems, deleteCartItem } from './CartPage.actions';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './CartPage.style.css';
import { useDispatch, useSelector } from 'react-redux';
import CartModal from './CartModal';

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
  const dispatch = useDispatch();

  const [promoCodeApplied, setPromoCodeApplied] = useState(false);
  const [cartItemsDetails, setCartItemsDetails] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const cartItems = useSelector((state) => state.cartPageReducer.cartItems);
  const isSignedIn = useSelector((state) => state.signInPageReducer.isSignedIn);
  const productDetailsGuest = useSelector(
    (state) => state.singleProductPageReducer.productsAddedGuest
  );

  const homePageHandler = (e) => {
    navigate('/');
  };

  const promoHandler = (e) => {
    setPromoCodeApplied(true);
  };

  const totalCostCalculator = (items) => {
    let cost = 0;
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        cost += items[i].cost;
      }
    } else {
      return 0;
    }
    return cost;
  };

  const deleteCartItemHandler = () => {
    dispatch(deleteCartItem(5, 9, 'S', 'RED'));
  };

  useEffect(() => {
    dispatch(getCartItems(5));
  }, [dispatch]);

  useEffect(() => {
    setCartItemsDetails(cartItems);
    setTotalCost(totalCostCalculator(cartItems));
  }, [cartItems]);

  console.log(productDetailsGuest);

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
          {cartItemsDetails.map((item) => {
            return (
              <>
                <CartItemDetails
                  name={item.product_name}
                  image={item.display_image_url}
                  price={item.cost}
                  size={item.size}
                  color={item.color}
                  description={item.description}
                />
              </>
            );
          })}
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
                  &#8377;{totalCost}
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
                  &#8377;{totalCost >= 1000 ? 0 : 200}
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
                    -&#8377;400
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
                {!promoCodeApplied ? `${totalCost}` : `1100`}
              </Typography>
            </div>
            <div className="cartPricingDetailsBtn">
              {!isSignedIn ? (
                <CartModal sx={styles.buyBtn} />
              ) : (
                <ColorButton
                  onClick={homePageHandler}
                  sx={styles.buyBtn}
                  variant="contained"
                >
                  Buy
                </ColorButton>
              )}
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
