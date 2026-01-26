import { Link, NavLink } from "react-router-dom";

export default function Navbar({ cartCount = 0 }) {
  const navClass = ({ isActive }) =>
    "text-sm transition " +
    (isActive ? "text-slate-900 font-semibold" : "text-slate-600 hover:text-slate-900");

  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
      <Link to="/" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff3b30] to-[#ffb000] shadow-lg shadow-[#ffb000]/30">
          <span className="text-sm font-black text-white">K</span>
        </div>
        <div className="leading-tight">
          <p className="text-xs text-slate-500">Wanaparthy</p>
          <h1 className="text-lg font-extrabold tracking-tight">KAKA55</h1>
        </div>
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        <NavLink className={navClass} to="/">Home</NavLink>
        <NavLink className={navClass} to="/menu">Menu</NavLink>
        <NavLink className={navClass} to="/orders">Orders</NavLink>
      </nav>

      <div className="flex items-center gap-3">
        <Link
          to="/login"
          className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:shadow-md"
        >
          Login
        </Link>

        <Link
          to="/cart"
          className="relative rounded-2xl bg-gradient-to-r from-[#ff3b30] to-[#ffb000] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#ffb000]/30 transition hover:-translate-y-[1px] hover:shadow-xl active:translate-y-0"
        >
          Cart
          <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs font-bold">
            {cartCount}
          </span>
        </Link>
      </div>
    </header>
  );
}
