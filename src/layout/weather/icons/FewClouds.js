import React, { Component } from 'react';
import { TimelineLite } from 'gsap';
import WhiteCloud from './elements/WhiteCloud';

export default class FewClouds extends Component {
  constructor() {
    super();

    this.body = null;

    this.left = null;
    this.right = null;
  }

  checkLoaded() {
    const { animated } = this.props;

    if (this.left && this.right && animated) {
      this.animate();
    }
  }

  animate() {
    function r() {
      this.restart();
    }

    new TimelineLite({
      pasued: true,
      onComplete: r
    })
      .to(this.right, 10, { x: -40, y: 0 })
      .to(this.right, 8, { x: 0, y: 0 })
      .restart();

    new TimelineLite({
      pasued: true,
      onComplete: r
    })
      .to(this.left, 10, { x: 40, y: 5 })
      .to(this.left, 8, { x: 0, y: 0 })
      .restart();
  }

  render() {
    const { small, ref } = this.props;
    return (
      <>
        {small ? (
          <svg ref={ref} width={50} height={50} viewBox="0 0 75 75">
            <WhiteCloud />
          </svg>
        ) : (
          <svg ref={ref} viewBox="0 0 75 75" width="300">
            <WhiteCloud
              x={0}
              y={20}
              scale={0.5}
              ref={r => {
                this.left = r;
                this.checkLoaded();
              }}
            />
            <WhiteCloud
              x={5}
              ref={r => {
                this.right = r;
                this.checkLoaded();
              }}
            />
          </svg>
        )}
      </>
    );
  }
}
