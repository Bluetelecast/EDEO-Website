const ProjectWrapper = ({object})=>{
    return (
        <div className="flex flex-col p-4">
        <div className="w-auto h-[300px]">
        <img src={object.photo} alt="Sameer"  className='w-[100%] h-[100%] m-h-[300px]'/>
        </div>
        <div>
            <h3 className="text-blue-400 text-sm md:text-md mt-[1rem]">{object.title}</h3>
        </div>
        <button className="p-3 bg-blue-500 text-white mt-[1rem] cursor-pointer">Read More</button>
    </div>
    );
};

export default ProjectWrapper;
