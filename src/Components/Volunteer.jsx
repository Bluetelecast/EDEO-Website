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

const Volunteer = ()=>{
    const [volunteers,setVolunteers]=useState([
        {
         name:'Sameer Ahmadi Safir',
         photo: sameer   
        },
        {
            name:'Sameer Ahmadi Safir',
            photo: khalid   
        },
        {
            name:'Sameer Ahmadi Safir',
            photo: sarafraz   
        },
        {
            name:'Sameer Ahmadi Safir',
            photo: bhat   
        },
        {
            name:'Sameer Ahmadi Safir',
            photo: nisa   
        },
        {
            name:'Sameer Ahmadi Safir',
            photo: fayaz   
        },

        {
            name:'Sameer Ahmadi Safir',
            photo: rashid   
        },
        {
            name:'Sameer Ahmadi Safir',
            photo: nouser   
        },
        {
            name:'Sameer Ahmadi Safir',
            photo: nouser   
        }
    ])
    return(
        <div className="mt-[10rem] flex flex-col items-center pb-[3rem]">
            <header className="mt-4 text-center">
            <h1 className="text-center text-5xl text-blue-950">Our Volunteers</h1>
            <p className="p-3">
            We have strong volunteer team to help the helpless.
            </p>
            </header>
            <div className="mt-[5rem] w-[80%] grid grid-cols-3  gap-x-1 place-items-center gap-y-[2rem]">
                {volunteers.length && volunteers.map((volunteer)=><VolunteerWrapper object ={{...volunteer}}/>)}
            </div>
        </div>
    )
};

export default Volunteer;