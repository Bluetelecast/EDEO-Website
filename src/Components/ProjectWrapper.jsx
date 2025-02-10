import { useDispatch } from "react-redux";
import { setProject } from "../Global_feature/GlobalSlice";
import { motion } from "framer-motion";

const ProjectWrapper = ({object})=>{
    
    const dispatch = useDispatch();

    return (
        <motion.div 
        whileHover={{
             boxShadow: '0px 0px 25px 10px rgba(0, 153, 255, 0.3), 0px 0px 50px 15px rgba(0, 102, 204, 0.3)',
             transition: { duration: 0.4 }
        }}
        className="grid p-4 gap-x-5 projectItem" style={{ gridTemplateRows: '80fr 60px 60px' }}>
        <div className="w-[300px] sm:w-[300px] md:w-[350px] h-[300px]">
        <img src={object.photo} alt="Sameer"  className='w-[100%] h-[100%] m-h-[300px]'/>
        </div>
        <div className="flex justify-start w-[300px] sm:w-[300px] md:w-[350px] flex-wrap">
            <h3 className="text-blue-400 text-md mt-[1rem]">{object.title}</h3>
        </div>
        <button className="p-3 bg-blue-500 text-white mt-[1rem] cursor-pointer" onClick={()=>{
            dispatch(setProject(object));
        }}>Read More</button>
    </motion.div>
    );
};

export default ProjectWrapper;
