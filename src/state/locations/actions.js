import {
  ADD_LOCATION,
  REMOVE_LOCATION,
  REQUEST_LOCATION,
  REQUEST_LOCATION_FAIL
} from './consts';

export const requestLocationAdd = query => {
  return {
    type: REQUEST_LOCATION,
    payload: {
      value: query
    }
  };
};

export const requestLocationAddFail = () => {
  return {
    type: REQUEST_LOCATION_FAIL
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

export const requestLocationAddSuccess = response => {
  const {
    id,
    name,
    sys: { country }
  } = response;
  return dispatch => {
    dispatch(
      addLocation({
        id,
        name,
        country
      })
    );
  };
};
