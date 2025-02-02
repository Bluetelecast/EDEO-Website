const VolunteerWrapper = ({object})=>{
    return (
        <div>
        <div className="w-[270px] h-[270px]">
        <img src={object.photo} alt="Sameer"  className='rounded-[50%] w-[100%] h-[100%] border-6 border-blue-200'/>
        </div>
        <h4 className='text-center font-bold text-2xl mt-4'>{object.name}</h4>
        <p className='text-center font-light text-2xl'>Volunteer</p>
    </div>
    );
};

export default VolunteerWrapper;
