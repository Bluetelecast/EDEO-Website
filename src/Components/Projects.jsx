import violenceImg from '../assets/projects/reducingViolence.webp';
import childRight from '../assets/projects/childright.webp';
import kidSchool from '../assets/projects/kidsToSchool.webp';
import seminar from '../assets/projects/weekSeminar.jpeg';
import reducingStress from '../assets/projects/reducingStress.jpg';

import { useState } from "react";
import ProjectWrapper from './ProjectWrapper';

const Projects = ()=>{
    const [volunteers,setVolunteers]=useState([
            {
             title:'Reducing Violence Against Women',
             photo: violenceImg,
             description:'Reducing the violence....'   
            },
            {
                title:'Children Rights',
                photo: childRight,
                description:'Fighting for children rights....'
            },
            {
                title:'Kids to School',
                photo: kidSchool,
                description:'We are commited to help children turn back  to school....'
            },
            {
                title:"Children's week Seminar",
                photo: seminar,
                description:'Children week Seminar for children'
            },
            {
                title:"Reducing Stress,depression and unemployment of youths",
                photo: reducingStress,
                description:'Helping youth reducing the stress and unblock them....'
            }
        ])
    return(
  <div className="mt-[10rem] flex flex-col items-center pb-[3rem] project">
  <header className="mt-4 text-center">
      <h1 className="text-center text-5xl text-blue-950">Our projects & Achievements</h1>
  <p className="p-3">
  We are committed to creating projects that help transform lives.
  </p>
  </header>
  <div className="mt-[5rem] w-[90%] flex justify-center gap-5 flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-3 md:gap-x-5  sm:gap-x-5 sm:place-items-center sm:gap-y-[2rem]">
                {volunteers.length && volunteers.map((volunteer)=><ProjectWrapper object ={{...volunteer}}/>)}
  </div>
  
</div>
    );
};

export default Projects;