import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppForm from '../common/AppForm';
import { signupUserAsync } from '../store/thunk-redux/authThunk';
import validationSchema from '../components/validation/userValidation';
import SubmitBtn from '../common/SubmitButton';
import InputForm from '../common/InputForm';

const SignUp = (props) => {
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const { currentUser, history } = props;
    if (token) history.replace('/');
    return currentUser ? history.replace('/login') : '';
  });
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

  const { loading } = props;
  console.log(loading);
  return (
    <div className="login-page-main-container signup d-flex flex-column">
      <div className="login-overlay" />
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
        <form className="">
          <div className="">
            <h1>Sign up</h1>
            <p>
              Hey there, Welcome to EsconnectHouses.
              <br />
              Let&apos;s create an account to start find our house.
            </p>
          </div>
          <InputForm name="name" placeholder="Name" type="name" />
          <InputForm name="email" placeholder="Email" type="email" />
          <InputForm name="password" placeholder="Password" type="password" />
          <InputForm name="passwordConfirmation" placeholder="Password Confirmation" type="password" />
          <SubmitBtn title="SignUp" />
        </form>
      </AppForm>
      <div className="">
        Already have an account?
        <Link to="/login" className="">
          Sign in here
        </Link>
      </div>
    </div>
  );
};

SignUp.defaultProps = {
  loading: false,
  currentUser: null,
};

SignUp.propTypes = {
  signupUser: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  currentUser: PropTypes.objectOf(PropTypes.any),
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  signupUser: (user) => signupUserAsync(user),
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
