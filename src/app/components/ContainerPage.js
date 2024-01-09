import '../../../styles/ContainerPage.modules.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";


//First Container in Skills
const ContainerPage = () => {
  return (
    <div className='containerDiv' style={{textAlign: 'center'}}>
        <p style={{fontSize: '40px'}}>Web Development</p>
        <hr></hr>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '10px', paddingTop: '10px'}}>
        <FaHtml5 size={40}></FaHtml5>
        <FaCss3 size={40}></FaCss3>
        <IoLogoFirebase size={40}></IoLogoFirebase>
        <IoLogoJavascript size={40}></IoLogoJavascript>
        <SiTailwindcss size={40}></SiTailwindcss>
        <FaReact size={40}></FaReact>
        </div>
        <p>I am experienced in building Full-Stack web applications using <b><u>JavaScript</u></b>, <b><u>HTML</u></b>, <b><u>CSS</u></b>, and <b><u>React</u></b>. For my applications
        I have implemented <b><u>Firebase Firestore</u></b> for the database, <b><u>Google Cloud</u></b> for Sign-In, and used <b><u>Framer</u></b> and <b><u>TailwindCSS</u></b> for UI design.  
        </p>
        <br></br>
        <hr></hr>
        <br></br>
        <h1><u>Relevant Projects</u></h1>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{width: "50%"}}>
            <p><u>This Portfolio</u></p>
            <p>This site was made using NextJS, TailwindCSS, React, HTML5, CSS, & JavaScript.</p>
          </div>
         <div style={{width: "50%"}}>
          <p><u>Uranym</u></p>
          <a href="https://uranym.com" target='_blank' style={{color: 'purple'}}>Uranym.com</a>
          <p>Made using React, Firebase, & Google Cloud.</p>
         </div>
         </div>
    </div>
  );
};

export default ContainerPage;