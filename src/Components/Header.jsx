import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import { Bars2Icon } from '@heroicons/react/16/solid';
const Header = ()=>{
    const navegate = useNavigate();
    return(
        <header className="fixed w-[100%] p-3 top-0 bg-white flex justify-between items-center">
            <div className="w-[50px] y-[50px] sm:w-[70px] sm:y-[70px]">
                <img src={logo} onClick={()=>navegate('/')} className='w-[100%] h-[100%] transition-all duration-100 cursor-pointer'/>
            </div>
          <Bars2Icon className='w-7 y-7 text-blue-500 cursor-pointer block sm:hidden'/>  
            <nav className="hidden gap-4 p-3 sm:flex">
                <Link to={''}>Home</Link>
                <Link to={'/about'}>About Us</Link>
                <Link to={'/projects'}>Projects</Link>
                <Link to={'/volunteers'}>Volunteers</Link>
                <Link to={'/what_we_do'}>What we do</Link>
                <Link to={'/contacts'}>Contact Us</Link>
                <Link to={''}>Donate</Link>            
            </nav>
        </header>
    );
};

export default Header;