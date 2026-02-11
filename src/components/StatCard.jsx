function StatCard({ label, value }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl shadow-lg">
      <p className="text-gray-400 mb-2">{label}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  );
}

export default StatCard;