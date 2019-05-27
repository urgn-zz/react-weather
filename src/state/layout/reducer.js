import { SET_ACTIVE_VIEW, SET_ACTIVE_CITY } from './consts';
import VIEWS from '../../layout/views';

const initState = {
  activeView: VIEWS.SETTINGS,
  activeCityIndex: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_ACTIVE_VIEW:
      return { ...state, activeView: action.payload.value, activeCityIndex: 0 };
    case SET_ACTIVE_CITY:
      return { ...state, activeCityIndex: action.payload.value };
    default:
      return state;
  }
};
