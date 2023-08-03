import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';

function ScrollAnimation() {
  const ref = useRef();
  const [props, set] = useSpring(() => ({
    transform: 'translateY(0px)',
    opacity: 1,
    from: { transform: 'translateY(50px)', opacity: 0 },
    config: { duration: 5500 },
  }));

  const handleScroll = () => {
    const top = ref.current.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height * 0.8) {
      set({ transform: 'translateY(0px)', opacity: 1 });
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div id= "scroll">
      <animated.div style={props} ref={ref}>
        <h2>Continúa para comenzar el puzzle</h2>
      </animated.div>
    </div>
  );
}

export default ScrollAnimation;