import React, { useEffect } from 'react';
import dealClick from '../../services/dealPageClick.service';

function SingleProductPage({ getIp }) {
  useEffect(() => {
    dealClick(true)
      .then((resp) => {
        console.log('clicked on deals page', getIp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>hello from deal page</div>;
}

export default SingleProductPage;
