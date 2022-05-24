import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import UserAccountBox from '../../Components/UserAccountBox';
import { BsBoxSeam } from 'react-icons/bs';
import { MdOutlineLocationOn } from 'react-icons/md';
import { GoLock } from 'react-icons/go';
import { GiRotaryPhone } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import './style.css';
import { useNavigate } from 'react-router-dom';

const styles = {
  header: {
    marginLeft: '200px',
    marginTop: '50px',
  },
};

const userAccountBoxItems = [
  {
    borderColor: '#ccf3aa',
    icon: <BsBoxSeam className="userAccountBoxIcon" />,
    text: 'Your Orders',
    route: 'previous-orders',
  },
  {
    borderColor: '#71c3f9',
    icon: <GoLock className="userAccountBoxIcon" />,
    text: 'Login & Security',
    route: 'user-profile',
  },
  {
    borderColor: '#ffbb9e',
    icon: <MdOutlineLocationOn className="userAccountBoxIcon" />,
    text: 'Your Address',
    route: 'delivery-details',
  },
  {
    borderColor: '#ffeb9e',
    icon: <GiRotaryPhone className="userAccountBoxIcon" />,
    text: 'Contact Us',
    route: 'contact-us',
  },
];

function UserAccount() {
  const navigate = useNavigate();

  const isSignedIn = useSelector((state) => state.signInPageReducer.isSignedIn);

  useEffect(() => {
    if (!isSignedIn) {
      navigate('/sign-in');
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="userAccountWrapper">
      <Typography sx={styles.header} variant="h4" gutterBottom component="div">
        Your Account
      </Typography>
      <div className="userAccountFlex">
        {userAccountBoxItems.map((item) => {
          return (
            <UserAccountBox
              borderColor={item.borderColor}
              icon={item.icon}
              text={item.text}
              route={item.route}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UserAccount;
