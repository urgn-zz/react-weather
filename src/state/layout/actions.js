import { SET_ACTIVE_VIEW, SET_ACTIVE_CITY } from './consts';

export const setActiveView = viewName => {
  return {
    type: SET_ACTIVE_VIEW,
    payload: {
      value: viewName
    }
  };
};

export const setActiveCityIndex = cityIndex => {
  return {
    type: SET_ACTIVE_CITY,
    payload: {
      value: cityIndex
    }
  };
};
