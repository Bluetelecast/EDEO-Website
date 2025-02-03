import womenSigning from '../assets/women-signing.jpg'

const Hero = ()=>{
    return (
        <>
        <div className="mt-[4rem] sm:mt-[12rem]">
        <h1 className="text-blue-950 font-sans text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl">Enterprenurs Development and Educational Organization</h1>            
        <div className="flex  mt-[40px] sm:mt-[100px] gap-5 flex-wrap">
        
        <div className='p-8'>
        <h3 className=" text-2xl">The underlying commonality of our Organization is the emphasis on problem-solving in the community.</h3>
        <p className="mt-[1rem] text-sm">The EDEO is a not-for-profit, non-political, and non-governmental organization, WOMEN established on 08/04/2018, registered with the Ministry of Economy of Afghanistan.</p>
        <p className='mt-[2rem] text-3xl text-blue-500'>Let's build a better world together!</p>
        </div>
        </div>
        </div>
        
        <div className='flex justify-end p-5'>
        <div className='w-[500px] h-[300px]'>
        <img className='w-[100%] h-[100%] aspect-[4/3]  rounded-[20px]' src={womenSigning} />
        </div>
        </div>
        </>
    );
};

export default Hero;