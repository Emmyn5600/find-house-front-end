import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../store/thunk-redux/authThunk';

const Logout = ({ logoutUser, history }) => {
  useEffect(() => {
    logoutUser();
    history.replace('/login');
  }, []);
  return <h1>Loging out...</h1>;
};

Logout.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  logoutUser: () => logoutUser(),
};

export default connect(null, mapDispatchToProps)(Logout);
