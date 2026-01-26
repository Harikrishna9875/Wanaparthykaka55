import { useMemo, useState } from "react";

export default function App() {
  const items = useMemo(
    () => [
      { id: 1, name: "Chicken Biryani", price: 199, desc: "Full aroma, spicy", tag: "Best Seller" },
      { id: 2, name: "Paneer Butter Masala", price: 179, desc: "Creamy & rich", tag: "Veg" },
      { id: 3, name: "Chicken 65", price: 149, desc: "Crispy & spicy", tag: "Hot" },
    ],
    []
  );

  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Saffron soft glow on WHITE background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#ff9500]/20 blur-3xl" />
        <div className="absolute -bottom-52 right-[-120px] h-[560px] w-[560px] rounded-full bg-[#ff3b30]/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff3b30] to-[#ffb000] shadow-lg shadow-[#ffb000]/30">
            <span className="text-sm font-black text-white">K</span>
          </div>
          <div className="leading-tight">
            <p className="text-xs text-slate-500">Wanaparthy</p>
            <h1 className="text-lg font-extrabold tracking-tight">KAKA55</h1>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a className="text-sm text-slate-600 hover:text-slate-900" href="#">
            Home
          </a>
          <a className="text-sm text-slate-600 hover:text-slate-900" href="#">
            Menu
          </a>
          <a className="text-sm text-slate-600 hover:text-slate-900" href="#">
            Offers
          </a>
          <a className="text-sm text-slate-600 hover:text-slate-900" href="#">
            Orders
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:shadow-md">
            Login
          </button>

          <button className="relative rounded-2xl bg-gradient-to-r from-[#ff3b30] to-[#ffb000] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#ffb000]/30 transition hover:-translate-y-[1px] hover:shadow-xl active:translate-y-0">
            Cart
            <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs font-bold">
              {cartCount}
            </span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 pb-16 pt-4 md:grid-cols-2 md:pt-10">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-600 shadow-sm">
            🚚 Free delivery within <span className="font-semibold">5km</span> on{" "}
            <span className="font-semibold">₹200+</span>
          </p>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Delicious food from{" "}
            <span className="bg-gradient-to-r from-[#ff3b30] to-[#ffb000] bg-clip-text text-transparent">
              KAKA55
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-base text-slate-600">
            Order fast, track status, and enjoy fresh meals in Wanaparthy. COD only for now.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-2xl bg-gradient-to-r from-[#ff3b30] to-[#ffb000] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ffb000]/30 transition hover:-translate-y-[1px] hover:shadow-xl active:translate-y-0">
              Explore Menu
            </button>

            <button className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md active:translate-y-0">
              Track Order
            </button>
          </div>

          {/* Mini Menu Grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#ffb000]/20 blur-2xl transition group-hover:bg-[#ff3b30]/15" />

                <p className="text-xs font-semibold text-[#ff3b30]">{item.tag}</p>
                <h3 className="mt-1 text-sm font-extrabold">{item.name}</h3>
                <p className="mt-1 text-xs text-slate-500">{item.desc}</p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-extrabold">₹{item.price}</p>

                  {/* Add button appears on hover */}
                  <button
                    onClick={() => setCartCount((c) => c + 1)}
                    className="rounded-xl bg-gradient-to-r from-[#ff3b30] to-[#ffb000] px-3 py-2 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100"
                  >
                    Add +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Image Card */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-lg overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <p className="text-sm font-extrabold text-slate-800">Today’s Special</p>
              <span className="rounded-full bg-[#ffb000]/20 px-3 py-1 text-xs font-semibold text-[#ff3b30]">
                OPEN
              </span>
            </div>

            <div className="relative">
              <img
                className="h-[340px] w-full object-cover transition duration-700 hover:scale-[1.03]"
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80"

                alt="Food"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/0 to-white/0" />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-extrabold">KAKA55 Special Combo</h3>
              <p className="mt-1 text-sm text-slate-600">
                Best seller + quick delivery + COD
              </p>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-extrabold">₹299</p>
                <button
                  onClick={() => setCartCount((c) => c + 1)}
                  className="rounded-2xl bg-gradient-to-r from-[#ff3b30] to-[#ffb000] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ffb000]/30 transition hover:-translate-y-[1px] hover:shadow-xl active:translate-y-0"
                >
                  Add to Cart
                </button>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Hover effects + smooth animations enabled.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
