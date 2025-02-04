import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import { Bars2Icon } from '@heroicons/react/16/solid';
import Navegation from './Navegation';
import { useDispatch } from 'react-redux';
import { showMenu } from '../Global_feature/GlobalSlice';
const Header = ()=>{
    const navegate = useNavigate();
    const dispatch = useDispatch();
    return(
        <header className="fixed w-[100%] p-3 top-0 bg-white flex justify-between items-center">
            <div className="w-[50px] y-[50px] sm:w-[70px] sm:y-[70px]">
                <img src={logo} onClick={()=>navegate('/')} className='w-[100%] h-[100%] transition-all duration-100 cursor-pointer'/>
            </div>
            <button onClick={()=>dispatch(showMenu())}>
          <Bars2Icon className='w-7 y-7 text-blue-500 cursor-pointer block md:hidden'/>  
            </button>
           <Navegation />
        </header>
    );
};

export default Header;