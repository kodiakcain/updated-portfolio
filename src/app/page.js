'use client'
import '../../styles/Home.modules.css';
import GithubButton from './components/GithubButton';
import LinkedinButton from './components/LinkedinButton'
import GmailButton from './components/GmailButton'
import RotatingLogo from './components/RotatingLogo'
import Sidebar from './components/Sidebar';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Home() {

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
      transition={{ duration: 0.25 }}
    >
      <header style={{top: '5vh'}}>
        <div style={{flexDirection: 'row', display: 'flex'}}>
          <div  className='topDiv' style={{display: 'flex', flexDirection: 'row', padding: '10px',}}>
          <p className={`text-4xl font-bold firstWordName`}>cain </p>
          <p className={`text-4xl font-bold secondWordName`}>clifton</p>
          </div>
          <div className='topDivLinks'>
            <a href="https://github.com/kodiakcain" target='_blank' className='text-4xl font-bold linkPad'>
            <GithubButton></GithubButton>
            </a>
            <a href="https://www.linkedin.com/in/cain-clifton/" target='_blank' className='text-4xl font-bold linkPad'>
            <LinkedinButton></LinkedinButton>
            </a>
            <a href="mailto:americancain@gmail.com?subject=Message from Portfolio" target='_blank' className='text-4xl font-bold'><GmailButton></GmailButton></a>
          </div>
        </div>
        </header>
    <main className="flex min-h-screen flex-col justify-between p-6">
        <div className='midDiv'>
          <div style={{paddingRight: '10px'}}>
          <Sidebar ></Sidebar>
          </div>
          <div className='leftPad'>
          <p className='text-4xl font-bold slogan'>Elevating concepts through</p>
            <p className='text-4xl font-bold sloganBelow'>the power of <span className='sloganFinal'>digital innovation.</span></p>
          </div>
        </div>
        <div className='rotatingLogo'>
        <Link href='/Projects'>
          <RotatingLogo></RotatingLogo>
          </Link>   
        </div>
        
        <img src='/Cain.png' alt='Cain Image' className='avatar' />
      
    </main>
    </motion.div>
  );
}