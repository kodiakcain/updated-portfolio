import React, { PureComponent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import '../../../styles/ContainerPage.modules.css'
import { FaJava } from "react-icons/fa";


const ContainerPage2 = () => {
  return (
    <div className='containerDiv' style={{textAlign: 'center', height: '482px'}}>
        <p style={{fontSize: '40px'}}>Data Structures & Algorithms</p>
        <hr></hr>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '10px', paddingTop: '10px', paddingLeft: '70px', paddingRight: '70px'}}>
        <FaJava size={40}></FaJava>
        <h1 style={{fontSize: '30px'}}>C</h1>
        </div>
        <p>I have taken relevant classes such as <b><u>Data Structures & Algorithms</u></b> , and have applied the concepts
        I have learned to school related projects. Some of the things I have used are: <b><u>Linked List</u></b>, <b><u>
            Graphs</u></b>, <b><u>Trees</u></b>, <b><u>Stacks</u></b>, & <b><u>Queues</u></b>.
        </p>
        <br></br>
        <hr></hr>
        <br></br>
        <h1><u>Relevant Projects</u></h1>
        <br></br>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{width: "100%"}}>
            <p><u>Network Emulation</u></p>
            <p>This was made using a Tree Data Structure.</p>
          </div>
         </div>
    </div>
  );
};

export default ContainerPage2;