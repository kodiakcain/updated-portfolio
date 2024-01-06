import React, { useEffect, useState } from 'react';
import SidebarEdit from '../src/app/components/SidebarEdit'; // Adjust the path accordingly
import '../styles/Contact.modules.css'; // Create a module CSS file for your Skills page
import '../src/app/globals.css'
import { motion, useAnimation } from 'framer-motion';
import { TbBrandGmail } from "react-icons/tb";
import LinkedinButton from '../src/app/components/LinkedinButton'
import GmailButton from '../src/app/components/GmailButton'


function Contact() {
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
    <div className='flex min-h-screen flex-col items-center justify-between'>
      <main>
        <div className='contactDiv'>
        <h1>Contact</h1>
        </div>
        <div className='midContact'>
          <div  className='widthEd'>
          <SidebarEdit/>
            <div className='logoMove'>
              
            <a href="mailto:americancain@gmail.com?subject=Message from Portfolio" target='_blank'><TbBrandGmail
            size={33} color='white' className='p-24'></TbBrandGmail></a>
            <a href="https://www.linkedin.com/in/cain-clifton/" target='_blank'>
            <LinkedinButton size={40} color='white' className='p-24'></LinkedinButton>
            </a>
            </div>
          </div>
        </div>
      </main> 
    </div>
    </motion.div>
  );
}

export default Contact;