import React, { useEffect, useState } from 'react';
import SidebarEdit from '../src/app/components/SidebarEdit'; // Adjust the path accordingly
import { motion, useAnimation } from 'framer-motion';
import '../styles/Skills.modules.css'; // Create a module CSS file for your Skills page
import '../src/app/globals.css';

function Skills() {
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      controls.start({ opacity: 1 });
    }
  }, [isMounted, controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.75 }}
    >
      <div className='flex min-h-screen flex-col items-center justify-between p-24'>
        <main>
          {/* Your Skills page content goes here */}
          <h1>Skills</h1>
          <SidebarEdit />
        </main>
      </div>
    </motion.div>
  );
}

export default Skills;