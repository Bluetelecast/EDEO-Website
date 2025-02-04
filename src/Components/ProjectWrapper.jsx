const ProjectWrapper = ({object})=>{
    return (
        <div className="grid p-4 gap-x-5" style={{ gridTemplateRows: '80fr 50px 60px' }}>
        <div className="w-[300px] sm:w-[300px] md:w-[350px] h-[300px]">
        <img src={object.photo} alt="Sameer"  className='w-[100%] h-[100%] m-h-[300px]'/>
        </div>
        <div>
            <h3 className="text-blue-400 text-md mt-[1rem]">{object.title}</h3>
        </div>
        <button className="p-3 bg-blue-500 text-white mt-[1rem] cursor-pointer">Read More</button>
    </div>
    );
};

export default ProjectWrapper;
