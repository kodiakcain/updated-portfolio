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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <p className={`text-4xl font-bold firstWordName`}>cain</p>
        <p className={`text-4xl font-bold secondWordName`}>clifton</p>
        <a href="https://github.com/kodiakcain" target='_blank'>
        <GithubButton></GithubButton>
        </a>
        <a href="https://www.linkedin.com/in/cain-clifton/" target='_blank'>
        <LinkedinButton></LinkedinButton>
        </a>
        <a href="mailto:americancain@gmail.com?subject=Message from Portfolio" target='_blank'><GmailButton></GmailButton></a>
        <p className='text-4xl font-bold slogan'>Elevating concepts through</p>
        <p className='text-4xl font-bold sloganBelow'>the power of <span className='sloganFinal'>digital innovation.</span></p>
        <div className='rotatingLogo'>
          <Link href='/Projects'>

          <RotatingLogo></RotatingLogo>
          <p className=' logoText text-2xl font-bold'>Projects</p>
          </Link>
          
        </div>
        
        <img src='/Cain.png' alt='Cain Image' className='avatar' />
      </div>
      <Sidebar></Sidebar>
    </main>
    </motion.div>
  );
}