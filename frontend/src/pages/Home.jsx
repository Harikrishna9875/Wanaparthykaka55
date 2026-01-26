import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-10 pt-6 md:grid-cols-2 md:pt-10">
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
            Order fast, track status, and enjoy fresh meals in Wanaparthy. COD
            only for now.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/menu"
              className="w-fit rounded-2xl bg-gradient-to-r from-[#ff3b30] to-[#ffb000] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ffb000]/30 transition hover:-translate-y-[1px] hover:shadow-xl active:translate-y-0"
            >
              Explore Menu
            </Link>

            <Link
              to="/orders"
              className="w-fit rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md active:translate-y-0"
            >
              Track Order
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-lg overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <p className="text-sm font-extrabold text-slate-800">
                Today’s Special
              </p>
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
                <button className="rounded-2xl bg-gradient-to-r from-[#ff3b30] to-[#ffb000] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ffb000]/30 transition hover:-translate-y-[1px] hover:shadow-xl active:translate-y-0">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
