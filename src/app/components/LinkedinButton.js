import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const GithubButton = () => {
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
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="rest"
      className='linkedinStyle'
    >
      <FaLinkedin size={30} />
    </motion.button>
  );
};

export default GithubButton;