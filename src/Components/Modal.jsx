import { XMarkIcon } from "@heroicons/react/16/solid"
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../Global_feature/GlobalSlice";

const Modal=()=>{
    const dispatch = useDispatch();
    const project = useSelector((state)=>state.globalState.project);
    document.querySelector('.body').classList.add('no-scrool')
    return(
        <>       
        <div className="fixed top-[0] w-[100%] h-[100%] bg-white" style={{zIndex:4000, overflowY:'scroll'}}>
        <div className="flex justify-end p-4">
         <button onClick={()=>{
                document.querySelector('.body').classList.remove('no-scrool')
            dispatch(hideModal())
            }} className="cursor-pointer"><XMarkIcon className="w-7 h-7 text-blue-500"/></button>
        </div>

 <div className="relative mt-[1rem]" style={{aspectRatio:'16/9'}}>
    <div className={`absolute inset-0 p-5`}>
    <img src={project.photo} alt="child Smile" className="w-full h-full object-cover rounded" />
    </div>
</div>

<div className="p-4">
    
    <h1 className="text-2xl md:text-3xl font-bold text-start text-blue-500">{project.title}</h1>
    <div className="mt-[2rem]">
        <p>{project.description}</p>
    </div>
</div>
</div>
       </>
    )
};

export default Modal;
