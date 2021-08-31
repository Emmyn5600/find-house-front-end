import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppForm from '../common/AppForm';
import { signupUserAsync } from '../store/thunk-redux/authThunk';
import validationSchema from '../components/validation/userValidation';
import SubmitBtn from '../common/SubmitButton';
import InputForm from '../common/InputForm';
import './Register.css';

const SignUp = (props) => {
  const { currentUser, history } = props;
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const { currentUser, history } = props;
    if (token) history.replace('/');
    return currentUser ? history.replace('/login') : '';
  }, []);
  const handleSubmit = (values) => {
    const { signupUser } = props;
    const { email, password } = values;
    const user = {
      email,
      password,
      name: values.name,
      password_confirmation: values.passwordConfirmation,
    };
    signupUser(user);
  };

  if (currentUser) history.replace('/login');
  return (
    <div className="login">
      <div className="login-triangle" />
      <AppForm
        initialValues={{
          email: '',
          password: '',
          name: '',
          passwordConfirmation: '',
        }}
        onSubmit={handleSubmit}
        validate={validationSchema}
      >
        <form className="login-container">
          <div className="container">
            <h1 className="login-header">Sign up</h1>
          </div>
          <InputForm name="name" placeholder="Name" type="name" />
          <InputForm name="email" placeholder="Email" type="email" />
          <InputForm name="password" placeholder="Password" type="password" />
          <InputForm name="passwordConfirmation" placeholder="Password Confirmation" type="password" />
          <SubmitBtn title="SignUp" />
        </form>
      </AppForm>
      <div className="container signin">
        Already have an account?
        <Link to="/login" className="">
          Sign in here
        </Link>
      </div>
    </div>
  );
};

SignUp.defaultProps = {
  currentUser: null,
};

SignUp.propTypes = {
  signupUser: PropTypes.func.isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any),
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  signupUser: (user) => signupUserAsync(user),
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
