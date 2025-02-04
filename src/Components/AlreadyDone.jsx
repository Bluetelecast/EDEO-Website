import food from '../assets/feeded.jpg'
import shelters from '../assets/shelters.jpg'
import money from '../assets/dollar.jpg'

const AlreadyDone = ()=>{
    return(
        <div className='mt-[4rem] sm:mt-[8rem]'>
        <h2 className='text-center text-blue-500 text-3xl sm:text-5xl'>We have already</h2>
        <div className='flex justify-around gap-3 flex-wrap mt-[6rem]'>
        <div className='transition-all duration-200 cursor-pointer hover:bg-blue-200 w-[350px] h-[350px] grid grid_rows-2 rounded-[15px]'>
        <div className='w-[350px] h-[150px]'>
            <img src={food} className='w-[100%] y-[100%] rounded-tl-[15px] rounded-tr-[15px]' />
        </div>
        <div className='p-3 flex flex-col items-center justify-center'>
               <h3 id="feed" className='text-center font-bold  text-3xl mt-6'>455</h3>
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
        <h3 className='text-center text-3xl'>Money Donated</h3>
        </div>
        </div>
    </div>
    </div>
    );
};

export default AlreadyDone;