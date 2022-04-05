import React, { useState } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import './style.css';

function Loader({ loading }) {
  let [color, setColor] = useState('#36D7B7');

  return (
    <div className="loaderWrapper">
      <BounceLoader color={color} loading={loading} size={100} />
    </div>
  );
}

export default Loader;
