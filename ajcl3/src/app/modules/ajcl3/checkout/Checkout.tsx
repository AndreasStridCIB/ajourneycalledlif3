import React from 'react';
import { COACH_LINK } from 'src/app/utils/constants';

export const Checkout: React.FC = () => {
  const openLink = () => {
    window.open(COACH_LINK, '_blank'); // '_blank' opens the URL in a new tab
  };

  return <div>{/* <button onClick={openLink}> Pay Coach </button> */}</div>;
};
