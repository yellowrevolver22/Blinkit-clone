import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { Categories } from "../components/Categories";
import { ScrollProducts } from "../components/ScrollProducts";

export function HomePage({setCart,AddToCart}){
  return (
    <>
      <Banner />
      <Categories />
      <ScrollProducts AddToCart={AddToCart} setCart={setCart} name={"Dairy Bread Eggs"}/>
      <ScrollProducts AddToCart={AddToCart} name={"Paan Corner"}/>
      <ScrollProducts AddToCart={AddToCart} name={"Snacks Munchies"}/>
    </>
  )
}