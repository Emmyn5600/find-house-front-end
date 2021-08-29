import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadRentsAsync } from '../store/thunk-redux/rentThunk';
import House from '../components/House';

const Rent = ({ history, loadRents, rents }) => {
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) history.replace('/login');
    loadRents();
  }, []);
  return (
    <div>
      {rents.map((rent) => {
        /* eslint arrow-body-style: */
        return (
          <House house={rent.house} key={rent.id} rentId={rent.id} />
        );
      })}
    </div>
  );
};

Rent.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  loadRents: PropTypes.func.isRequired,
  rents: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.rents.loading,
  rents: state.rents.list,
});

const mapDispatchToProps = {
  loadRents: () => loadRentsAsync(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Rent);
