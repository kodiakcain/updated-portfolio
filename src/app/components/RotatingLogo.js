import React from 'react';
import { motion } from 'framer-motion';
import { SiGhost } from "react-icons/si";

const RotatingLogo = () => {
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
    <motion.div
      className="circular-logo"
      variants={logoVariants}
      initial="initial"
      animate="animate"
    >
      <div><SiGhost size={170}></SiGhost></div>
    </motion.div>
  );
};

export default RotatingLogo;