import React, { useEffect, useState } from 'react';
import SidebarEdit from '../src/app/components/SidebarEdit';
import '../styles/Contact.modules.css'; 
import '../src/app/globals.css';
import { motion, useAnimation } from 'framer-motion';
import { TbBrandGmail } from "react-icons/tb";
import LinkedinButton from '../src/app/components/LinkedinButton';
const { MailSlurp } = require('mailslurp-client');
import TextField from '@mui/material/TextField';

//Contact page
function Contact() {

  //Hook to control mounted state
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();
  const[subject, setSubject] = useState("");
  const[body, setBody] = useState("");

  //Mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      controls.start({ opacity: 1 });
    }
  }, [isMounted, controls]);

  const handleEmail = async () => {
    const API_KEY = process.env.NEXT_PUBLIC_MAILSLURP_API_KEY;

    const mailslurp = new MailSlurp({
      apiKey: API_KEY,
    });
  
    const sent = await mailslurp.inboxController.sendEmailAndConfirm({
      inboxId: process.env.NEXT_PUBLIC_MAILSLURP_INBOX,
      sendEmailOptions: {
        to: [process.env.NEXT_PUBLIC_MAILSLURP_EMAIL],
        subject: 'Test email',
        body: 'Hello from MailSlurp'
      }
    });
  }

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
        <div style={{display: 'flex', flexDirection: 'column'}} className='textBoxes'>
          <div className='vertPad'>
          <TextField id="outlined-basic" label="Subject" variant="outlined" color='secondary' style={{backgroundColor: '#d3d3d3'}} />
          </div>
            
          <div className='vertPad'>
          <TextField id="outlined-basic" label="Body" variant="outlined" color='secondary' style={{backgroundColor: '#d3d3d3'}} />
          </div>
          <br></br>
          <button onClick={handleEmail} style={{color: '#d3d3d3'}} className='submitButton'>send email</button>
        </div>

      </main> 
  
    </div>
    </motion.div>
  );
}

export default Contact;