import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

const offsets = [9, 6, 3, 15, 12, 9, 6];
const initialCords = [{ x: 25, y: 40 }, { x: 16, y: 55 }];
const space = { x: 7, y: 0 };

export default class Rain extends Component {
  constructor() {
    super();

    this.lines = [];
    this.tweens = null;
  }

  componentWillUnmount() {
    if (this.tweens) {
      this.tweens.forEach(tween => tween && tween.kill());
    }
  }

  checkLoad() {
    const { animated } = this.props;

    if (this.lines.length >= offsets.length && animated) {
      this.animate();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  animate() {
    function r() {
      this.restart();
    }

    this.tweens = this.lines.map(line => {
      if (!line) {
        return;
      }
      const lineAttrs = { offset: Math.abs(line.style.strokeDashoffset) };
      // eslint-disable-next-line consistent-return
      return new TimelineLite({
        pasued: true,
        onComplete: r,
        onUpdate: () => {
          // eslint-disable-next-line no-param-reassign
          line.style.strokeDashoffset = -lineAttrs.offset;
        }
      })
        .to(lineAttrs, Math.min(1, 0.4 + Math.random()), { offset: 20 })
        .to(lineAttrs, 0, { offset: 2 })
        .restart();
    });
  }

  render() {
    const { x, y, scale } = this.props;
    return (
      <g
        id="dashedLines"
        transform={`translate(${x || 0} ${y || 0}) scale(${scale || 1})`}
        data-svg-origin="37.05000114440918 28.700000762939453"
      >
        {offsets.map((offset, i) => (
          <line
            key={`RainLine_${i}`}
            fill="none"
            stroke="#33B5D9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1={initialCords[0].x + i * space.x}
            y1={initialCords[0].y + i * space.y}
            x2={initialCords[1].x + i * space.x}
            y2={initialCords[1].y + i * space.y}
            style={{
              strokeDasharray: [12, 4],
              strokeDashoffset: [-offset]
            }}
            ref={ref => {
              this.lines.push(ref);
              this.checkLoad();
            }}
          />
        ))}
      </g>
    );
  }
}
