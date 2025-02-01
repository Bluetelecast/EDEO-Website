import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import { Bars2Icon } from '@heroicons/react/16/solid';
const Header = ()=>{
    
    return(
        <header className="fixed w-[95%] sm:w-[99%] pt-3 top-0 bg-white flex justify-between items-center">
            <div className="w-[50px] y-[50px]">
                <img src={logo} className='w-[100%] h-[100%] transition-all duration-100 cursor-pointer'/>
            </div>
            <Bars2Icon className='w-7 y-7 text-blue-500 cursor-pointer'/>
            {/* <nav className="flex gap-4 bg-blue-100 p-3 rounded-[30px]">
                <Link to={''}>Home</Link>
                <Link to={''}>About Us</Link>
                <Link to={''}>Project</Link>
                <Link to={''}>Our Activities</Link>
                <Link to={''}>Contact Us</Link>
                <Link to={''}>Donate</Link>            
            </nav> */}
        </header>
    );
};

export default Header;