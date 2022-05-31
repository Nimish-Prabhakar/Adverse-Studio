import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import CartItemDetails from '../../Components/CartItemDetails';
import {
  getCartItems,
  deleteCartItem,
  addCouponCode,
  cartCheckout,
} from './CartPage.actions';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Loader from '../../Components/Loader';
import { useNavigate } from 'react-router-dom';
import './CartPage.style.css';
import { useDispatch, useSelector } from 'react-redux';
import emptycart1 from '../../assets/img/emptycart.webp';
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
  emptyCartBtn: {
    width: '350px',
    marginTop: '30px',
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
  const [loading, setLoading] = useState(false);
  const [coupunCode, setCouponCode] = useState('');

  const cartItems = useSelector((state) => state.cartPageReducer.cartItems);
  const cartItemStatus = useSelector(
    (state) => state.cartPageReducer.cartItemStatus
  );
  const isSignedIn = useSelector((state) => state.signInPageReducer.isSignedIn);
  const productDetailsGuest = useSelector(
    (state) => state.singleProductPageReducer.productsAddedGuest
  );
  const deleteItemStatus = useSelector(
    (state) => state.cartPageReducer.deleteItemStatus
  );
  const couponDiscountedValue = useSelector(
    (state) => state.cartPageReducer.couponDiscountedValue
  );
  const couponPercentageValue = useSelector(
    (state) => state.cartPageReducer.couponPercentageValue
  );
  const paymentUrl = useSelector((state) => state.cartPageReducer.paymentUrl);

  const homePageHandler = (e) => {
    navigate('/');
  };

  const promoHandler = (e) => {
    e.preventDefault();
    dispatch(addCouponCode(5, coupunCode, 1000));
  };

  const deleteCartItemHandler = (e) => {
    setLoading(true);
    dispatch(deleteCartItem(5, 9, 'S', 'RED'));
  };

  const couponCodeHandler = (e) => {
    setCouponCode(e.target.value);
  };

  const cartCheckoutHandler = (e) => {
    setLoading(true);
    dispatch(cartCheckout(5));
  };

  useEffect(() => {
    dispatch(getCartItems(5));
  }, [deleteItemStatus, dispatch]);

  useEffect(() => {
    setLoading(true);
    dispatch(getCartItems(5));
  }, [dispatch]);

  useEffect(() => {
    setCartItemsDetails(cartItems);
    setLoading(false);
  }, [cartItems]);

  useEffect(() => {
    if (couponDiscountedValue > 0) setPromoCodeApplied(true);
  }, [couponDiscountedValue, couponPercentageValue]);

  useEffect(() => {
    if (paymentUrl !== '') {
      setLoading(false);
      window.location.href = paymentUrl;
    }
  }, [paymentUrl, navigate]);

  useEffect(() => {
    if (cartItemStatus) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [cartItemStatus]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="cartPageWrapper">
          {cartItemsDetails.length > 0 && (
            <>
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
                          deleteHandler={deleteCartItemHandler}
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
                        <>
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
                          <div className="cartPricingDetailsPriceDiscount">
                            <Typography variant="subtitle1" component="div">
                              {`(-${couponPercentageValue}% off)`}
                            </Typography>
                          </div>
                        </>
                      )}
                      {!promoCodeApplied && (
                        <div className="cartPricingDetailsPromo">
                          <input
                            placeholder="PromoCode"
                            className="promoInput"
                            value={coupunCode}
                            onChange={couponCodeHandler}
                          />
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
                        {!promoCodeApplied
                          ? `${totalCost}`
                          : `${couponDiscountedValue}`}
                      </Typography>
                    </div>
                    <div className="cartPricingDetailsBtn">
                      {!isSignedIn ? (
                        <CartModal sx={styles.buyBtn} />
                      ) : (
                        <ColorButton
                          onClick={cartCheckoutHandler}
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
            </>
          )}
          {cartItemsDetails.length === 0 && (
            <div className="emptyCartWrapper">
              <img src={emptycart1} alt="emptycart1" />
              <Typography variant="h4" gutterBottom component="div">
                Your cart is empty
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                Looks like you have not added anything to your cart. Go ahead &
                explore our top categories.
              </Typography>
              <ColorButton
                onClick={() => navigate('/women')}
                sx={styles.emptyCartBtn}
                variant="contained"
              >
                Shop Our Products
              </ColorButton>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default CartPage;
