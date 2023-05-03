import React, { useRef, useEffect, useState } from 'react';

function Scroll({props}) {
  const [isInViewport, setIsInViewport] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;

      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const { innerHeight } = window;

        if (top < innerHeight && bottom > 0) {
          setIsInViewport(true);
          console.log("is in view")
        } else {
          setIsInViewport(false);
          console.log("is not in view")
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div  ref={elementRef} >
        {props}
    </div>
  );
}

export default Scroll;
