import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SiGhost } from 'react-icons/si';


//Rotating project logo
const RotatingLogo = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  //Hover animation
  const buttonVariants = {
    rest: {
      scale: 1,
      boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
    },
    hover: {
      scale: 1.1,
      boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.2)',
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (typeof window === 'undefined') {
    return null;
  }

  //adjust size based on width of screen
  const logoSize = windowSize.width <= 768 ? 120 : 170;
  const textSize = windowSize.width <= 768 ? 7 : 25;

  //Rotate logo
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
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="rest"
      className='linkedinStyle'
    >
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
    </motion.button>
  );
};

export default RotatingLogo;