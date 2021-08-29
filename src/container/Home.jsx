import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import { useOnClickOutside } from '../hooks';
import { GlobalStyles } from '../helper/global';
import { theme } from '../helper/theme';
import { Burger, Menu } from '../components';
import { signInUserSuccess } from '../store/actions/actionCreators';
import { loadHousesAsync } from '../store/thunk-redux/housesThunk';
import './Home.css';

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
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Burger setOpen={handleToggleMenu} open={open} />
        <Menu open={open} />
        {houses.map((house) => {
          /* eslint arrow-body-style: */
          return (
            <div className="pm sc-iwsKbI hRZzmY" key={house.id}>
              <div className="border-line" />
              <div className="blocks-container">
                <Card style={{ width: '38rem' }}>
                  <Card.Img className="houseimg" variant="top" src={house.image} />
                  <Card.Body>
                    <Card.Title className="title">{house.name}</Card.Title>
                    <Card.Text className="description">
                      <span>
                        Description:
                        {house.description}
                      </span>
                    </Card.Text>
                    <Card.Text className="price">
                      <span>
                        Price: $
                        {house.price}
                      </span>
                    </Card.Text>
                    <Button className="button">ADD TO RENT</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
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
