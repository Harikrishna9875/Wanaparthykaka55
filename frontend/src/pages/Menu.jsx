import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";

export default function Menu() {
  const { addToCart } = useCart();

  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Quantity state per item
  const [qty, setQty] = useState({});

  // Fetch menu from Django backend
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/menu/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load menu");
        return res.json();
      })
      .then((data) => {
        setMenuItems(data);

        // Initialize quantity = 1 for each item
        const q = {};
        data.forEach((item) => (q[item.id] = 1));
        setQty(q);

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <div className="pt-6">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Menu</h1>
            <p className="mt-1 text-sm text-slate-600">
              Live menu from KAKA55 backend (owner editable).
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
            🚚 Free delivery within <span className="font-semibold">5km</span> on{" "}
            <span className="font-semibold">₹200+</span>
          </div>
        </div>

        {/* Loading & Error */}
        {loading && <p className="mt-6 text-slate-600">Loading menu...</p>}
        {error && <p className="mt-6 text-red-500">{error}</p>}

        {/* Menu Grid */}
        {!loading && !error && (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item) => {
              const currentQty = qty[item.id] || 1;

              return (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      className="h-44 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80";
                      }}
                    />

                    {!item.is_available && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white font-bold text-lg">
                        OUT OF STOCK
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h2 className="text-lg font-extrabold">{item.name}</h2>
                    <p className="mt-1 text-sm text-slate-600">
                      {item.description}
                    </p>

                    <p className="mt-2 text-sm text-slate-600">
                      Size: <span className="font-semibold">{item.size}</span>
                    </p>

                    {/* Quantity + Price */}
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
                        <button
                          onClick={() =>
                            setQty((prev) => ({
                              ...prev,
                              [item.id]: Math.max(1, prev[item.id] - 1),
                            }))
                          }
                          className="h-9 w-9 rounded-xl text-lg font-bold text-slate-700 hover:bg-slate-50"
                        >
                          −
                        </button>

                        <span className="w-8 text-center text-sm font-bold">
                          {currentQty}
                        </span>

                        <button
                          onClick={() =>
                            setQty((prev) => ({
                              ...prev,
                              [item.id]: prev[item.id] + 1,
                            }))
                          }
                          className="h-9 w-9 rounded-xl text-lg font-bold text-slate-700 hover:bg-slate-50"
                        >
                          +
                        </button>
                      </div>

                      <p className="text-lg font-extrabold">
                        ₹{item.price}
                      </p>
                    </div>

                    {/* Add to Cart */}
                    <button
                      disabled={!item.is_available}
                      onClick={() =>
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: Number(item.price),
                          size: item.size,
                          qty: currentQty,
                          image: item.image,
                        })
                      }
                      className={`mt-5 w-full rounded-2xl py-3 text-sm font-semibold shadow-lg transition ${
                        item.is_available
                          ? "bg-gradient-to-r from-[#ff3b30] to-[#ffb000] text-white shadow-[#ffb000]/25 hover:-translate-y-[1px] hover:shadow-xl"
                          : "bg-slate-300 text-slate-600 cursor-not-allowed"
                      }`}
                    >
                      {item.is_available ? "Add to Cart" : "Unavailable"}
                    </button>

                    <p className="mt-2 text-xs text-slate-500">
                      Data controlled by restaurant owner (Django Admin).
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
