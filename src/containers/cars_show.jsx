import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// eslint-disable-next-line react/prefer-stateless-function
class CarsShow extends Component {
  render() {
    const { car } = this.props;
    return (
      <div>
        {car.brand}
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { fetchCars },
//     dispatch
//   );
// }

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id);
  return {
    car: state.cars.find((car) => car.id === id),
  };
};

export default connect(mapStateToProps)(CarsShow);
