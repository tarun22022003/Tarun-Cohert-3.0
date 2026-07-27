import { Minus, Plus, Trash2 } from "lucide-react";
import { MyStore } from "../Context/MyContext";
import { useContext } from "react";

let cartItems = [
];

function Cart() {
  let {addCart} = useContext(MyStore)
    cartItems=addCart;
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity||1),
    0
  );
  console.log(subtotal);
  

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-5">

        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Cart Items */}

          <div className="lg:col-span-2 space-y-5">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row gap-5"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full md:w-40 h-40 object-cover rounded-xl"
                />

                <div className="flex-1">

                  <p className="text-blue-600 text-sm">
                    {item.category}
                  </p>

                  <h2 className="text-2xl font-semibold mt-1">
                    {item.name}
                  </h2>

                  <h3 className="text-2xl font-bold text-green-600 mt-4">
                    ₹{item.price}
                  </h3>

                  <div className="flex items-center justify-between mt-6">

                    {/* Quantity */}

                    <div className="flex items-center border rounded-xl overflow-hidden">

                      <button className="p-3 hover:bg-gray-100">
                        <Minus size={18} />
                      </button>

                      <span className="px-5 font-semibold">
                        {item.quantity}
                      </span>

                      <button className="p-3 hover:bg-gray-100">
                        <Plus size={18} />
                      </button>

                    </div>

                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={22} />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Summary */}

          <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-8">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Shipping</span>
              <span>₹0</span>
            </div>

            <div className="flex justify-between mb-5">
              <span>Tax</span>
              <span>₹0</span>
            </div>

            <hr />

            <div className="flex justify-between text-2xl font-bold my-5">
              <span>Total</span>
              <span>₹{subtotal + 0 + 0}</span>
            </div>

            <button className="w-full bg-black hover:bg-blue-600 text-white py-4 rounded-xl font-semibold transition">
              Proceed to Checkout
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Cart;