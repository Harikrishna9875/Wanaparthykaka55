import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Saffron glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#ff9500]/20 blur-3xl" />
        <div className="absolute -bottom-52 right-[-120px] h-[560px] w-[560px] rounded-full bg-[#ff3b30]/10 blur-3xl" />
      </div>

      <Navbar cartCount={0} />

      <div className="mx-auto max-w-6xl px-5 pb-14">
        {children}
      </div>
    </div>
  );
}
