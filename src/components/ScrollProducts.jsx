import { productData } from "../assets/categoriesProductData"

export function ScrollProducts({ name,AddToCart }) {

  const filterProducts = productData.filter((product) => {
    return product.category == name;
  })

  return (
    <>
      <div className="flex flex-col items-center py-5">
        <div className="flex justify-start w-305 py-2">
          <h2 className="text-2xl font-bold p-2">{name}</h2>
        </div>
        <div className="flex space-x-1">
          {
            filterProducts.map((product) => {
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
                      <button className='cursor-pointer rounded-md border border-green-700 px-3 py-2 bg-green-50 text-green-700'
                      onClick={()=>{AddToCart(product)}}>
                        ADD</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}