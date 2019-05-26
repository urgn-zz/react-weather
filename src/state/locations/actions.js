import { ADD_LOCATION, REMOVE_LOCATION, REQUEST_LOCATION } from './consts';

export const requestLocationAdd = query => {
  return {
    type: REQUEST_LOCATION,
    payload: {
      value: query
    }
  };
};

export const addLocation = location => {
  return {
    type: ADD_LOCATION,
    payload: {
      value: location
    }
  };
};

export const removeLocation = location => {
  return {
    type: REMOVE_LOCATION,
    payload: {
      value: location
    }
  };
};
