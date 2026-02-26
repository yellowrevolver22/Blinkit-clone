import { useParams } from 'react-router-dom';
import { productData } from '../assets/categoriesProductData';
import { categories } from '../assets/categoriesData';

export function CategoriePage({ AddToCart }) {

  const { name } = useParams();
  const decodedName = decodeURIComponent(name);

  const filterProducts = productData.filter((product) => {
    return product.category == decodedName;
  })

  const filterContent = categories.find((content) => {
    return content.name == decodedName;
  })

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-5xl shadow-gray-400 shadow flex flex-col">
          <h3 className="border-b-2 border-gray-200 p-3 font-bold">{filterContent.title}</h3>
          <div className="flex flex-wrap justify-center gap-4 bg-gray-100 h-120 overflow-y-scroll">
            {filterProducts.map((product) => {
              return (
                <div key={product.productId} className="flex flex-col w-50 h-85 p-2 shadow-gray-400 shadow bg-white rounded-xl">
                  <img className='rounded-xl' src={product.image}></img>
                  <div className='flex flex-col p-2 gap-1 h-full justify-between'>
                    <div className='font-sans flex flex-col gap-1'>
                      <span className='text-sm font-sans font-bold'>{product.name}</span>
                      <span className=' text-sm text-gray-400'>{product.type}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-md'>{product.price}</span>
                      <button className='cursor-pointer rounded-md border
                      border-green-700 px-3 py-2 bg-green-50 text-green-700'
                        onClick={() => {
                          AddToCart(product);
                        }}>ADD
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='w-full flex justify-center'>
            <div className='w-7xl flex flex-col justify-center p-4 gap-3'>
              <h1 className='font-bold text-2xl'>
                {filterContent.title}
              </h1>
              <p>
                {filterContent.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}