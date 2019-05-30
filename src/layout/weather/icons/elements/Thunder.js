import React, { Component } from 'react';
import { TimelineLite, Bounce } from 'gsap';

export default class Thunder extends Component {
  constructor() {
    super();

    this.tween = null;
    this.ref = null;
  }

  componentWillUnmount() {
    if (this.tween) {
      this.tween.kill();
    }
  }

  refLoaded() {
    this.animate();
  }

  animate() {
    const { animated } = this.props;

    if (animated && this.tween) {
      this.tween = new TimelineLite().from(
        this.ref,
        0.3,
        {
          scale: 0,
          transformOrigin: '50% 0%',
          ease: Bounce.easeOut,
          repeat: -1,
          repeatDelay: 3
        },
        '-=.2'
      );
    }
  }

  render() {
    const { x, y, scale } = this.props;
    return (
      <path
        transform={`translate(${x || 0} ${y || 0}) scale(${scale || 1})`}
        fill="#FF9B00"
        d="M34.9,39.2l-5.1,6.7L29.4,45h4.1h1.2L34,45.9l-4.7,5.8c-0.1,0.1-0.3,0.1-0.4,0
        s-0.1-0.3-0.1-0.4l4.2-6.2l0.5,0.9h-4.1h-1.2l0.7-0.9l5.1-6.7c0.2-0.3,0.6-0.3,0.8-0.1C35,38.6,35.1,39,34.9,39.2z"
        ref={ref => {
          this.ref = ref;
          this.refLoaded();
        }}
      />
    );
  }
}
