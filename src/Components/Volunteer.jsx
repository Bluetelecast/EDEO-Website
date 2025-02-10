import sameer from '../assets/volunteers/sameer.jpg';
import fayaz from '../assets/volunteers/Fayaz.jpeg';
import bhat from '../assets/volunteers/Bhat.jpeg';
import nisa from '../assets/volunteers/Nisa.jpeg';
import sarafraz from '../assets/volunteers/sarafraz.jpeg';
import rashid from '../assets/volunteers/Rashid.jpg';
import khalid from '../assets/volunteers/khalid.jpeg'
import nouser from '../assets/volunteers/user.svg'

import { useState } from "react";
import VolunteerWrapper from "./VolunteerWrapper";
import { useNavigate } from 'react-router-dom';

const Volunteer = ()=>{
    const navegate = useNavigate();
    const [volunteers,setVolunteers]=useState([
        {
         name:'Sameer Ahmadi Safir',
         photo: sameer   
        },
        {
            name:'Khalid Momand',
            photo: khalid   
        },
        {
            name:'Sarfaraz Nawabzada',
            photo: sarafraz   
        },
        {
            name:'Mohammad Ismail Bhat',
            photo: bhat   
        },
        {
            name:'Mahbooba Nisa',
            photo: nisa   
        },
        {
            name:'Fayaz Mirzad',
            photo: fayaz   
        },

        {
            name:'Asadullah Rashid',
            photo: rashid   
        },
        {
            name:'Nazifa Stanikzai',
            photo: nouser   
        },
        {
            name:'Mursal Nomani',
            photo: nouser   
        }
    ])
    return(
        <div className="mt-[10rem] flex flex-col items-center pb-[3rem]">
            <header className="mt-4 text-center">
            <h1 className="text-center text-5xl text-blue-950">Our Team</h1>
            <p className="p-3">
            We have a strong team to help the helpless.
            </p>
            </header>
            <div className="mt-[5rem] w-[80%] flex justify-center gap-5 flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-3 md:gap-x-5  sm:gap-x-5 sm:place-items-center sm:gap-y-[2rem]">
                {volunteers.length && volunteers.map((volunteer)=><VolunteerWrapper object ={{...volunteer}}/>)}
            </div>
            <button onClick={()=>{navegate('/contacts');window.scrollTo(0,0)}} className='m-4 p-4 bg-blue-400 mt-[5rem] text-white cursor-pointer'>Become Member</button>
        </div>
    )
};

export default Volunteer;