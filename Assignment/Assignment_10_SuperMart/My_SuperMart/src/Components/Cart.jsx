import React, { useContext, useEffect, useState } from "react";
import { X, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router";
import { MySupermart } from "../Context/MyContext";

const Cart = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();
  let {
    cartProduct,
    SetcartProduct,
    SetcartTotal,
    SetitemTotal,
    cartOpen,
    setCartOpen,
  } = useContext(MySupermart);
  let cartItems = [...cartProduct];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    SetcartTotal(total.toFixed(2));
    SetitemTotal(itemCount);
  }, [total, itemCount]);

  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 ">
      {/* Background Blur */}

      <div className="absolute inset-0 bg-gray backdrop-blur-[3px]"></div>

      {/* Drawer */}

      <div className="absolute right-0 top-0 h-full w-full sm:w-[430px] bg-zinc-950 border-r border-zinc-800 shadow-2xl flex flex-col animate-slideIn">
        {/* Header */}

        <div className="flex justify-between items-center p-6 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-lime-400" />

            <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
          </div>

          <button className="text-gray-400 hover:text-lime-400">
            <X
              onClick={() => {
                setCartOpen(false);
              }}
            />
          </button>
        </div>

        {/* Body */}

        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col justify-center items-center px-8">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                alt="Empty Cart"
                className="w-44"
              />

              <h2 className="text-white text-2xl font-bold mt-8">
                Your Cart is Empty
              </h2>

              <p className="text-gray-400 mt-4 text-center">
                Looks like you haven't added any products yet.
              </p>

              <button
                onClick={() => {
                  navigate("/Shop");
                  setCartOpen(false);
                }}
                className="mt-8 bg-lime-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-lime-300"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <>
              <div className="p-5 space-y-5">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-zinc-900 p-4 rounded-xl"
                  >
                    <img
                      src={item.thumbnail || item.image}
                      className="w-20 h-20 object-contain bg-white rounded-lg"
                      alt={item.title}
                    />

                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{item.title}</h3>

                      <p className="text-lime-400 font-bold mt-2">
                        ₹ {item.price}
                      </p>

                      <p className="text-gray-400">
                        Qty :{" "}
                        <button
                          onClick={() => {
                            SetcartProduct((prev) =>
                              prev
                                .map((product) =>
                                  product.id === item.id
                                    ? {
                                        ...product,
                                        quantity: product.quantity - 1,
                                      }
                                    : product,
                                )
                                .filter((product) => product.quantity > 0),
                            );
                          }}
                          className="text-xl cursor-pointer p-2"
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          onClick={() => {
                            SetcartProduct((prev) =>
                              prev.map((product) =>
                                product.id === item.id
                                  ? {
                                      ...product,
                                      quantity: product.quantity + 1,
                                    }
                                  : product,
                              ),
                            );
                          }}
                          className="text-xl cursor-pointer p-2"
                        >
                          +
                        </button>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}

              <div className="border-t border-zinc-800 p-6">
                <div className="flex justify-between text-white text-xl font-bold">
                  <span>Total</span>

                  <span>₹ {total.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => {
                    setOrderPlaced(true);
                    SetcartProduct([]);
                    setTimeout(() => {
                      setOrderPlaced(false);
                      setCartOpen(false);
                    }, 3000);
                  }}
                  className="mt-5 w-full bg-lime-400 text-black py-3 rounded-xl font-bold hover:bg-lime-300"
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {orderPlaced && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-lime-400 rounded-2xl p-8 w-[90%] max-w-md text-center shadow-2xl animate-bounce">
            <div className="w-20 h-20 mx-auto rounded-full bg-lime-400 flex items-center justify-center text-4xl text-black font-bold">
              ✓
            </div>

            <h2 className="text-3xl font-bold text-white mt-6">
              Order Placed!
            </h2>

            <p className="text-gray-400 mt-3">
              Thank you for shopping with
              <span className="text-lime-400 font-semibold"> SuperMart</span>.
            </p>

            <p className="text-gray-500 mt-2">
              Your order has been placed successfully.
            </p>

            <button
              onClick={() => {
                setOrderPlaced(false);
                setCartOpen(false);
              }}
              className="mt-6 bg-lime-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-lime-300"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
