import { useState } from 'react';

function AnimatedArrow() {
    const [animationStarted, setAnimationStarted] = useState(false);
    console.log(animationStarted)

    return (
        <div className="graph__wrapper">
            <svg width="100%" height="100%" viewBox="0 0 315 107" version="1.1" style={{ overflow: 'visible' }}>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchType="MSPage">
                    <path
                        id="Path-1"
                        className="path"
                        fill="none"
                        stroke="gray"
                        strokeWidth="1"
                        strokeLinejoin="round"
                        strokeMiterlimit="1"
                        d="M0,0C 0,0 0,0 0,0  S 0,0 0,0  S 240,100 315,0  V 60" />
                    <polyline
                        id="arrow"
                        points="0,-9 18,0 0,9 5,0"
                        fill="gray"
                        onAnimationStart={() => setAnimationStarted(false)}
                        onAnimationEnd={() => console.log("end")}
                        style={{ animation: animationStarted ? '1.6s ease-in-out 1s forwards arrow-animation' : '' }}
                    >
                        <animateMotion rotate="auto" dur="1.6s" repeatCount="1" fill="freeze">
                            <mpath xlinkHref="#Path-1" />
                        </animateMotion>
                    </polyline>
                </g>
            </svg>
        </div>
    );
}

export default AnimatedArrow;



