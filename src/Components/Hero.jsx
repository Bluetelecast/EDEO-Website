import { useNavigate } from 'react-router-dom';
import womenSigning from '../assets/women-signing.jpg';
import HeroSlider from './HeroSlider';
import { motion } from 'framer-motion';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Hero Section */}
            <div className="mt-[4rem] sm:mt-[12rem] flex flex-col p-3">
                <motion.h1 initial={{opacity:0}} animate={{
                    opacity:1,
                }} className="text-blue-950 font-sans p-5 font-bold text-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Empowering Communities, Solving Real-World Problems.
                </motion.h1>            
                <h2 className="text-md p-5">
                    At EDEO, we unite women to create lasting change through community-driven solutions. 
                    As a non-profit, non-political organization, we’ve been transforming lives since 2018.
                </h2>
                <h2 className="text-md pl-5 text-blue-500 font-bold text-2xl">
                    Let's build a better world together!
                </h2>
                <button 
                    onClick={() => navigate('/what_we_do')} 
                    className="m-4 p-4 bg-blue-500 self-end text-white cursor-pointer rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Get Involved
                </button>
            </div>

            {/* Hero Slider */}
            <HeroSlider />

            {/* About Section */}
            <div
             className="flex flex-col gap-5 md:grid md:grid-cols-2 p-5 mt-[4rem] justify-between">
                <div className="lg:max-w-[80%]">
                    <h2 className="p-4 text-blue-950 font-bold text-xl">
                        The EDEO is a not-for-profit, non-political, and non-governmental organization, 
                        WOMEN established on 08/04/2018, registered with the Ministry of Economy of Afghanistan.
                    </h2>
                    <button 
                        onClick={() => {
                            navigate('/about');
                            window.scrollTo(0, 0);
                        }
                        } 
                        className="m-4 p-4 bg-blue-500 text-white cursor-pointer rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        More About Us
                    </button>
                </div>

                {/* Animated Image */}
                <motion.div
                  initial={{scale:0.5}}
                  whileInView={{scale:1,transition:{duration:2}}} 
                 
                    className="self-center h-[300px] w-[350px] md:w-[390px] lg:w-[500px]">
                    <img
                        className="w-full h-full aspect-[4/3] rounded-[20px] shadow-lg object-cover" 
                        src={womenSigning} 
                        alt="Women Signing" 
                    />
                </motion.div>
            </div>
        </>
    );
};

export default Hero;
