import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUserAsync } from '../store/thunk-redux/authThunk';

/* eslint arrow-body-style: */
const Login = ({ loginUser }) => {
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
};

const mapDispatchToProps = {
  loginUser: (user) => loginUserAsync(user),
};

export default connect(null, mapDispatchToProps)(Login);
