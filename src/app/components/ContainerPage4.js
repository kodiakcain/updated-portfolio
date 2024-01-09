import '../../../styles/ContainerPage.modules.css'

//First container in projects
const ContainerPage4 = () => {
  return (
    <div className='containerDiv' style={{textAlign: 'center'}}>
        <p style={{fontSize: '40px'}}>Uranym - Full Stack Web App</p>
        <hr></hr>
        <a href="https://uranym.com" style={{color: 'purple'}}>Uranym.com</a>
        <br></br>
        <p> This was created using <b><u>React</u></b>, <b><u>Firebase Firestore</u></b>, <b><u>Google Cloud</u></b>,
        and everthing works. Users can <b><u>add and delete tasks</u></b>, as well as <b><u>check off tasks</u></b>,
        which get displayed to a chart showing how many are complete and incomplete. All data is stored to a database.
        I have learned concepts such as <b><u>authorization</u></b>, <b><u>environment variables</u></b>, <b><u>express</u></b>,
         etc. 
        </p>
        <br></br>
        <hr></hr>
        <br></br>
        <h1><u>Future Plans</u></h1>
            <p>I would like to add <b><u>Framer Motion</u></b>, <b><u>TailwindCSS</u></b>, and add
          <b><u>security rules to Firebas Firestore database</u></b>.</p>
          </div>
         
  );
};

export default ContainerPage4;