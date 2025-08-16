import React from 'react'

import devLinkIcon from '../assets/devlinkIcon.png'
import devLinkText from '../assets/devlinksText.png'
import emailIcon from '../assets/EmailIcon.png'
import passwordIcon from '../assets/PasswordLockIcon.png'
export default function Login3() {
    return (
    <div className='font-Instrument-sans flex flex-col gap-16 md:gap-12 bg-white '>
        <div className='flex items-center gap-[0.5rem] text-gray-700 font-bold text-4xl md:justify-center px-8 md:0'> <img src={devLinkIcon} alt="/" /> devlinks</div>
        <div className='w-full md:max-w-119 bg-red-500 mx-auto px-8 md:px-10 flex flex-col justify-center gap-10'>
            <div>
                <h2>Login</h2>
                <p>Add your details below to get back into the app</p>
            </div>
            <form>
                <div>
                    <label htmlFor="email">Email address</label>
                    <div> <img src={emailIcon} alt="/" /> <input type="email"  placeholder='e.g. alex@email.com'/></div>
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    <div> <img src={passwordIcon} alt="/" /> <input type="password"  placeholder='Enter your password'/></div>
                </div>
                <button>Login</button>
                <div>
                    <p>Don’t have an account? </p>
                    <button>Create account</button>
                </div>
            </form>
        </div>
    </div>
    // <div className='w-full h-screen flex'>
    //     <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
    //         <div className='w-full h-[550px] hidden md:block'>
    //             <img className='w-full h-full' src={trees} alt="/" />
    //         </div>
    //         <div className='p-4 flex flex-col justify-around'>
    //             <form>
    //                 <h2 className='text-4xl font-bold text-center mb-8'>BRAND.</h2>
    //                 <div className='flex'>
    //                     <input className='w-full border p-2 mr-2' type="text" placeholder='Username' />
    //                     <input className='w-full border p-2' type="password" placeholder='Password' />
    //                 </div>
    //                 <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500'>Sign In</button>
    //                 <p className='text-center'>Forgot Username or Password?</p>
    //             </form>
    //             <p className='text-center'>Sign Up</p>
    //         </div>
    //     </div>
    // </div>
  )
}