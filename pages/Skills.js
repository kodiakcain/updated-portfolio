import React, { useEffect, useState } from 'react';
import SidebarEdit from '../src/app/components/SidebarEdit'; 
import { motion, useAnimation } from 'framer-motion';
import '../styles/Skills.modules.css'; 
import '../src/app/globals.css';
import ContainerPage from '../src/app/components/ContainerPage';
import ContainerPage2 from '../src/app/components/ContainerPage2';
import ContainerPage3 from '../src/app/components/ContainerPage3';

function Skills() {

  //Hook for mounting
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();

  //Mount 
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      controls.start({ opacity: 1 });
    }
  }, [isMounted, controls]);

  return (
    //Add animation
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.75 }}
    >
      <div className='flex min-h-screen flex-col items-center justify-between p-12'>
        <main>
        <div className='topWordPad'>
          <p className='topWord'>Relevant Skills</p>
        </div>
          <div className='skillsOuter'>
          <div className='sidePad2'>
            <SidebarEdit />
          </div>
          <div className='sidePad'>
          <ContainerPage >
            
            </ContainerPage>
          </div>
          <div className='sidePad'>
          <ContainerPage2></ContainerPage2>
          </div>
          <div className='sidePad'>
            <ContainerPage3></ContainerPage3>
          </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}

export default Skills;