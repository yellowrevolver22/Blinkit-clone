import './App.css'
import { HomePage } from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { CategoriePage } from './pages/CategoriePage'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { CartDrawer } from './components/Cart'
import { useState } from 'react'
import { cartData } from './assets/cartData.js'

function App() {

  const [cart, setCart] = useState(cartData);
  const [open, setOpen] = useState(false);

  function AddToCart(product) {
    setCart(
      prev => {
        const exist = prev.find((p) => { return p.productId === product.productId });

        if (exist) {
          return prev.map((p) => {
            return (
              (p.productId === product.productId)
                ? { ...p, quantity: p.quantity + 1 }
                : p
            )
          })

        }

        return [...prev,
        {
          productId: product.productId,
          name: product.name,
          type: product.type,
          price: product.price,
          Image: product.image,
          quantity: 1,
        }]

      }
    )
  }

  return (
    <div className='pt-22'>
      <ScrollToTop />
      <Navbar cart={cart} setOpen={setOpen} />
      <CartDrawer setOpen={setOpen} open={open} cart={cart} setCart={setCart} AddToCart={AddToCart}/>

      <Routes>
        <Route path='/' element={<HomePage setCart={setCart} AddToCart={AddToCart}/>} />
        <Route path='/categories/:name' element={<CategoriePage setCart={setCart} cart={cart} AddToCart={AddToCart} />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
