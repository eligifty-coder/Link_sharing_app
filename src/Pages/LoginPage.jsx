import React, {useReducer} from 'react'

import devLinkIcon from '../assets/devlinkIcon.png'

import emailIcon from '../assets/EmailIcon.png'
import passwordIcon from '../assets/PasswordLockIcon.png'
import {initialState, actionTypes , loginFormReducer} from '../reducer/LoginFormReducer'






export default function Login() {
    const [formState, dispatch] = useReducer(loginFormReducer, initialState);
    const handleEmailChange = (value) =>
    dispatch({ type: actionTypes.UPDATE_EMAIL, payload: value });

    const handlePasswordChange = (value) =>
    dispatch({ type: actionTypes.UPDATE_PASSWORD, payload: value });
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const classNames = `flex ${!formState.email.isValid  && formState.email.isTouched? "border-red-600":''} gap-4 items-center p-4 text-[#D9D9D9] border-[0.0625rem] rounded-[0.5rem] `
    const passwordClassNames = ` ${!formState.password.isValid  && formState.password.isTouched? "border-red-600":''}  flex gap-4 items-center p-4 text-[#D9D9D9] border-[0.0625rem] rounded-[0.5rem]`
    const passwordText = `${!formState.password.isValid  || !formState.password.value ? "text-red" : ''}`
    return (
    <div className= {`font-Instrument-sans flex flex-col gap-16 sm:gap-12 bg-black/3 h-screen `}>
        <div className='flex items-center gap-[0.5rem] text-gray-700 font-bold text-4xl sm:justify-center px-8 pt-8 sm:pt-10'> <img src={devLinkIcon} alt="/" /> devlinks</div>
        <div className='w-full sm:max-w-119 mx-auto px-8 sm:p-10 flex flex-col justify-center gap-10 sm:bg-white'>
            <div className='leading-[150%]'>
                <h2 className='text-[2rem] font-bold text-[#333] leading-[150%]' >Login</h2>
                <p className='text-[1rem] text-[#737373]'>Add your details below to get back into the app</p>
            </div>
            <form 
            onSubmit={handleSubmit}
            className='flex flex-col gap-6'
            >
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className={`text-[0.75rem] text-[#333] ${!formState.email.isValid && (formState.email.isTouched && !formState.email.value) && 'text-[#FF3939]'}`}>Email address</label>
                    <div className= {`${classNames} justify-between`}>
                        <div className='flex items-center gap-4'>
                            <img  className='object-cover w-[0.8125rem] h-[0.625rem]' src={emailIcon} alt="/" /> <input className='border-none font-[1rem] text-[#333333]' type="email"
                    placeholder='e.g. alex@email.com'
                    
                    value={formState.email.value}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    />
                        </div>
                    {formState.email.isTouched &&  !formState.email.value && <p className='text-[#FF3939] text-xs font-normal hidden sm:block'>Can’t be empty</p>}
                    </div>
                    {formState.email.isTouched &&  !formState.email.value && <p className='text-[#FF3939] text-xs font-normal self-end pr-4 sm:hidden'>Can’t be empty</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="password" className={`text-[0.75rem] text-[#333] ${!formState.password.isValid && (formState.password.isTouched && !formState.password.value) && 'text-[#FF3939]'} `}>Password </label>
                    <div className= {`${passwordClassNames} justify-between `}>
                    <div className='flex items-center gap-4'>
                        <img src={passwordIcon} alt="/" /> 
                        <input 
                        className='font-[1rem] text-[#333333]' 
                        type="password"  
                        placeholder='Enter your password'
                        value={formState.password.value}
                        onChange={(e) => handlePasswordChange(e.target.value)}/>
                    </div>
                    {formState.password.isTouched &&  !formState.password.value && <p className='text-[#FF3939] text-xs font-normal hidden sm:block'>Please check again</p>}
                    </div>
                    {formState.password.isTouched &&  !formState.password.value && <p className='text-[#FF3939] text-xs font-normal self-end pr-4 sm:hidden'>Please check again</p>}
                </div>
                <button
                type="submit"
                className='bg-[#633CFF] hover:bg-purple-900 rounded-[0.5rem] text-white  relative p-4 text-center text-[1rem] font-semibold'
                >
                    Login
                </button>
                <div className='flex flex-col items-center'>
                    <p className='text-[#737373] font-[1rem]'>Don’t have an account? <button className=' mx-auto block  sm:inline text-[#633CFF] hover:text-purple-900  font-[1rem]'>Create account</button> </p>
                    
                </div>
            </form>
        </div>
    </div>
)
}