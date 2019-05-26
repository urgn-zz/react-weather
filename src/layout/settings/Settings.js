/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveView } from '../../state/layout/actions';
import { requestLocationAdd } from '../../state/locations/actions';
import VIEWS from '../views';
import LocationInput from './locations/LocationInput';

const Settings = props => {
  const { isRequesting } = props;
  return (
    <div>
      <button
        onClick={() => {
          props.setActiveView(VIEWS.WEATHER);
        }}
      >
        BACK
      </button>
      Settings:
      <LocationInput add={props.requestLocationAdd} adding={isRequesting} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    list: state.location.locations,
    isRequesting: state.location.request.processing
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setActiveView,
      requestLocationAdd
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
