import React from 'react';
import { FaRegUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useFormContext } from './Context';


const SignUp = () => {

  const {name, setName, password, email, setEmail, setPassword, ispasswordVisible, Toggle, handleFields, isChecked, setIsChecked, handleSignUp, NewAccount, signupmessage} = useFormContext();
  return (
    <div className='bg-[url("public/Images/login-signup.jpg")] bg-cover bg-center flex justify-center items-center h-screen'>
    <div className=' h-auto w-80 p-8 rounded-md border border-solid border-opacity-10 shadow-xl' style={{backdropFilter: "blur(50px)"}}>
        <div className='flex flex-col justify-between items-center'>
        <div className='flex justify-start w-full'>
        <h1 className='text-2xl font-bold'>SignUp</h1>  
        </div>
        <form className='w-full pt-8' onSubmit={handleSignUp}>
            <span className='text-sm'>{signupmessage}</span>
            <div className='relative flex flex-col justify-center items-start gap-3'>
                <div className='relative w-full'>
            <input type="text" name='name' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} className='w-full rounded-md bg-gray-50 h-10 pl-4 pr-8 border focus:outline-none focus:outline-white' required/><FaRegUser className='absolute top-3 transform-translate-y-1/2 right-3 text-gray-600'/>
                </div>
                <div className='relative w-full'>
            <input type="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full rounded-md bg-gray-50 h-10 pl-4 pr-8 border focus:outline-none focus:outline-white' required autoComplete='email'/><MdOutlineMail className='absolute top-3 transform-translate-y-1/2 right-3 text-gray-600'/>
                </div>
                <div className='relative w-full'>
            <input type={ispasswordVisible? "text": "password"} name="password" placeholder='Password' value={password} autoComplete='off' onChange={(e) => setPassword(e.target.value)} className='w-full rounded-md bg-gray-50 h-10 pl-4 pr-8 border focus:outline-none focus:outline-white' required/>{ispasswordVisible? (<FaEyeSlash className='absolute top-3 transform-translate-y-1/2 right-3 text-gray-600 cursor-pointer' onClick={Toggle}/>):(<FaEye className='absolute top-3 transform-translate-y-1/2 right-3 text-gray-600 cursor-pointer' onClick={Toggle}/>)}
                </div>
            <div className='flex gap-2'>
            <input type='checkbox' id='terms' className='cursor-pointer' checked={isChecked} onChange={(e)=> setIsChecked(e.target.checked)}/><label  className='text-sm underline text-blue-500 cursor-pointer'>I agree with terms & conditions</label>
            </div>
            </div>
            <div className='flex flex-col items-center pt-5'>
            <button type='Submit' className='bg-gray-800 hover:bg-black text-white rounded-md p-2 w-full'  onClick={NewAccount}>Create Account</button>
            </div>
            </form>
            <div className='flex flex-col items-center gap-1 pt-2'>
            <Link to="/" className='pt-4 text-blue-500 hover:underline' onClick={handleFields}>Already have an account? LogIn</Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignUp;