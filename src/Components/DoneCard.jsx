import { motion } from "framer-motion";
const DoneCard= ({doneInfo})=>{
    return(
        <motion.div
        initial={{opacity:0,scale:0.5}}
        whileInView={{opacity:1, scale:1, transition:{duration:Math.random()*3}}}
         className='cursor-pointer w-[350px] h-[350px] grid grid_rows-2 rounded-[15px] alreadyDoneWrapper'>
                <div className='w-[350px] h-[150px]'>
                    <img src={doneInfo.photo} className='w-[100%] y-[100%] rounded-tl-[15px] rounded-tr-[15px]' />
                </div>
                <div className='p-3 flex flex-col items-center justify-center'>
                       <h3 id="feed" className='text-center font-bold  text-3xl mt-6'>{doneInfo.number}</h3>
                <h3 className='text-center text-3xl'>{doneInfo.title} </h3>
                </div>
        </motion.div>
    );
};

export default DoneCard;
