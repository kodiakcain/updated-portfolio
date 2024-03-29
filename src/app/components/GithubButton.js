import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

//Button that links to Github
const GmailButton = () => {

  //Hover animation
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

  return (
    //Animation
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="rest"
      className='githubStyle'
    >
      <FaGithub size={30} />
    </motion.button>
  );
};

export default GmailButton;