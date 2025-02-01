import womenSigning from '../assets/women-signing.jpg'
import food from '../assets/feeded.jpg'
import shelters from '../assets/shelters.jpg'
import money from '../assets/dollar.jpg'


const Main = ()=>{
    return (
        <div className="mt-[120px]">
            <h1 className="text-blue-950 font-sans text-center text-3xl md:text-7xl">Enterprenurs Development and Educational Organization</h1>
            
            <div className="flex  mt-[40px] sm:mt-[100px] gap-5 flex-wrap">
            <div className='w-[700px] p-3'>
            <h2 className=" text-2xl">The underlying commonality of our Organization is the emphasis on problem-solving in the community.</h2>
            <p className="mt-[1rem] text-sm">The EDEO is a not-for-profit, non-political, and non-governmental organization, WOMEN established on 08/04/2018, registered with the Ministry of Economy of Afghanistan.</p>
            </div>
            
            <div className='w-[600px] h-[300px]'>
            <img className='w-[100%] h-[100%] aspect-[4/3]  rounded-[20px]' src={womenSigning} />
            </div>
            </div>
            
            <div className='mt-[4rem] sm:mt-[8rem]'>
                <h2 className='text-center text-blue-500 text-5xl'>We have already</h2>
                <div className='flex justify-around gap-3 flex-wrap mt-[6rem]'>
                <div className='transition-all duration-200 cursor-pointer hover:bg-blue-200 w-[350px] h-[350px] grid grid_rows-2 rounded-[15px]'>
                <div className='w-[350px] h-[150px]'>
                    <img src={food} className='w-[100%] y-[100%] rounded-tl-[15px] rounded-tr-[15px]' />
                </div>
                <div className='p-3 flex flex-col items-center justify-center'>
                       <h3 className='text-center font-bold  text-3xl mt-6'>455</h3>
                <h3 className='text-center text-3xl '>Feeded Homeless </h3>
                </div>
                </div>

                <div className=' w-[350px] h-[350px] transition-all duration-200 cursor-pointer hover:bg-smook-200 grid grid_rows-2 rounded-[15px]'>
                <div className='w-[350px] h-[150px]'>
                    <img src={shelters} className='w-[100%] y-[100%] rounded-tl-[15px] rounded-tr-[15px]' />
                </div>
                <div className='p-3 flex flex-col items-center justify-center'>
                       <h3 className='text-center font-bold  text-3xl mt-6'>5</h3>
                <h3 className='text-center text-3xl'>Shelters built</h3>
                </div>
                </div>

                <div className='transition-all duration-200 cursor-pointer hover:bg-blue-100 w-[350px] h-[350px] grid grid_rows-2 rounded-[15px]'>
                <div className='w-[350px] h-[150px]'>
                    <img src={money} className='w-[100%] y-[100%] rounded-tl-[15px] rounded-tr-[15px]' />
                </div>
                <div className='p-3 flex flex-col items-center justify-center'>
                       <h3 className='text-center font-bold  text-3xl mt-6'>$12000</h3>
                <h3 className='text-center text-3xl '>Money Donated</h3>
                </div>
                </div>
                </div>

                {/* <div className='w-[200px] h-[200px]'>
                    <img src={shelters} className='w-[100%] y-[100%] rounded-[50%]' />
                </div>

                <div className='w-[200px] h-[200px]'>
                    <img src={money} className='w-[100%] y-[100%] rounded-[50%]' />
                </div> */}

            </div>
        </div>
    );
};

export default Main;