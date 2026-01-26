import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, subtotal, removeFromCart, updateQty, clearCart } = useCart();

  return (
    <Layout>
      <div className="pt-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold tracking-tight">Cart</h1>
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:shadow-md"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-600">Your cart is empty.</p>
            <Link
              to="/menu"
              className="mt-4 inline-block rounded-2xl bg-gradient-to-r from-[#ff3b30] to-[#ffb000] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ffb000]/25"
            >
              Go to Menu
            </Link>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((x) => (
                <div
                  key={x.key}
                  className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <img
                    src={x.image}
                    alt={x.name}
                    className="h-20 w-20 rounded-2xl object-cover"
                  />

                  <div className="flex-1">
                    <h2 className="text-lg font-extrabold">{x.name}</h2>
                    <p className="text-sm text-slate-600">Size: {x.size}</p>
                    <p className="mt-1 text-sm font-bold">₹{x.price}</p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeFromCart(x.key)}
                      className="text-sm font-semibold text-[#ff3b30]"
                    >
                      Remove
                    </button>

                    <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-1">
                      <button
                        onClick={() => updateQty(x.key, x.qty - 1)}
                        className="h-9 w-9 rounded-xl text-lg font-bold text-slate-700 hover:bg-slate-50"
                      >
                        −
                      </button>

                      <span className="w-8 text-center text-sm font-bold">
                        {x.qty}
                      </span>

                      <button
                        onClick={() => updateQty(x.key, x.qty + 1)}
                        className="h-9 w-9 rounded-xl text-lg font-bold text-slate-700 hover:bg-slate-50"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm h-fit">
              <h3 className="text-lg font-extrabold">Bill Summary</h3>

              <div className="mt-4 flex items-center justify-between text-sm">
                <p className="text-slate-600">Subtotal</p>
                <p className="font-bold">₹{subtotal}</p>
              </div>

              <div className="mt-2 flex items-center justify-between text-sm">
                <p className="text-slate-600">Delivery</p>
                <p className="font-bold text-[#ff3b30]">FREE*</p>
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Free within 5km for orders ₹200+
              </p>

              <Link
                to="/checkout"
                className="mt-5 block w-full rounded-2xl bg-gradient-to-r from-[#ff3b30] to-[#ffb000] py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[#ffb000]/25"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
