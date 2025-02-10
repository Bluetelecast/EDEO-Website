import { motion } from "framer-motion";

const VolunteerWrapper = ({object})=>{
    return (
    <div>
        <div className="w-[270px] h-[270px]">
        <motion.img
        whileHover={{scale:1.07}}
         src={object.photo} alt="Sameer"  className='rounded-[50%] w-[100%] h-[100%] border-6 border-blue-200 volunteer'/>
        </div>
        <motion.h4
        initial={{scale:0,opacity:0}}
        whileInView={{opacity:1,scale:1,transition:{duration:2}}}
         className='text-center font-light text-3xl mt-4'>{object.name}</motion.h4>
    </div>
    );
};

export default VolunteerWrapper;
