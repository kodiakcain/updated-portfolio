import '../../../styles/ContainerPage.modules.css';

//Second project in Projects
const ContainerPage5 = () => {
  return (
    <div className='containerDiv' style={{ textAlign: 'center' }}>
      <p style={{ fontSize: '40px' }}>ReactMotionLab</p>
      <hr />

      <a
        href='https://github.com/kodiakcain/reactmotionlab'
        target='_blank'
        style={{ color: 'purple' }}
      >
        <u>Github</u>
      </a>
      <br />
      <a
        href='https://reactmotionlab.com'
        target='_blank'
        style={{ color: 'purple' }}
      >
        <u>ReactMotionLab Docs</u>
      </a>

      <p>
        ReactMotionLab is currently in <b><u>version 1.0.0</u></b> and includes <b><u>14 animations</u></b>. It encourages <b><u>community support</u></b> and is continuously growing. I learned a lot about <b><u>CSS animations</u></b>, <b><u>React</u></b>, <b><u>Webpack</u></b>, and <b><u>npm</u></b> while developing this project.
      </p>
      <br />
      <hr />
      <br />
      <h1><u>Future Plans</u></h1>
      <p>
        I would like to add <b><u>more content</u></b>, <b><u>better animations</u></b>, and add
        <b> <u>more optimizations for different devices</u></b>.
      </p>
    </div>
  );
};

export default ContainerPage5;
