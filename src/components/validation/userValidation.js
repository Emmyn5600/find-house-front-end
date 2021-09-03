const validationSchema = (values) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const errors = {};
  const {
    email, password, name, passwordConfirmation,
  } = values;
  if (email.trim() === '') {
    errors.email = 'Email is required';
  }
  if (password.trim() === '') {
    errors.password = 'Password is required';
  }
  if (passwordConfirmation.trim() === '') {
    errors.passwordConfirmation = 'Password confirmation is required';
  }

  if (name.trim() === '') {
    errors.firstname = 'name is required';
  }

  if (password.trim() !== passwordConfirmation.trim()) {
    errors.passwordConfirmation = 'Passwords must match';
  }
  if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (!emailRegex.test(email)) {
    errors.email = 'Enter valid email';
  }

  if (name.length < 3) {
    errors.password = 'name must be at least 4 characters';
  }
  return errors;
};
export default validationSchema;
