import React, { useEffect } from 'react';
import womenClick from '../../services/womenPageClick.service';

function WomenPage({ getIp }) {
  useEffect(() => {
    womenClick(true)
      .then((resp) => {
        console.log('clicked on women page', getIp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>hello from women page</div>;
}

export default WomenPage;
