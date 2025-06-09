import { motion } from 'framer-motion';

const Anim = ({ children, key }) => {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren"
      }}
    >
      {children}
    </motion.div>
  );
};

export default Anim;