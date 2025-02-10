import logo from '../assets/logo.jpg'
import { EnvelopeIcon,HomeIcon,MapPinIcon, PhoneIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion';

const Footer = ()=>{
    return (
            <footer className='bg-blue-400  flex flex-col items-center'>
                <div className='mt-[4rem] w-[96%] h-[3px] rounded bg-white/50'></div>
            <div className='mt-[1rem] flex w-[100%] justify-evenly items-center p-4 flex-wrap'>
                <motion.div
                whileInView={{rotate:360,transition:{
                    repeat: Infinity,
                    duration:3}}}
                 className='w-[100px] h-[100px]'>
                    <img src={logo} className='w-[100%] h-[100%] rounded-[50%]' />
                </motion.div>
                        <div className='flex flex-col gap-3 text-white mt-[1rem]'>
                        <p className='flex gap-2 items-center'><HomeIcon className='w-5 h-5'/> <a href="https://edeo.org.af" target='_blank'>edeo.org.af</a>
                        </p>
                            <p className='flex gap-2 items-center'><EnvelopeIcon className='w-5 h-5'/> Email: <a href="mailto:info@edeo.org.af">info@edeo.org.af</a>
                            </p>
                            <p className='flex gap-2 items-center'><PhoneIcon className='w-5 h-5'/><a href="tel:+93786331332">(+93) 786 331 332</a></p>
                            <p className='flex gap-2 items-center'><MapPinIcon className='w-5 h-5'/>Wazir Akbar Khan, Sherpor, PD10, Kabul - Afghanistan</p>
                        </div>
            </div>
            </footer>
    )
};

export default Footer;