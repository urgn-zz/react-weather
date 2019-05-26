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
      this.tweens.forEach(tween => tween.pause());
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
      if (!line) return;
      const lineAttrs = { offset: Math.abs(line.style.strokeDashoffset) };
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

  //
  //
  //	thisPath.attr({
  // strokeDashoffset:fakeTweenObj.currentLength

  /* var fakeTweenObj = {currentLength:0};
		var pathLength = 0;

		tl.to(fakeTweenObj, speed, {
			currentLength:-dash -gap, 
			onUpdate:drawTheLine, onUpdateParams:[fakeTweenObj, dashedLines[i]], 
			repeat:-1,
			ease:Linear.easeNone
		}, i*.1);
	});
  } */

  render() {
    const { x, y, scale } = this.props;
    return (
      <g
        id="dashedLines"
        transform={`translate(${x || 0} ${y || 0}) scale(${scale || 1})`}
        data-svg-origin="37.05000114440918 28.700000762939453"
      >
        {/* (() => {
          const result = [];

          for (let i = 0; i < commonTags; i++) {}
          const item = (
            <path
              fill="#33B5D9"
              d="M33.9,40.1c-0.1,0.5-0.4,3.1-0.9,3.9c-0.1,0.2-0.3,0.4-0.4,0.5c-0.4,0.2-0.8,0.3-1.1,0.1
		c-0.6-0.3-0.6-1.3-0.1-2.2C31.8,41.8,33.2,40.6,33.9,40.1z"
            />
          );

          return result;
        })() */

        offsets.map((offset, i) => (
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
