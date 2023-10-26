import React, {useState} from 'react'

const Form = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleInputChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className='flex justify-start items-center bg-gradient-to-t from-blue-400 to-blue-600 h-screen text-gray-600'>
            <div className='bg-white  w-1/2 h-screen'>
                <div className='p-5 flex flex-col '>
                    <div className='flex flex-col items-center'>
                       <p className='text-blue-500 font-bold text-2xl  '>Add Item</p>
                    </div>
                    <div className='flex flex-col items-start p-5'>
                        <h2>Item Name</h2>
                       <input type="text" className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      ' name="item"/>
                       <label htmlFor="myInput">Select an option:</label>
                        <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      '
                          type="text"
                          id="myInput"
                          list="myOptions"
                          value={selectedValue}
                          onChange={handleInputChange}
                        />
                        <datalist id="myOptions">
                          <option value="Food" />
                          <option value="Electronics" />
                          <option value="Clothes" />
                        </datalist>
                       <h2>Number in stock</h2>
                       <input type="text" className='mt-1 block w-1/2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      '/>       
                     <h2>Available in Stock</h2>
                      <label className='bg-gray-50 border mt-5 border-blue-300 peer-checked:border-blue-900 cursor-pointer relative w-14 h-8 rounded-full'>
                        <input type="checkbox" className='sr-only peer' />
                        <span className='w-5 h-5 bg-blue-100 absolute rounded-full left-1 top-1 peer-checked:bg-blue-600  peer-checked:left-7 '></span>
                      </label>
                      <button className='text-white mt-10 rounded-2xl font-semibold bg-blue-400 w-full h-10'>Submit</button>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
  )
}

export default Form