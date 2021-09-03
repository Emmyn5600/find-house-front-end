import React from 'react';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
/* eslint arrow-body-style: */
const Menu = ({ open }) => {
  return (
    <header>
      <nav>
        <StyledMenu open={open}>
          <Link to="/">Home</Link>
          <Link to="/rents">My Rents</Link>
          <Link to="/logout">Logout</Link>
        </StyledMenu>
      </nav>
    </header>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
