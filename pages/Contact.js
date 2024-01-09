import React, { useEffect, useState } from 'react';
import SidebarEdit from '../src/app/components/SidebarEdit';
import '../styles/Contact.modules.css'; 
import '../src/app/globals.css';
import { motion, useAnimation } from 'framer-motion';
import { TbBrandGmail } from "react-icons/tb";
import LinkedinButton from '../src/app/components/LinkedinButton';

//Contact page
function Contact() {

  //Hook to control mounted state
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();

  //Mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      controls.start({ opacity: 1 });
    }
  }, [isMounted, controls]);

  const axios = require("axios");
  const API_KEY = "your-mailslurp-api-key";

  return (
    //Animation for button
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