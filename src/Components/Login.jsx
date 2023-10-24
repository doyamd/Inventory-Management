import react, {useState} from 'react'

const Login = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        
        <div className='flex justify-center items-center bg-blue-300 h-screen text-gray-600'>
            <div className='bg-white rounded-2xl w-2/5 h-3/5 border-blue-400 border-2 shadow-xl'>
                <div className='p-5 flex flex-col '>
                    <div className='flex flex-col items-center'>
                       <p className='text-blue-500 font-bold text-2xl  '>Login</p>
                    </div>
                    <div className='flex flex-col items-start p-5'>
                        <p className='text-gray-600'>Enter Email</p>
                        <input className='w-full  h-10 mb-3 mt-3 bg-blue-50 rounded-lg'  type="email" autoComplete= 'off' name='email' value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                        <p className='text-gray-600'>Enter Password</p>
                        <input className='w-full h-10 mb-3 mt-3 bg-blue-50 rounded-lg' autoComplete= 'off' type="password" name='password' value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                    </div>
                    <button className='text-white m-2 rounded-2xl font-semibold bg-blue-400 w-full h-10'>Login</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Login