import './index.scss';
import LogoM from '../../../assets/images/logo-m.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';

const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
      gsap.registerPlugin(DrawSVGPlugin)
      // gsap.set("svg", {
      //   opacity: 1
      // });

      // gsap.from(".draw-me", {
      //   duration: 3,
      //   ease: "sine.out",
      //   drawSVG: 0,
      //   repeat: -1,
      //   repeatDelay: 2
      // });
      gsap
        .timeline()
        .to(bgRef.current, {
          duration: 1,
          opacity: 1,
        }).fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 1.8,
          duration: 2,
        }
      )
    }, [])    
    return (
        <div className='logo-container' ref={bgRef}>
          <img className='solid-logo' ref={solidLogoRef} src={LogoM} alt="JavaScript, Developer" />
          <svg id="svg" version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="437pt" height="442pt" viewBox="0 0 437 442">
            <g className='svg-container' transform="translate(0,442) scale(.1,-.1)"
            fill="none">
              <path className="draw-me"
                ref={outlineLogoRef} fill="none" stroke="#ffd700" stroke-width="10"
                d="M380 2363 l0 -2058 -182 -145 -182 -145 417 -3 417 -2 196 152 195
                153 -5 1505 -6 1505 29 -80 c71 -199 691 -2030 691 -2041 0 -7 -57 -59 -127
                -115 -71 -57 -154 -125 -185 -152 -32 -26 -62 -46 -68 -42 -5 3 -10 1 -10 -4
                0 -8 134 -11 430 -11 l430 0 147 114 c82 63 163 127 181 143 30 25 45 62 154
                383 66 195 148 438 181 540 33 102 143 428 243 725 l183 540 0 -1510 1 -1510
                -182 -145 -182 -145 417 -3 417 -2 193 152 192 152 -3 2053 -2 2053 -622 -2
                -622 -3 -361 -1097 c-198 -603 -363 -1100 -366 -1103 -4 -3 -47 119 -98 272
                -50 153 -218 650 -373 1106 l-281 827 -629 0 -628 0 0 -2057z"
              />
            </g>
          </svg>
        </div>
    )
}

export default Logo