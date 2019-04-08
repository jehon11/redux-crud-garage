/* eslint-disable import/prefer-default-export */
// TODO: add and export your own actions
const FETCH_CARS = "FETCH_CARS";
const ADD_CAR = "ADD_CAR";


export function fetchCars(garage) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function addCar(brand, model, owner, plate, garage) {
  const body = { brand, model, owner, plate };
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: ADD_CAR,
    payload: promise
  };
}
