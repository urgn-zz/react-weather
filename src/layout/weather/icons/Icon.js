import React, { Component } from 'react';
import styled from 'styled-components';
import { TimelineLite } from 'gsap';
import ClearSky from './ClarSky';
import FewClouds from './FewClouds';
import Rain from './Rain';
import Snow from './Snow';
import Mist from './Mist';
import Thunderstorm from './Thunderstorm';

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const BigIcon = styled(IconContainer)`
  && {
    min-height: 300px;
  }
`

export default class Icon extends Component {
  constructor() {
    super();

    this.body = null;
  }

  checkLoaded() {
    const { animated } = this.props;

    if (this.body && animated) {
      this.animate();
    }
  }

  animate() {
    new TimelineLite({ pasued: true })
      .from(this.body, 0, {
        opacity: 0
      })
      .to(this.body, 1, {
        opacity: 1
      })
      .restart();
  }

  render() {
    const { type, small } = this.props;
    const UsedContainer = small ? IconContainer : BigIcon;

    return (
      <UsedContainer
        ref={r => {
          this.body = r;
        }}
      >
        {(() => {
          switch (type) {
            case 'Clear': {
              return <ClearSky {...this.props} />;
            }
            case 'Clouds': {
              return <FewClouds {...this.props} />;
            }
            case 'Rain': {
              return <Rain {...this.props} />;
            }
            case 'Thunderstorm': {
              return <Thunderstorm {...this.props} />;
            }
            case 'Snow': {
              return <Snow {...this.props} />;
            }
            case 'Tornado':
            case 'Squall':
            case 'Ash':
            case 'Sand':
            case 'Fog':
            case 'Dust':
            case 'Haze':
            case 'Smoke':
            case 'Drizzle':
            case 'Mist': {
              return <Mist {...this.props} />;
            }
            default: {
              return `icon for the ${type}`;
            }
          }
        })()}
      </UsedContainer>
    );
  }
}
