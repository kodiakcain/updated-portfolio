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
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <p style={{ margin: 0, fontSize: '25px', fontWeight: 'bold' }}>Projects</p>
      </div>
      <motion.div
        variants={logoVariants}
        initial="initial"
        animate="animate"
        style={{ display: 'inline-block' }}
      >
        <div>
          <SiGhost size={170} />
        </div>
      </motion.div>
    </div>
  );
};

export default RotatingLogo;