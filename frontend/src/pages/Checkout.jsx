import Layout from "../components/Layout";

export default function Checkout() {
  return (
    <Layout>
      <div className="pt-6">
        <h1 className="text-3xl font-extrabold tracking-tight">Checkout</h1>
        <p className="mt-2 text-slate-600">
          Login will be required here before placing COD order.
        </p>
      </div>
    </Layout>
  );
}
