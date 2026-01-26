import Layout from "../components/Layout";

export default function Orders() {
  return (
    <Layout>
      <div className="pt-6">
        <h1 className="text-3xl font-extrabold tracking-tight">My Orders</h1>
        <p className="mt-2 text-slate-600">
          Order history + status tracking will show here.
        </p>
      </div>
    </Layout>
  );
}
