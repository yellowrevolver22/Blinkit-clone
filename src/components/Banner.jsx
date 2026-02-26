import Vegetable from '/images/banners/Frame-1437256605-2-2.jpg'
import Pharmacy from '/images/banners/pharmacy-WEB.avif'
import PetFood from '/images/banners/pet_crystal_WEB-1.avif'
import BabyFood from '/images/banners/baby_crystal_WEB-1.avif'
import { Link } from 'react-router-dom'

export function Banner(){
  return (
    <div className='flex flex-col justify-center'>
      <div className='w-full flex justify-center items-center cursor-pointer'>
        <Link to="/categories/Fruits%20Vegetables">
          <img className='w-7xl' src={Vegetable}></img>
        </Link>
      </div>
      <div className='w-full flex justify-center my-4'>
        <div className='flex justify-start w-7xl gap-5 px-4 flex-wrap'>
          <Link to="/categories/Pharma%20Wellness"><img className='w-sm' src={Pharmacy}></img></Link>
          <Link to="/categories/Pet%20Care"><img className='w-sm' src={PetFood}></img></Link>
          <Link to="/categories/Baby%20Care"><img className='w-sm' src={BabyFood}></img></Link>
        </div>
      </div>
    </div>
  )
}