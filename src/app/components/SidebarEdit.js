import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SidebarEdit = () => {

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
  return (
    <div className='sideBarDiv'>
      <Link href='/Skills'>
        <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="rest"
        >
          <p>&lt;Skills/&gt;</p>
          </motion.button>
      </Link>
      <br />
      <br></br>
      <Link href='/Resume'>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="rest"
        >
          <p>&lt;Resume/&gt;</p>
          </motion.button>
      </Link>
      <br />
      <br></br>
      <Link href='/Contact'>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="rest"
        >
          <p>&lt;Contact/&gt;</p>
          </motion.button>
      </Link>
      <br />
      <br></br>
      <Link href='/'>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="rest"
        >
          <p>&lt;Home/&gt;</p>
          </motion.button>
      </Link>
    </div>
  );
};

export default SidebarEdit;