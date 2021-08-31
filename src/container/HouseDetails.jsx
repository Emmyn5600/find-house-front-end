import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { signInUserSuccess } from '../store/actions/actionCreators';
import { loadHousesAsync } from '../store/thunk-redux/housesThunk';
import House from '../components/House';

const HouseDetails = ({
  houses, loadHouses, match, history, signinUser,
}) => {
  const [house, setHouse] = useState(null);
  useEffect(() => {
    const { params } = match;
    const { id } = params;
    const token = localStorage.getItem('authToken');
    if (!token) history.replace('/login');
    if (token) {
      const user = jwtDecode(JSON.parse(token));
      signinUser(user);
    }
    loadHouses();
    const findHouse = houses.find((house) => house.id.toString() === id);
    if (!findHouse) history.replace('/');
    setHouse(findHouse);
  }, []);
  return (

    <>{house && <House house={house} />}</>
  );
};

HouseDetails.propTypes = {
  signinUser: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails);
