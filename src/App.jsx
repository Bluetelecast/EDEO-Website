import { Route, Routes } from "react-router-dom"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Main from "./Components/Main"
import Volunteer from "./Components/Volunteer"
import About from "./Components/About"
import Projects from "./Components/Projects"
import WhatWeDo from "./Components/WhatWeDo"
import Donate from "./Components/Donate"
import MobileNavegation from "./Components/MobileNavegation"
import logo from "./assets/logo.jpg";
import { XMarkIcon } from "@heroicons/react/16/solid"
import { useDispatch, useSelector } from "react-redux"
import { hideMenu } from "./Global_feature/GlobalSlice"


function App() {

  const state=useSelector((state)=>state.globalState);
  const dispatch = useDispatch();

  return (
    <>
      <div className='h-screen w-screen p-0'>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/contacts" element={<Contact />}/>
          <Route path="/volunteers" element={<Volunteer />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/what_we_do" element={<WhatWeDo/>}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/donate" element={<Donate />}/>
        </Routes>
        {state.showMenu && (
          <div className="fixed top-[0] w-[100%] h-[100%] bg-white md:hidden">
          <div className="flex justify-end p-4">
           <button onClick={()=>{dispatch(hideMenu())}} className="cursor-pointer"><XMarkIcon className="w-7 h-7 text-blue-500"/></button>
          </div>
           <MobileNavegation />
           <div className="flex justify-center mt-[1rem]">
           <div className="w-[90px] h-[90px]">
             <img src={logo} alt="" className="w-[100%] h-[100%]" />
           </div>
           </div>
         </div>
        )}
        
        <Footer />
      </div>
    </>
  )
}

export default App
