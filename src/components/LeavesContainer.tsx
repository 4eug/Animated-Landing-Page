import { motion } from "framer-motion";
import { leavesContainer } from "variants";
import Leaf from "./Leaf";

const LeavesContainer = () => {
    return(
        <motion.div variants={leavesContainer} initial="initila" animate="animate">
            <Leaf animationSpeed={1.8} className="leafWrapper-1" imageUrl="/images/leaf01.png"/>

            <Leaf animationSpeed={1.6} className="leafWrapper-2" imageUrl="/images/leaf02.png"/>

            <Leaf animationSpeed={1.5} className="leafWrapper-3" imageUrl="/images/leaf03.png"/>

            <Leaf animationSpeed={1.7} className="leafWrapper-4" imageUrl="/images/leaf04.png"/>

            <Leaf animationSpeed={1.8} className="leafWrapper-5" imageUrl="/images/leaf05.png"/>

        </motion.div>
    )

}

export default LeavesContainer;