import React, { useEffect, useState } from 'react';
import SidebarEdit from '../src/app/components/SidebarEdit';
import '../styles/Contact.modules.css';
import '../src/app/globals.css';
import { motion, useAnimation } from 'framer-motion';
import { TbBrandGmail } from 'react-icons/tb';
import LinkedinButton from '../src/app/components/LinkedinButton';
const { MailSlurp } = require('mailslurp-client');
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

// Contact page
function Contact() {
  // Hook to control mounted state
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [noSubject, setNoSubject] = useState(false);
  const [noBody, setNoBody] = useState(false);
  const [bigSubject, setBigSubject] = useState(false);
  const [bigBody, setBigBody] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);
 
  // Mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      controls.start({ opacity: 1 });
    }
  }, [isMounted, controls]);

  //Handles the email sending using Mailslurp
  const handleEmail = async () => {

    //If there is no subject, display alert
    if (subject.length <= 0) {
      setNoSubject(true);
      return;
    }

    //If subject too long, display alert
    if (subject.length >= 100) {
      setBigSubject(true);
      return;
    }

    //If there is no body, display alert
    if (body.length <=0) {
      setNoBody(true);
      return;
    }

    if (body.length >= 1500) {
      setBigBody(true);
      return;
    }

    //api key
    const API_KEY = process.env.NEXT_PUBLIC_MAILSLURP_API_KEY;

    const mailslurp = new MailSlurp({
      apiKey: API_KEY,
    });


    //Send email via mailslurp using subject and body
    const sent = await mailslurp.inboxController.sendEmailAndConfirm({
      inboxId: process.env.NEXT_PUBLIC_MAILSLURP_INBOX,
      sendEmailOptions: {
        to: [process.env.NEXT_PUBLIC_MAILSLURP_EMAIL],
        subject: subject,
        body: body,
      },
    });

    setSentEmail(true);
  };

  //Button hover
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

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  return (
    // Animation for button
    <motion.div initial={{ opacity: 0 }} animate={controls} transition={{ duration: 0.75 }}>
      <div className='flex min-h-screen flex-col items-center justify-between'>
        <main>
          <div className='contactDiv'>
            <h1>Contact</h1>
          </div>
          <div className='midContact'>
            <div className='widthEd'>
              <SidebarEdit />
              <div className='logoMove'>
              <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="rest"
            >
                <a href='mailto:americancain@gmail.com?subject=Message from Portfolio' target='_blank'>
                  <TbBrandGmail size={30} color='white' className='p-24'></TbBrandGmail>
                </a>
            </motion.button>
                <a href='https://www.linkedin.com/in/cain-clifton/' target='_blank'>
                  <LinkedinButton size={40} color='white' className='p-24'></LinkedinButton>
                </a>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }} className='textBoxes'>
            <div className='vertPad'>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p className='text p-12'>Send me an email!</p>
              </div>
              <div>
              {noSubject && <Collapse in={open}>
                  <Alert
                    severity='error'
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setNoSubject(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    sx={{ mb: 2 }}
                  >
                    Enter a subject.
                  </Alert>
                </Collapse>}
                {noBody && <Collapse in={open}>
                  <Alert
                    severity='error'
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setNoBody(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    sx={{ mb: 2 }}
                  >
                    Enter a body.
                  </Alert>
                </Collapse>}
                {bigSubject && <Collapse in={open}>
                  <Alert
                    severity='error'
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setBigSubject(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    sx={{ mb: 2 }}
                  >
                    Subject too long - Maximum of 100 characters.
                  </Alert>
                </Collapse>}
                {bigBody && <Collapse in={open}>
                  <Alert
                    severity='error'
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setBigBody(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    sx={{ mb: 2 }}
                  >
                    Body too long - Maximum of 1500 characters.
                  </Alert>
                </Collapse>}
                {sentEmail && <Collapse in={open}>
                  <Alert
                    severity='success'
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setSentEmail(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    sx={{ mb: 2 }}
                  >
                    Email Sent!
                  </Alert>
                </Collapse>}
              </div>
              <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="rest"
            >
              <TextField
                id='outlined-basic'
                label='Subject'
                variant='outlined'
                color='secondary'
                style={{ backgroundColor: '#d3d3d3' }}
                value={subject}
                onChange={handleSubjectChange}
              />
            </motion.button>
            </div>
            <div className='vertPad'>
            <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="rest"
            >
              <TextField
                id='outlined-basic'
                label='Body'
                variant='outlined'
                color='secondary'
                style={{ backgroundColor: '#d3d3d3' }}
                value={body}
                onChange={handleBodyChange}
              />
            </motion.button>
              
            </div>
            <br></br>
                <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="rest"
            >
                <button onClick={handleEmail} style={{ color: '#d3d3d3' }} className='submitButton'>
                  send email
                </button>
            </motion.button> 
          </div>
        </main>
      </div>
    </motion.div>
  );
}

export default Contact;