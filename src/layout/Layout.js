import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveView } from '../state/layout/actions';
import VIEWS from './views';
import Settings from './settings/Settings';
import Slider from './slider/Slider';

const LayoutContainer = styled.div`
  display: flex;
  background-color: #37393f;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
`;

const Layout = props => {
  const {
    layout: { activeView }
  } = props;

  return (
    <LayoutContainer>
      {activeView === VIEWS.SETTINGS && <Settings />}
      {activeView === VIEWS.WEATHER && <Slider />}
    </LayoutContainer>
  );
};

function mapStateToProps(state) {
  return {
    layout: state.layout
  };
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
)(Layout);
