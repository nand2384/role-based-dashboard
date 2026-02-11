import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

function CustomerDashboard() {
  return (
    <DashboardLayout title="Customer Dashboard">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard label="Active Orders" value="3" />
        <StatCard label="Loyalty Points" value="1,250" />
        <StatCard label="Saved Items" value="18" />
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Your Activity</h2>
        <p className="text-gray-400">
          Monitor your purchases and account activity.
        </p>
      </div>

    </DashboardLayout>
  );
}

export default CustomerDashboard;
