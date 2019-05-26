import { ADD_LOCATION, REMOVE_LOCATION, REQUEST_LOCATION } from './consts';

const initState = {
  locations: [],
  request: {
    processing: false
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case REQUEST_LOCATION: {
      return { ...state, request: { processing: true } };
    }
    case ADD_LOCATION: {
      const response = action.payload.value;
      const { name, id } = response;
      const locations = state.locations.slice(0);
      locations.push({
        name,
        id
      });
      return { ...state, request: { processing: false }, locations };
    }
    case REMOVE_LOCATION: {
      const { id } = action.payload.value;
      const { locations } = state;
      const index = locations.indexOf(locations.find(l => l.id === id));
      const newLocations = locations.slice(0).splice(index, 1);
      return { ...state, locations: newLocations };
    }
    default:
      return state;
  }
};
