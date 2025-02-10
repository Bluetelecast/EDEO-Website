const Contact = ()=>{
    return (
        <section className='h-[auto]  mt-[8rem] bg-blue-400' style={{
            borderTopLeftRadius:'40px',
            borderTopRightRadius:'40px'

        }} id="contact">
        <div className='pt-[10px]'>
        <h2 className='p-3 pb-0 text-end text-3xl sm:text-5xl mt-[5rem] text-white'>Get in touch</h2>
        <p className='text-end text-white p-5'>We love to hear from you</p>
        </div>

        <div className='flex justify-around'>
        <form className='flex flex-col items-center mt-[3rem] gap-4 w-[550px] sm:w-[650px]'>
            <div className='flex flex-col text-white gap-1 w-[90%]'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' className='p-2 bg-black/40 rounded'/>
            </div>
            {/* <div className='flex flex-col text-white gap-1 w-[90%]'>
                <label htmlFor="company">Company</label>
                <input type="text" id='company' className='p-2 bg-black/40 rounded'/>
            </div> */}


            <div className='flex flex-col text-white gap-1 w-[90%]'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' className='p-2 bg-black/40 rounded'/>
            </div>

            <div className='flex flex-col text-white gap-1 w-[90%]'>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id='phone' className='p-2 bg-black/40 rounded'/>
            </div>
            
            <div className='flex flex-col text-white gap-1 w-[90%]'>
            <label htmlFor="message">Message</label>
            <textarea id='message' className='h-[250px] p-2 bg-black/40 rounded resize-none' >
            </textarea>
            </div>

            <div className='flex flex-col text-white gap-1 w-[90%]'>
                <button className='cursor-pointer p-3 bg-black/40 rounded hover:bg-white hover:text-blue-500' type='button'>Send Message</button>
            </div>
        </form>
        </div>
        </section>

    );
};

export default Contact;