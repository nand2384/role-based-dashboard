import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

function AdminDashboard() {
  return (
    <DashboardLayout title="Admin Dashboard">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard label="Total Users" value="1,284" />
        <StatCard label="Active Sessions" value="312" />
        <StatCard label="System Load" value="78%" />
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">System Overview</h2>
        <p className="text-gray-400">
          Admin controls system-wide metrics and platform analytics.
        </p>
      </div>

    </DashboardLayout>
  );
}

export default AdminDashboard;
