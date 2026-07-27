import { Plus, Minus, Trash2 } from "lucide-react";
import React , {useContext} from "react";
import { MyStore } from "../Context/MyContext";
const Cart = ({ increaseQty, decreaseQty, removeItem }) => {

    
let cartItems = [
];
   let{addToCart} = useContext(MyStore) 
   
   cartItems = addToCart;
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity),
    0
  );
  return (
    <div className="max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border rounded-lg p-4 mb-4 shadow"
            >
              <div className="flex gap-5">
                <img
                  src={item.image}
                  className="w-24 h-24 object-contain"
                />

                <div>
                  <h2 className="font-semibold">
                    {item.title}
                  </h2>

                  <p>${item.price}</p>

                  <p>
                    Subtotal: $
                    {(item.price * (item.quantity||1)).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">

                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-200 p-2 rounded"
                >
                  <Minus size={18} />
                </button>

                <span className="font-bold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-gray-200 p-2 rounded"
                >
                  <Plus size={18} />
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600"
                >
                  <Trash2 />
                </button>

              </div>
            </div>
          ))}

          <div className="text-right mt-8">
            <h1 className="text-3xl font-bold">
              Total : ${total.toFixed(2)}
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;