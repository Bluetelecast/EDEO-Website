const Contact = ()=>{
    return (
        <section className='h-[800px] mt-[0] bg-blue-400'>
        <div className=''>
        <h2 className='p-5 pb-0 text-end text-3xl sm:text-5xl mt-[5rem] text-white'>Get in touch</h2>
        <p className='text-end text-white p-5'>We love to hear from you</p>
        </div>

        <div className='flex justify-around'>
        <form className='flex flex-col items-center mt-[3rem] gap-5'>
            <div className='flex flex-col text-white gap-1'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' className='p-2 bg-black/40 rounded w-[500px]'/>
            </div>
            <div className='flex flex-col text-white gap-1'>
                <label htmlFor="company">Company</label>
                <input type="text" id='company' className='p-2 bg-black/40 rounded w-[500px]'/>
            </div>


            <div className='flex text-white items-center gap-[10px]'>
                <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' className='p-2 bg-black/40 rounded w-[245px]'/>
                </div>

                <div className='text-white flex flex-col gap-1'>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id='phone' className='p-2 bg-black/40 rounded w-[245px]'/>
                </div>
            </div>
            <div className='flex flex-col text-white gap-1'>
            <label htmlFor="message">Message</label>
            <textarea id='message' className='w-[500px] h-[250px] p-2 bg-black/40 rounded resize-none' >
            </textarea>
            </div>

            <div className='text-white w-[500px]'>
                <button className='cursor-pointer w-[100%] p-3 bg-black/40 rounded' type='button'>Send Message</button>
            </div>
        </form>
        </div>
        </section>

    );
};

export default Contact;