import { SET_ACTIVE_VIEW } from './consts';
import VIEWS from '../../layout/views';

const initState = {
  activeView: VIEWS.WEATHER
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_ACTIVE_VIEW:
      return { ...state, activeView: action.payload.value };
    default:
      return state;
  }
};
