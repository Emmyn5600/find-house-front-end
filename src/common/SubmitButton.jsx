import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import '../auth/Register.css';

const SubmitBtn = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <button className="btn1" type="submit" onClick={handleSubmit}>
      {title}
    </button>
  );
};

SubmitBtn.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubmitBtn;
