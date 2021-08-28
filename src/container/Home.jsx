import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import FigureCaption from 'react-bootstrap/FigureCaption';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import { useOnClickOutside } from '../hooks';
import { GlobalStyles } from '../helper/global';
import { theme } from '../helper/theme';
import { Burger, Menu } from '../components';
import { signInUserSuccess } from '../store/actions/actionCreators';
import { loadHousesAsync } from '../store/thunk-redux/housesThunk';

function Home({
  history, signinUser, loadHouses, houses,
}) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) history.replace('/login');
    if (token) {
      const user = jwtDecode(JSON.parse(token));
      signinUser(user);
    }
    loadHouses();
  }, []);
  useOnClickOutside(node, () => setOpen(false));
  const handleToggleMenu = (state) => {
    setOpen(state);
  };
  console.log(houses);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Burger setOpen={handleToggleMenu} open={open} />
        <Menu open={open} />
        <h1>Find My House</h1>
        <Figure>
          <FigureImage
            width={450}
            height={485}
            alt="171x180"
            src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
          />
          <FigureCaption>
            You are looking for awesome house in Rwanda.
            Keep calm you get what you are looking for.
          </FigureCaption>
        </Figure>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}

Home.propTypes = {
  signinUser: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  loadHouses: PropTypes.func.isRequired,
  houses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.houses.loading,
  houses: state.houses.list,
});

const mapDispatchToProps = {
  signinUser: (user) => signInUserSuccess(user),
  loadHouses: () => loadHousesAsync(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);