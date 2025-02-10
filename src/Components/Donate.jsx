import { motion } from 'framer-motion';
import smile from '../assets/smile.webp';

const Donate = ()=>{
    return(
        <>
        <div className="mt-[120px] pb-[3rem]">
        <div className="relative mt-[3rem]" style={{aspectRatio:'16/9'}}>
        <div className={`absolute inset-0`}>
          <img src={smile} alt="child Smile" className="w-full h-full object-cover" />
          <div className="absolute bg-black/30 inset-0  bg-opacity-50 flex items-center justify-center p-5">
    
            <motion.h1
            initial={{opacity:0,translateY:'-15rem',textDecoration:''}}
            animate={{opacity:1,translateY:'0',transition:{duration:Math.random()*3}}}
            className="text-white text-4xl md:text-6xl font-bold text-center">Together, we can give them back the smiles they deserve.</motion.h1>
          </div>
        </div>
    </div>
    <section className="p-8">
    <h2 className='p-1 text-start text-3xl sm:text-5xl mt-[5rem] text-blue-500'>Equity and Education for Everyone.</h2>
    <p className="p-1 mt-3 text-md text-start ">
    We are working for Afghan children and women, who need access to equal education and facilities, your donation of $ 50 - $ 100 directly goes to fund their bright future, please help us give a smile gifted to Afghan children and women.
    </p>
    <p className='p-1 mt-3 text-md text-start text-blue-950'>We at EDEO all team thank you, for your kindness and big heart of gifting smiles to others.</p>
  </section>
  <div className='flex justify-center'>
  <button onClick={()=>navevegate('/what_we_do')} className='m-4 p-4 bg-blue-500  self-end text-white cursor-pointer'>Donate</button>
  </div>
   
</div>

        </>
    );
};

export default Donate;