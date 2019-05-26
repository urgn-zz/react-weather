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
    if (this.left && this.right && this.body) {
      this.animate();
    }
  }

  animate() {
    function r() {
      this.restart();
    }

    new TimelineLite({ pasued: true })
      .to(this.body, 1, {
        opacity: 1
      })
      .restart();

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
    return (
      <div
        ref={r => {
          this.body = r;
          this.checkLoaded();
        }}
        style={{
          opacity: 0
        }}
      >
        <WhiteCloud
          width={180}
          x={-500}
          ref={r => {
            this.left = r;
            this.checkLoaded();
          }}
        />
        <WhiteCloud
          width={300}
          ref={r => {
            this.right = r;
            this.checkLoaded();
          }}
        />
      </div>
    );
  }
}
