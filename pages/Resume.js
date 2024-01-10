import React, { useEffect, useState } from 'react';
import SidebarEdit from '../src/app/components/SidebarEdit'; 
import '../styles/Resume.modules.css'; 
import '../src/app/globals.css';
import { motion, useAnimation } from 'framer-motion';
import { MdSaveAlt } from "react-icons/md";

//Resume page
function Resume() {

  //Hook for mounting
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();

  //Set mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      controls.start({ opacity: 1 });
    }
  }, [isMounted, controls]);
  return (
    //Animation on button
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.75 }}
    >
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <main>
        <div className='ResumeTop'>
        <SidebarEdit/>
        <div>
        <a href="/CainClifton-ResumeCurr.jpg" download="CainClifton-ResumeCurr.jpg">
        <MdSaveAlt size={50} color={'white'}></MdSaveAlt>
        </a>
        
        <div className='leftPad'>
        <iframe src="/CainCliftonCurrentResume.jpg" className='frame' title='resume' allowFullScreen></iframe>
        </div>
        </div>
        </div>
      </main>
    </div>
    </motion.div>
  );
}

export default Resume;