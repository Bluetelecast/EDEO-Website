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
import { useSelector } from "react-redux"
import NavegationMobileWrapper from "./Components/NavegationMobileWrapper"


function App() {

  const state=useSelector((state)=>state.globalState);

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
          <NavegationMobileWrapper/>
        )}        
        <Footer />
      </div>
    </>
  )
}

export default App
