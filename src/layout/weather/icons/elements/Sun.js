import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

export default class Sun extends Component {
  constructor() {
    super();

    this.outer = null;
    this.middle = null;
  }

  checkLoaded() {
    if (this.outer && this.middle) {
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
      .to(this.outer, 3, { scale: 1 })
      .to(this.outer, 3, { scale: 0.9 })
      .to(this.outer, 3, { scale: 1 })
      .restart();

    new TimelineLite({
      pasued: true,
      onComplete: r
    })
      .to(this.middle, 6, { scale: 0.9 })
      .to(this.middle, 6, { scale: 1.1 })
      .to(this.middle, 6, { scale: 0.9 })
      .restart();
  }

  render() {
    return (
      <svg viewBox="0 0 70 70" {...this.props}>
        <g data-svg-origin="35 35">
          <circle
            fill="#FFE499"
            cx="35"
            cy="35"
            r="23.5"
            data-svg-origin="35 35"
            ref={r => {
              this.outer = r;
              this.checkLoaded();
            }}
          />
        </g>
        <g data-svg-origin="35 35">
          <circle
            fill="#FFD766"
            cx="35"
            cy="35"
            r="18.1"
            data-svg-origin="35 35"
            ref={r => {
              this.middle = r;
              this.checkLoaded();
            }}
          />
        </g>
        <g>
          <circle
            fill="#FFBC00"
            cx="35"
            cy="35"
            r="13.6"
            data-svg-origin="35 35"
          />
        </g>
      </svg>
    );
  }
}
