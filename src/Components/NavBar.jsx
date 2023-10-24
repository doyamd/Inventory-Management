import React from 'react'

const NavBar = () => {
  return (
    <div className=' bg-blue-400 p-5 pt-2 h-14'>
        <div className='flex flex-row justify-between '>
        <img className='rounded-full w-10 h-10' src="https://i.pinimg.com/564x/69/7d/60/697d6066e1274eef5a61f7979a3b0cf2.jpg" alt="Logo" />
        <div className='text-white font-semibold'>
            <p>Welcome to your Inventory</p>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-white w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
        </div>
    </div>
     </div>
    
  )
}

export default NavBar