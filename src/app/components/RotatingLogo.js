import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SiGhost } from 'react-icons/si';

const RotatingLogo = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Initial size
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Check if window is defined (client side)
  if (typeof window === 'undefined') {
    return null; // or some fallback content
  }

  const logoSize = windowSize.width <= 768 ? 80 : 170;
  const textSize = windowSize.width <= 768 ? 7 : 25;

  const logoVariants = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <p style={{ margin: 0, fontSize: {textSize}, fontWeight: 'bold' }}>Projects</p>
      </div>
      <motion.div
        variants={logoVariants}
        initial="initial"
        animate="animate"
        style={{ display: 'inline-block' }}
      >
        <div>
          <SiGhost size={logoSize} />
        </div>
      </motion.div>
    </div>
  );
};

export default RotatingLogo;