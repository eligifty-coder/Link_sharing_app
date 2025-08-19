import React from 'react'

import devLinkIcon from '../assets/devlinkIcon.png'
import devLinkText from '../assets/devlinksText.png'
import emailIcon from '../assets/EmailIcon.png'
import passwordIcon from '../assets/PasswordLockIcon.png'
export default function Login3() {
    return (
    <div className='font-Instrument-sans flex flex-col gap-16 md:gap-12 bg-black/3 h-screen '>
        <div className='flex items-center gap-[0.5rem] text-gray-700 font-bold text-4xl md:justify-center px-8 md:pt-10'> <img src={devLinkIcon} alt="/" /> devlinks</div>
        <div className='w-full md:max-w-119 mx-auto px-8 md:p-10 flex flex-col justify-center gap-10 md:bg-white'>
            <div className='leading-[150%]'>
                <h2 className='text-[2rem] font-bold text-[#333] leading-[150%]' >Login</h2>
                <p className='text-[1rem] text-[#737373]'>Add your details below to get back into the app</p>
            </div>
            <form className='flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-[0.75rem] text-[#333]' >Email address</label>
                    <div className='flex gap-4 items-center p-4 text-[#D9D9D9] border-[0.0625rem] rounded-[0.5rem]'> <img  className='object-cover w-[0.8125rem] h-[0.625rem]' src={emailIcon} alt="/" /> <input className='font-[1rem] text-[#333333]' type="email"  placeholder='e.g. alex@email.com'/></div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="password" className='text-[0.75rem] text-[#333]'>Password </label>
                    <di className='flex gap-4 items-center p-4 text-[#D9D9D9] border-[0.0625rem] rounded-[0.5rem]'> <img src={passwordIcon} alt="/" /> <input className='font-[1rem] text-[#333333]' type="password"  placeholder='Enter your password'/></di>
                </div>
                <button className='bg-[#633CFF] hover:bg-purple-900 rounded-[0.5rem] text-white  relative p-4 text-center text-[1rem] font-semibold '>Login</button>
                <div className='flex flex-col items-center'>
                    <p className='text-[#737373] font-[1rem]'>Don’t have an account? </p>
                    <button className=' text-[#633CFF] hover:text-purple-900  font-[1rem]'>Create account</button>
                </div>
            </form>
        </div>
    </div>
  )
}