import React from 'react'

const InvoList = () => {
  return (
    <div className='flex flex-col p-5 m-10'>
        <div className='flex flex-row justify-between'>
            <p className='text-2xl'>Items</p>
            <a href="#">Add</a>
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
  )
}

export default InvoList