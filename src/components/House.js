import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  loadRentsAsync,
  addToRentsAsync,
  removeToRentsAsync,
} from '../store/thunk-redux/rentThunk';

const House = ({
  house,
  rents,
  rentId,
  loadRents,
  addToRents,
  removeToRents,
  currentUser,
}) => {
  useEffect(() => {
    loadRents();
  }, []);

  const rent = rents.find((r) => r.id === rentId
  || (r.house.id === house.id && r.user_id === currentUser.id));
  return (
    <>
      {rent
        || (house && (
          <div className="pm sc-iwsKbI hRZzmY" key={house.id}>
            <div className="border-line" />
            <div className="blocks-container">
              <Card style={{ width: '38rem' }}>
                <Card.Img
                  className="houseimg"
                  variant="top"
                  src={house.image}
                />
                <Card.Body>
                  <Card.Title className="title">{house.name}</Card.Title>
                  <Card.Text className="description">
                    <span>
                      Description:
                      {house.description}
                    </span>
                  </Card.Text>
                  <Card.Text className="price">
                    <span>
                      Price: $
                      {house.price}
                    </span>
                  </Card.Text>
                  {rent ? (
                    <Button
                      className="button"
                      onClick={() => removeToRents(rent.id)}
                    >
                      REMOVE TO RENT
                    </Button>
                  ) : (
                    <Button
                      className="button"
                      onClick={() => addToRents(house)}
                    >
                      ADD TO RENT
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
    </>
  );
};

House.defaultProps = {
  rents: [],
  rentId: null,
};

House.propTypes = {
  house: PropTypes.objectOf(PropTypes.any).isRequired,
  rents: PropTypes.arrayOf(PropTypes.any),
  rentId: PropTypes.number,
  addToRents: PropTypes.func.isRequired,
  removeToRents: PropTypes.func.isRequired,
  loadRents: PropTypes.func.isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.rents.loading,
  currentUser: state.auth.currentUser,
  rents: state.rents.list,
});

const mapDispatchToProps = {
  addToRents: (house) => addToRentsAsync(house),
  removeToRents: (rentId) => removeToRentsAsync(rentId),
  loadRents: () => loadRentsAsync(),
};

export default connect(mapStateToProps, mapDispatchToProps)(House);