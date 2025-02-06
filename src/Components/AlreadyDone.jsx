import food from '../assets/feeded.jpg'
import shelters from '../assets/shelters.jpg'
import money from '../assets/dollar.jpg'
import { useState } from 'react';
import DoneCard from './DoneCard';

const AlreadyDone = ()=>{
    const [doneProject,setDoneProjects] = useState([
        {
            photo:food,
            number:455,
            title:'Feeded Homeless'
        },
        {
            photo:shelters,
            number:5,
            title:'Shelters built'
        },
        {
            photo:money,
            number:'$12000',
            title:'Money Donated'
        }
    ]);

    return(
        <div className='mt-[4rem] sm:mt-[8rem] alreadyDoneWrapper'>
        <h2 className='text-center text-blue-500 text-3xl sm:text-5xl'>We have already</h2>
        <div className='flex justify-around gap-3 flex-wrap mt-[6rem]'>
            {doneProject.map((project)=><DoneCard doneInfo={project} />)}
        </div>
        </div>
    );
};

export default AlreadyDone;