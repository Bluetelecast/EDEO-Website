import { useNavigate } from 'react-router-dom';
import womenSigning from '../assets/women-signing.jpg'
import HeroSlider from './HeroSlider';

const Hero = ()=>{
    const navevegate=useNavigate();
    return (
        <>
        <div className="mt-[4rem] sm:mt-[12rem] flex flex-col p-3">
        <h1 className="text-blue-950 font-sans p-5 font-bold text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Empowering Communities, Solving Real-World Problems.</h1>            
        <h2 className=' text-md p-5 '>At EDEO, we unite women to create lasting change through community-driven solutions. As a non-profit, non-political organization, we’ve been transforming lives since 2018.</h2>
        <h2 className='text-md pl-5 text-blue-500 font-bold text-2xl'>Let's build a better world together!</h2>
        <button onClick={()=>navevegate('/what_we_do')} className='m-4 p-4 bg-blue-500  self-end text-white cursor-pointer'>Get Involded</button>
        </div>
        <HeroSlider/>
        <div className='flex flex-col gap-5 md:grid md:grid-cols-2  p-5 mt-[4rem] justify-between '>
        <div>
        <h2 className='p-4 text-blue-950 font-bold text-xl'>The EDEO is a not-for-profit, non-political, and non-governmental organization, WOMEN established on 08/04/2018, registered with the Ministry of Economy of Afghanistan</h2>
        <button onClick={()=>navevegate('/about')} className='m-4 p-4 bg-blue-500 text-white cursor-pointer'>More about us</button>
        </div>
        <div className='self-center h-[300px]' style={{width:'clamp(350px,400px,380px)'}}>
        <img className='w-[100%] h-[100%] aspect-[4/3] rounded-[20px] shadow' src={womenSigning} />
        </div>
        </div>
        </>
    );
};

export default Hero;