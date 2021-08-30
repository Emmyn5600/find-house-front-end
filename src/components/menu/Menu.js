import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
/* eslint arrow-body-style: */
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        Home
      </a>
      <a href="/">
        My Rents
      </a>
      <a href="/login">
        Logout
      </a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
