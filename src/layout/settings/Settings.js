import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveView } from '../../state/layout/actions';
import VIEWS from '../views';
// import IntegrationReactSelect from './SelectComponents';

const Settings = props => (
  <div>
    <button
      onClick={() => {
        props.setActiveView(VIEWS.WEATHER);
      }}
    >
      BACK
    </button>
    Settings
  </div>
);

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setActiveView
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
