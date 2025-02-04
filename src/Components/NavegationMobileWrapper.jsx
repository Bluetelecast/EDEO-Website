import logo from "../assets/logo.jpg";
import { XMarkIcon } from "@heroicons/react/16/solid"
import { useDispatch } from "react-redux";
import { hideMenu } from "../Global_feature/GlobalSlice";
import MobileNavegation from "./MobileNavegation";

const NavegationMobileWrapper=()=>{

    const dispatch = useDispatch();

    return(
        <>       
        <div className="fixed top-[0] w-[100%] h-[100%] bg-white md:hidden">
        <div className="flex justify-end p-4">
         <button onClick={()=>{dispatch(hideMenu())}} className="cursor-pointer"><XMarkIcon className="w-7 h-7 text-blue-500"/></button>
        </div>
         <MobileNavegation/>
         <div className="flex justify-center mt-[1rem]">
         <div className="w-[90px] h-[90px]">
           <img src={logo} alt="" className="w-[100%] h-[100%]" />
         </div>
         </div>
       </div>
       </>
    )
};

export default NavegationMobileWrapper;
