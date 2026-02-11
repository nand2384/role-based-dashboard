import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

function BusinessDashboard() {
  return (
    <DashboardLayout title="Business Dashboard">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard label="Orders Today" value="56" />
        <StatCard label="Revenue" value="$8,240" />
        <StatCard label="Pending Shipments" value="14" />
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Business Insights</h2>
        <p className="text-gray-400">
          Track performance, orders, and operational efficiency.
        </p>
      </div>

    </DashboardLayout>
  );
}

export default BusinessDashboard;
