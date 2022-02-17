import React from 'react';
import { LinkButton } from '../App.js';
const NavigationPage = () => {
  return (
    <div>
      <LinkButton to="/">User status</LinkButton>
      <LinkButton to="/ships">Available Shops</LinkButton>
      <LinkButton to="/market">Marketplace</LinkButton>
    </div>
  );
};

export default NavigationPage;
