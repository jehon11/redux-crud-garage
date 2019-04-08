import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCars = () => {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="car-item">
            <h3>{car.brand}</h3>
            <p>{car.model}</p>
            <p>{car.owner}</p>
            <p>{car.plate}</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Blog</h3>
          <Link className="btn btn-primary btn-cta" to="/posts/new">
            Add a car
          </Link>
        </div>
        {this.renderCars()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars },
    dispatch
  );
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
    garage: state.garage
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
