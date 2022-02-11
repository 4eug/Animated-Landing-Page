import { motion } from "framer-motion";
import { bottleWrapper, bottle } from "variants";


const BottleContainer = () => {
    return (
     <motion.div 
     variants={bottleWrapper}
     initial="initial"
     animate="animate"
     className="bottleWrapper">
         <motion.img
         variants={bottle}
         initial="initial"
         animate="animate"
         src="/images/juice.png" className="bottle"/>
     </motion.div>
    );
  };
  
  export default BottleContainer;