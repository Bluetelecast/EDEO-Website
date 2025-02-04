import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import { Bars2Icon } from '@heroicons/react/16/solid';
import LinkItem from './LinkItem';
const Header = ()=>{
    const navegate = useNavigate();
    return(
        <header className="fixed w-[100%] p-3 top-0 bg-white flex justify-between items-center">
            <div className="w-[50px] y-[50px] sm:w-[70px] sm:y-[70px]">
                <img src={logo} onClick={()=>navegate('/')} className='w-[100%] h-[100%] transition-all duration-100 cursor-pointer'/>
            </div>
          <Bars2Icon className='w-7 y-7 text-blue-500 cursor-pointer block sm:hidden'/>  
            <nav className="hidden gap-4 p-3 sm:flex">
                
                <LinkItem to={'/'} name={"Home"}/> 
                <LinkItem to={'/about'} name={"About Us"}/>
                <LinkItem to={'/projects'} name={"Projects"}/>
                <LinkItem to={'/volunteers'} name={"Volunteers"}/>
                <LinkItem to={'/what_we_do'} name={"What we do"}/>
                <LinkItem to={'/contacts'} name={"Contact us"}/>
                <LinkItem to={'/donate'} name={"Donate"}/>            
            </nav>
        </header>
    );
};

export default Header;