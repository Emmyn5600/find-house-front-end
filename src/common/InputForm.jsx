import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';

const InputForm = ({ type, name, placeholder }) => {
  const { handleChange } = useFormikContext();
  return (
    <input onChange={handleChange} type={type} name={name} placeholder={placeholder} />
  );
};

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputForm;
