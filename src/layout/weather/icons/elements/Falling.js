import React, { Component } from 'react';
import { TimelineLite, Linear } from 'gsap';

export default class Snow extends Component {
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

  animate() {
    const { animated, posX, posY, rotation, speed } = this.props;

    if (!animated || !this.ref) {
      return;
    }

    this.tween = new TimelineLite();
    const flakes = this.ref.childNodes;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < flakes.length; i++) {
      this.tween.to(
        flakes[i],
        speed + i * speed * 0.1,
        {
          rotation: rotation + rotation * i,
          y: posY,
          x: posX,
          alpha: 0,
          repeatDelay: 0.1,
          repeat: -1,
          ease: Linear.easeNone
        },
        i * 0.2
      );
    }
  }

  render() {
    const { children, x, y, scale } = this.props;
    return (
      <g
        transform={`translate(${x || 0} ${y || 0}) scale(${scale || 1})`}
        ref={ref => {
          this.ref = ref;
          this.animate();
        }}
      >
        {children}
      </g>
    );
  }
}
