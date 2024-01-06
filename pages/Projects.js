import React, { useEffect, useState } from 'react';
import SidebarEdit from '../src/app/components/SidebarEdit'; // Adjust the path accordingly
import '../styles/Projects.modules.css'; // Create a module CSS file for your Skills page
import '../src/app/globals.css'
import { motion, useAnimation } from 'framer-motion';
import ContainerPage4 from '../src/app/components/ContainerPage4';
import ContainerPage5 from '../src/app/components/ContainerPage5';


function Projects() {

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
      <div className='flex min-h-screen flex-col items-center justify-between p-12'>
        <main>
        <div className='topWordPad'>
          <p className='topWord'>Projects</p>
        </div>
          <div className='skillsOuter'>
          <div className='sidePad2'>
            <SidebarEdit />
          </div>
          <div className='sidePad'>
          <ContainerPage4 >
            
            </ContainerPage4>
          </div>
          <div className='sidePad'>
          <ContainerPage5></ContainerPage5>
          </div>
          <div className='sidePad'>
            
          </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}

export default Projects;