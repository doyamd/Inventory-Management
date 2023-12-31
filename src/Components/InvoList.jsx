import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
const InvoList = () => {
  return (
    <div>
      <NavBar/>
    <div className='flex flex-col p-5 m-10'>
        <div className='flex flex-row justify-between'>
            <p className='text-2xl'>Items</p>
            <Link to='/add'>Add</Link>
            
        </div>
        <div className='flex flex-row justify-between'>
          <div>
            <h3 className='text-lg font-semibold text-gray-600'>ID</h3>
            <h6>#1</h6>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-gray-600'>Item Name</h3>
            <h6>Samsung Mobile</h6>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-gray-600'>Description</h3>
            <h6>New</h6>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-gray-600'>Instock</h3>
            <h6>10</h6>
          </div>
        </div>
    </div>
    </div>
    
  )
}

export default InvoList