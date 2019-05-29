import React, { Component } from 'react';
import { TimelineLite, Linear } from 'gsap';

export default class Fog extends Component {
  constructor() {
    super();

    this.ref = null;
    this.tween = null;
  }

  componentWillUnmount() {
    if (this.tween) {
      this.tween.kill();
    }
  }

  animate() {
    const { animated, speed, stagger, repeatDelay } = this.props;

    if (!animated || !this.ref) {
      return;
    }

    this.tween = new TimelineLite();
    const winds = this.ref.childNodes;

    for (let i = 0; i < winds.length; i++) {
      this.tween.from(
        winds[i],
        speed,
        {
          scaleX: 0.0,
          ease: Linear.easeNone,
          repeat: -1,
          repeatDelay,
          alpha: 0,
          yoyo: true
        },
        i * stagger
      );
    }
    this.tween.restart();
  }

  render() {
    return (
      <g
        ref={ref => {
          this.ref = ref;
          this.animate();
        }}
      >
        <line
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="41"
          y1="10"
          x2="56"
          y2="10"
          data-svg-origin="41 35.70000076293945"
          style={{
            opacity: 1,
            transform:
              'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);'
          }}
        />

        <line
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="37"
          y1="15"
          x2="52.3"
          y2="15"
          data-svg-origin="37 39.20000076293945"
          style={{
            opacity: 1,
            transform:
              'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.5, 0, 0, 1);'
          }}
        />

        <line
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="22.6"
          y1="20"
          x2="52.3"
          y2="20"
          data-svg-origin="22.600000381469727 42.70000076293945"
          style={{
            opacity: 1,
            transform:
              'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1.5, 0, 0, 1);'
          }}
        />

        <line
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="19.9"
          y1="25"
          x2="56"
          y2="25"
          data-svg-origin="19.899999618530273 46.099998474121094"
          style={{
            opacity: 1,
            transform:
              'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 1);'
          }}
        />

        <line
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="19.2"
          y1="30"
          x2="54.7"
          y2="30"
          data-svg-origin="19.200000762939453 49.599998474121094"
          style={{
            opacity: 0.85,
            transform:
              'matrix3d(0.85, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 3, 0, 0, 1);'
          }}
        />

        <line
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="22.6"
          y1="35"
          x2="52.3"
          y2="35"
          data-svg-origin="22.600000381469727 53.099998474121094"
          style={{
            opacity: 0.7,
            transform:
              'matrix3d(0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5, 0, 0, 1);'
          }}
        />

        <line
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="25.5"
          y1="40"
          x2="50.7"
          y2="40"
          data-svg-origin="25.5 56.599998474121094"
          style={{
            opacity: 0.75,
            transform:
              'matrix3d(0.75, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 7, 0, 0, 1);'
          }}
        />

        <line
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="27.8"
          y1="45"
          x2="50"
          y2="45"
          data-svg-origin="27.799999237060547 60.099998474121094"
          style={{
            opacity: 0.65,
            transform:
              'matrix3d(0.65, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 8, 0, 0, 1);'
          }}
        />
        <line
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="44.2"
          y1="50"
          x2="50.8"
          y2="50"
          data-svg-origin="44.20000076293945 32.20000076293945"
          style={{
            opacity: 0.9,
            transform:
              'matrix3d(0.9, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1.6, 0, 0, 1)'
          }}
        />
      </g>
    );
  }
}
