import office from '../assets/ProjectOfficer.jpg'

const CurrentProject = ()=>{

    return(
        <section className='mt-[8rem] mb-[5rem] p-3'>
        <h2 className='text-center sm:text-end text-3xl sm:text-5xl text-blue-500'>Our current Project</h2>
        <div className='flex mt-[3rem] sm:h-[250px]  gap-2 flex-wrap sm:flex-nowrap'>
            <div className='h-[100%]'>
                <img src={office} className='w-[100%] h-[100%] min-w-[300px]'/>
            </div>
            <div className='p-4 flex flex-col'>
                <h3 className='font-normal text-2xl text-blue-950'>Certified Project Officer Certification Program</h3>
                <p className='mt-3'>This comprehensive program is designed to equip you with the essential skills and knowledge to excel in your career in any field.</p>
                <div className='self-end mt-auto p-2'>
                <button className='m-4 p-4 bg-blue-500 text-white cursor-pointer'>Donate</button>
                </div>
            </div>
        </div>
    </section>
    )

};

export default CurrentProject;