import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUserAsync } from '../store/thunk-redux/authThunk';

/* eslint arrow-body-style: */
const Login = ({ loginUser, history, isAuthenticated }) => {
  useEffect(() => {
    if (isAuthenticated) history.replace('/');
    const token = localStorage.getItem('authToken');
    return token ? history.replace('/') : '';
  }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target }) => {
    if (target.name === 'email') {
      setEmail(target.value);
    } else {
      setPassword(target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({ email, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="password"
          required
        />
        <button type="submit"> Login </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  loginUser: (user) => loginUserAsync(user),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
