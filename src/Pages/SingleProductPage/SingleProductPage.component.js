import React, { useEffect } from 'react';
import dealClick from '../../services/dealPageClick.service';

function SingleProductPage() {
  useEffect(() => {
    dealClick(true)
      .then((resp) => {
        console.log('clicked on deals page');
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>hello from deal page</div>;
}

export default SingleProductPage;
