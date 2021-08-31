import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadRentsAsync } from '../store/thunk-redux/rentThunk';
import House from '../components/House';

const Rent = ({
  history, loadRents, houses,
}) => {
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) history.replace('/login');
    loadRents();
  }, []);
  return (
    <>
      {houses.length > 0 ? (
        <div>
          {houses.map((house) => (
            <House house={house} key={house.id} />
          ))}
        </div>
      ) : (
        'List is empty'
      )}
    </>
  );
};

Rent.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  loadRents: PropTypes.func.isRequired,
  houses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.rents.loading,
  houses: state.rents.list.map((rent) => rent.house),
});

const mapDispatchToProps = {
  loadRents: () => loadRentsAsync(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Rent);
