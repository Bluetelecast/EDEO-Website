import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'
const Header = ()=>{
    
    return(
        <header className=" w-[100%] flex justify-between p-2 items-center pb-5">
            <div className="w-[80px] y-[80px]">
                <img src={logo} className='w-[100%] h-[100%] transition-all duration-100 cursor-pointer'/>
            </div>
            <nav className="flex gap-4 bg-blue-100 p-3 rounded-[30px]">
                <Link to={''}>Home</Link>
                <Link to={''}>About Us</Link>
                <Link to={''}>Project</Link>
                <Link to={''}>Our Activities</Link>
                <Link to={''}>Contact Us</Link>
                <Link to={''}>Donate</Link>            
            </nav>
        </header>
    );
};

export default Header;