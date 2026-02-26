import mainIcon from '/blinkit.svg'
import { Link } from 'react-router-dom'

export function Navbar({setOpen,cart}) {
  return (
    <>
      <nav className="flex justify-between items-center w-full h-22 border-b-2 border-gray-200 fixed bg-white top-0">
        <div className='hover:bg-gray-50 transition-all cursor-pointer h-full flex justify-center items-center px-8'>
          <Link to="/">
            <img className='h-8' src={mainIcon}></img>
          </Link>
        </div>
        <div className="flex gap-10 w-full h-full items-center px-10 border-l-2 border-l-gray-200">
          <div className='flex flex-col'>
            <span className='font-sans text-lg font-bold'>Delivery in 15 minutes</span>
            <div className='w-50 flex items-center cursor-pointer'>
              <span className='font-inter text-sm font-light truncate'>784,B-Block,Kidwai Colony,Delhi</span>
              <span>▼</span>
            </div>
          </div>
          <input className='bg-gray-100 flex-1 h-12 rounded-xl px-5 text-sm '
            type='text'
            placeholder='Search "bread"'></input>
          <div>
            <span className='hover:bg-gray-50 transition-all cursor-pointer h-full p-7 text-xl'>Login</span>
            <span onClick={()=>{setOpen(true)}} className={`cursor-pointer text-md rounded-lg p-4 font-bold text-white ${(cart.length === 0)?"bg-gray-300":"bg-green-700"}`}>🛒 My Cart</span>
          </div>
        </div >
      </nav >
    </>
  )
}