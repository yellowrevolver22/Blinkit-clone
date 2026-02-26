import { Fragment } from "react";

export function CartDrawer({ setOpen, open, cart, setCart }) {

  const totalPrice = () => {

    let price = 0;

    cart.forEach((cartItem) => {
      price += cartItem.price * cartItem.quantity;
    });

    return price;
  }

  const delivery = 25;
  const handling = 2;
  const smallCart = 20;
  const grandTotal = totalPrice() + delivery + handling + smallCart;

  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.productId === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.productId === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0) // remove if 0
    );
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40"></div>
      )
      }

      <div className={`fixed right-0 top-0 h-full w-95 bg-white z-50 flex flex-col shadow-xl
      ${open ? "translate-x-0" : "translate-x-full"}`}>

        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold">My Cart</h2>
          <button className="text-xl" onClick={() => {
            setOpen(false);
          }}>✕</button>
        </div>

        {/* SCROLL AREA */}

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.map((cartItem) => {
            return (
              <Fragment key={cartItem.productId}>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex gap-3">
                    <div className="text-2xl">⏱</div>
                    <div>
                      <p className="font-semibold">Delivery in 9 minutes</p>
                      <p className="text-sm text-gray-500">Shipment of 1 item</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={cartItem.Image}
                    className="w-14 h-14 rounded-lg bg-gray-100"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-tight">
                      {cartItem.name}
                    </p>
                    <p className="text-xs text-gray-500">{cartItem.type}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-semibold text-sm">₹{cartItem.price}</span>
                    </div>
                  </div>
                  <div className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm flex gap-2">
                    <button onClick={()=>{increaseQty(cartItem.productId)}}>+</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={()=>{decreaseQty(cartItem.productId)}}>-</button>
                  </div>
                </div>
              </Fragment>
            )
          })}

          {/* BILL DETAILS */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-2">
            <h3 className="font-semibold mb-2">Bill details</h3>

            <Row label="Items total" value={`₹${totalPrice()}`} />
            <Row label="Delivery charge" value="₹25" />
            <Row label="Handling charge" value="₹2" />
            <Row label="Small cart charge" value="₹20" />

            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>Grand total</span>
              <span>₹{(cart.length === 0) ? "0" : grandTotal}</span>
            </div>
          </div>

          {/* POLICY */}
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold">Cancellation Policy</p>
            <p className="text-xs text-gray-500 mt-1">
              Orders cannot be cancelled once packed for delivery.
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-4 border-t">
          <button onClick={() => { setCart([]) }} className="w-full cursor-pointer bg-green-600 text-white py-3 rounded-xl flex justify-between items-center px-4 font-semibold">
            <span>₹{(cart.length === 0) ? "0" : grandTotal} TOTAL</span>
            <span>Login to Proceed →</span>
          </button>
        </div>
      </div>
    </>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-600">{label}</span>
      <span>{value}</span>
    </div>
  );
}