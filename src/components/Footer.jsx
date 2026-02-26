import { Link } from "react-router-dom"

export function Footer() {
  return (
    <>
      <div className="w-full flex gap-25 justify-center py-16">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold font-sans">Useful Links</h1>
          <div className="flex text-gray-500 gap-18 text-sm">
            <ul className="flex flex-col gap-3">
              <li>Blog</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>FAQs</li>
              <li>Security</li>
              <li>Contact</li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li>Partner</li>
              <li>Franchise</li>
              <li>Seller</li>
              <li>Warehouse</li>
              <li>Deliver</li>
              <li>Resources</li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li>Recipes</li>
              <li>Bistro</li>
              <li>District</li>
              <li>Blinkit Ambulance</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold font-sans">
            Categories
            <span className="cursor-pointer hover:underline text-lg text-green-700 font-extralight mx-3">see all</span>
          </h1>
          <div className="flex text-gray-500 gap-25 text-sm">
            <ul className="flex flex-col gap-3">
              <li><Link to="/categories/Paan%20Corner">Paan Corner</Link></li>
              <li><Link to="/categories/Dairy%20Bread%20Eggs">Dairy, Bread & Eggs</Link></li>
              <li><Link to="/categories/Fruits%20Vegetables">Fruits & Vegetables</Link></li>
              <li><Link to="/categories/Cold%20Drinks%20Juices">Cold Drinks & Juices</Link></li>
              <li><Link to="/categories/Snacks%20Munchies">Snacks & Munchies</Link></li>
            </ul>

            <ul className="flex flex-col gap-3">
              <li><Link to="/categories/Breakfast%20Instant%20Food">Breakfast & Instant Food</Link></li>
              <li><Link to="/categories/Sweet%20Tooth">Sweet Tooth</Link></li>
              <li><Link to="/categories/Bakery%20Biscuits">Bakery & Biscuits</Link></li>
              <li><Link to="/categories/Tea%20Coffee%20Health%20Drink">Tea, Coffee & Milk Drinks</Link></li>
              <li><Link to="/categories/Atta%20Rice%20Dal">Atta, Rice & Dal</Link></li>
            </ul>

            <ul className="flex flex-col gap-3">
              <li><Link to="/categories/Masala%20Oil%20More">Masala, Oil & More</Link></li>
              <li><Link to="/categories/Sauces%20Spreads">Sauces & Spreads</Link></li>
              <li><Link to="/categories/Baby%20Care">Baby Care</Link></li>
              <li><Link to="/categories/Pharma%20Wellness">Pharma & Wellness</Link></li>
              <li><Link to="/categories/Pet%20Care">Pet Care</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-10 flex flex-col gap-3">
        <div className="text-sm text-center text-gray-700">© Blink Commerce Private Limited, 2016-2026</div>
        <p className="text-sm text-gray-700">
          “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related,
          linked or interconnected in whatsoever manner or nature,
          to “GROFFR.COM” which is a real estate services business
          operated by “Redstone Consultancy Services Private Limited”.
        </p>
      </div>
    </>
  )
}