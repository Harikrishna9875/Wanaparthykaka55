import { useMemo, useState } from "react";
import Layout from "../components/Layout";

export default function Menu() {
  const menuItems = useMemo(
    () => [
      {
        id: 1,
        name: "Chicken Biryani",
        desc: "Aromatic rice + spicy chicken",
        image: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=1200&q=80",

        sizes: [
          { label: "Half", price: 149 },
          { label: "Full", price: 199 },
        ],
        tag: "Best Seller",
      },
      {
        id: 2,
        name: "Paneer Butter Masala",
        desc: "Creamy gravy + soft paneer",
       image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80",



        sizes: [
          { label: "Regular", price: 179 },
          { label: "Large", price: 229 },
        ],
        tag: "Veg",
      },
      {
        id: 3,
        name: "Chicken 65",
        desc: "Crispy fried spicy chicken",
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=1200&q=80",

        sizes: [
          { label: "Small", price: 99 },
          { label: "Medium", price: 149 },
        ],
        tag: "Spicy",
      },
      {
        id: 4,
        name: "Veg Fried Rice",
        desc: "Wok tossed veggies + rice",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80",


        sizes: [
          { label: "Half", price: 119 },
          { label: "Full", price: 169 },
        ],
        tag: "Popular",
      },
    ],
    []
  );

  const [selectedSize, setSelectedSize] = useState(() => {
    const map = {};
    menuItems.forEach((item) => (map[item.id] = item.sizes[0].label));
    return map;
  });

  const [qty, setQty] = useState(() => {
    const map = {};
    menuItems.forEach((item) => (map[item.id] = 1));
    return map;
  });

  const getPrice = (item) => {
    const sizeLabel = selectedSize[item.id];
    const found = item.sizes.find((s) => s.label === sizeLabel);
    return found ? found.price : item.sizes[0].price;
  };

  return (
    <Layout>
      <div className="pt-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Menu</h1>
            <p className="mt-1 text-sm text-slate-600">
              Select size, set quantity, and add to cart.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
            🚚 Free delivery within <span className="font-semibold">5km</span> on{" "}
            <span className="font-semibold">₹200+</span>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => {
            const price = getPrice(item);
            const currentQty = qty[item.id];

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
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#ff3b30] shadow-sm">
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-lg font-extrabold">{item.name}</h2>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>

                  {/* Size */}
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-slate-500">
                      Size
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.sizes.map((s) => {
                        const active = selectedSize[item.id] === s.label;
                        return (
                          <button
                            key={s.label}
                            onClick={() =>
                              setSelectedSize((prev) => ({
                                ...prev,
                                [item.id]: s.label,
                              }))
                            }
                            className={
                              "rounded-xl px-3 py-2 text-xs font-semibold transition " +
                              (active
                                ? "bg-gradient-to-r from-[#ff3b30] to-[#ffb000] text-white shadow-md shadow-[#ffb000]/20"
                                : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50")
                            }
                          >
                            {s.label} • ₹{s.price}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Qty + Price */}
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

                    <p className="text-lg font-extrabold">₹{price}</p>
                  </div>

                  {/* Add */}
                  <button
                    onClick={() => alert(`Added: ${item.name} (${selectedSize[item.id]}) x${currentQty}`)}
                    className="mt-5 w-full rounded-2xl bg-gradient-to-r from-[#ff3b30] to-[#ffb000] py-3 text-sm font-semibold text-white shadow-lg shadow-[#ffb000]/25 transition hover:-translate-y-[1px] hover:shadow-xl active:translate-y-0"
                  >
                    Add to Cart
                  </button>

                  <p className="mt-2 text-xs text-slate-500">
                    (Dummy add for now — backend cart comes next)
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
