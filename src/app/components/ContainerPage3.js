import '../../../styles/ContainerPage.modules.css'

const ContainerPage3 = () => {
  return (
    <div className='containerDiv' style={{textAlign: 'center'}}>
        <p style={{fontSize: '40px'}}>Communication & Leadership</p>
        <hr></hr>
        <br></br>
        <p>I have excellent <b><u>communication</u></b> skills, which allow me to work with a diverse team
            and consider many <b><u>diverse perspectives</u></b>. I like to take on <b><u>leadership</u></b> roles and
            work with the team to ensure a great final product.
        </p>
        <br></br>
        <hr></hr>
        <br></br>
        <h1><u>Relevant Projects</u></h1>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{width: "100%"}}>
            <p><u>Phi Delta Theta</u></p>
            <p>I was a <b><u>Founding Father</u></b> of the chapter on my campus.</p>
          </div>
         </div>
    </div>
  );
};

export default ContainerPage3;