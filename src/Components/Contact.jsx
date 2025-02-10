import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Contact = () => {
    const [message, setMessage] = useState({});
    const [phoneNumber, setPhoneNumber] = useState();
    const [messageObject, setMessageObject] = useState();
    const [errors, setErrors] = useState(null);

    const formHandler = (el) => {
        setMessageObject({
            ...messageObject,
            [el.target.name]: el.target.value
        });
    };

    const formValidation = (object) => {

        if (!object.Name) {
            setErrors((prev) => ({
                ...prev,
                NameError: "Name field can't be empty"
            }));
        }

        if (!object.Email) {
            setErrors((prev) => (
                {
                    ...prev,
                    EmailError: "Email field can't be empty"
                })
            )
        }

        if (!object.Phone) {
            setErrors((prev) => (
                {
                    ...prev,
                    PhoneError: "Please Enter a valid phone Number"
                })
            )
        }

        if (object.Phone!=undefined){
            if(object.Phone.length<9  || object.Phone.length>16) {
                setErrors((prev) => (
                    {
                        ...prev,
                        PhoneError: "Ensure to Enter a valid phone Number digits"
                    })
                )
            }
        } 
            


        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(object.Email)) {
            setErrors((prev) => ({
                ...prev,
                EmailError: "Please enter a valid email"
            }));
        }
        

        if (!object.Message) {
            setErrors((prev) => ({
                ...prev,
                MessageError: "Message field can't be empty"
            }))
        }

        if (object.Message && object.Message.length > 0 && object.Message.length < 10) {
            setErrors((prev) => ({
                ...prev,
                MessageError: "Please enter with more details"
            }))
        }
    }



    const formSubmitHandler = (el) => {
        el.preventDefault();
        const toSend = {
            ...messageObject,
            Phone: phoneNumber
        };
        setErrors(null);
        formValidation(toSend);
    }

    return (
        <section className='h-[auto]  mt-[8rem] bg-blue-400'
            style={{
                borderTopLeftRadius: '40px',
                borderTopRightRadius: '40px'

            }} id="contact">
            <div className='pt-[10px]'>
                <h2 className='p-3 pb-0 text-end text-3xl sm:text-5xl mt-[5rem] text-white'>Get in touch</h2>
                <p className='text-end text-white p-5'>We love to hear from you</p>
            </div>

            <div className='flex justify-around'>
                <form className='flex flex-col items-center mt-[3rem] gap-4 w-[550px] sm:w-[650px]'>
                    <div className='flex flex-col text-white gap-1 w-[90%]'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='Name' onChange={formHandler} id='name' className='p-2 bg-black/40 rounded' />
                        {errors!=null && errors.NameError && (<p className='text-red-600'>{errors.NameError}</p>)}
                    </div>

                    <div className='flex flex-col text-white gap-1 w-[90%]'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='Email' onChange={formHandler} id='email' className='p-2 bg-black/40 rounded' />
                        {errors!=null && errors.EmailError && (<p className='text-red-600'>{errors.EmailError}</p>)}
                    </div>

                    <div className='flex flex-col text-white gap-1 w-[90%]'>
                        <label htmlFor="phone">Phone</label>
                        <PhoneInput
                            id="phone"
                            className='p-2 bg-black/40 rounded outline-none border-none'
                            international
                            defaultCountry="AF"
                            limitMaxLength={17}
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                        />
                    {errors!=null && errors.PhoneError && (<p className='text-red-600'>{errors.PhoneError}</p>)}
                    </div>

                    <div className='flex flex-col text-white gap-1 w-[90%]'>
                        <label htmlFor="message">Message</label>
                        <textarea id='message' name='Message' onChange={formHandler} className='h-[250px] p-2 bg-black/40 rounded resize-none' >
                        </textarea>
                        {errors!=null && errors.MessageError && (<p className='text-red-600'>{errors.MessageError}</p>)}
                    </div>

                    <div className='flex flex-col text-white gap-1 w-[90%]'>
                        <button onClick={formSubmitHandler} type="button" className='cursor-pointer p-3 bg-black/40 rounded hover:bg-white hover:text-blue-500'>Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
