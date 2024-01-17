import '../../../styles/ContainerPage.modules.css'

//First container in projects
const ContainerPage4 = () => {
  return (
    <div className='containerDiv' style={{textAlign: 'center'}}>
        <p style={{fontSize: '40px'}}>Uranym - Full Stack Web App</p>
        <hr></hr>
        <a href="https://uranym.com" style={{color: 'purple'}} target='_blank'><u>Uranym.com</u></a>
        <br></br>
        <a href="https://github.com/kodiakcain/uranym2" style={{color: 'purple'}} target='_blank'><u>Github</u></a>
        <br></br>
        <p> This was created using <b><u>React</u></b>, <b><u>Firebase Firestore</u></b>, <b><u>Google Cloud</u></b>,
        and everthing works. Users can <b><u>add</u></b>, <b><u>delete</u></b>,
         <b> <u>update</u></b>, and  <b><u>read</u></b> tasks <b><u> (CRUD)</u></b>. All data is stored to the Firestore database.
        I have learned concepts such as <b><u>authorization</u></b>, <b><u>environment variables</u></b>, <b><u>express</u></b>,
         etc. 
        </p>
        <br></br>
        <hr></hr>
        <br></br>
        <h1><u>Future Plans</u></h1>
            <p>I would like to add <b><u>Framer Motion</u></b>, <b><u>TailwindCSS</u></b>, and add
          <b> <u>security rules to Firebase Firestore database</u></b>.</p>
          </div>
         
  );
};

export default ContainerPage4;