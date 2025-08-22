import { FaChartBar, FaUtensils, FaPlus } from "react-icons/fa";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <Link href="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <FaChartBar />
            Home
          </Link>
          <Link href="/dashboard/manageDish" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <FaUtensils />
            Manage Dishes
          </Link>
          <Link href="/dashboard/addDish" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <FaPlus />
            Add Dish
          </Link>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Dashboard Home Stat Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <FaUtensils className="text-3xl text-blue-500 mb-2" />
            <span className="text-xl font-semibold">24</span>
            <span className="text-gray-500">Total Dishes</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <FaChartBar className="text-3xl text-green-500 mb-2" />
            <span className="text-xl font-semibold">120</span>
            <span className="text-gray-500">Orders</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <FaPlus className="text-3xl text-purple-500 mb-2" />
            <span className="text-xl font-semibold">5</span>
            <span className="text-gray-500">New Dishes</span>
          </div>
        </section>
        {/* Render page content */}
        {children}
      </main>
    </div>
  );
}