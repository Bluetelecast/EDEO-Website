import womenSigning from '../assets/women-signing.jpg'
import food from '../assets/feeded.jpg'
import shelters from '../assets/shelters.jpg'
import money from '../assets/dollar.jpg'
import office from '../assets/ProjectOfficer.jpg'
import logo from '../assets/logo.jpg'

import { EnvelopeIcon, HeartIcon, HomeIcon, HomeModernIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/16/solid'
import Footer from './Footer'
import Contact from './Contact'
import CurrentProject from './CurrentProject'
import Quote from './Quote'
import AlreadyDone from './AlreadyDone'
import Hero from './Hero'


const Main = ()=>{
    return (
        <div className="mt-[120px]">
            <Hero />
            <AlreadyDone />
            <Quote/>
            <CurrentProject/>
        </div>
    );
};

export default Main;