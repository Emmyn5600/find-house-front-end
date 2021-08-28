import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';

const SubmitBtn = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <button type="submit" onClick={handleSubmit}>
      {title}
    </button>
  );
};

SubmitBtn.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubmitBtn;
