import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUserAsync } from '../store/thunk-redux/authThunk';
import './Login.css';

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
  if (isAuthenticated) history.replace('/');
  return (
    <div className="login">
      <div className="login-triangle" />
      <h2 className="login-header">Log in</h2>
      <form onSubmit={handleSubmit} className="login-container">
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
        <input type="submit" value="Log in" />
      </form>
      <div className="container signin">
        Do not have an account?
        <Link to="/register" className="">
          Sign Up here
        </Link>
      </div>
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
