"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const UpdateDish = ({ params }) => {
  const { id } = params;
  const router = useRouter();

  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState(null);

  // Fetch dish data
  useEffect(() => {
    const fetchDish = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/menu/${id}`);
        if (!res.ok) throw new Error("Failed to fetch dish data");
        const data = await res.json();
        setDish(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchDish();
  }, [id]);

  // Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!dish) return;

    setUpdating(true);
    const formData = new FormData(e.target);
    const updateData = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`/api/menu/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      });

      const result = await res.json();
      if (result?.matchedCount) {
        toast.success("Dish updated successfully!");
        router.push("/dashboard/manageDish"); // redirect after update
      } else {
        toast.error("Failed to update dish");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error updating dish");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading dish details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (!dish) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Dish not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 w-full max-w-5xl border border-gray-200">
        <h2 className="text-4xl font-extrabold text-primary text-center mb-8 md:mb-10">
          Update Dish Details
        </h2>
        <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <label htmlFor="name" className="block text-base font-semibold text-gray-700 mb-2">
              Dish Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={dish.name || ""}
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-base font-semibold text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              defaultValue={dish.image || ""}
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-base font-semibold text-gray-700 mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              defaultValue={dish.price || ""}
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="display" className="block text-base font-semibold text-gray-700 mb-2">
              Display Status
            </label>
            <select
              id="display"
              name="display"
              defaultValue={dish.display || ""}
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select Display Status</option>
              <option value="populer">Popular</option>
              <option value="new">New Arrival</option>
              <option value="regular">Regular</option>
            </select>
          </div>
          <div>
            <label htmlFor="category" className="block text-base font-semibold text-gray-700 mb-2">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              defaultValue={dish.category || ""}
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="stock" className="block text-base font-semibold text-gray-700 mb-2">
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              min="0"
              defaultValue={dish.stock || ""}
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="desc" className="block text-base font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              rows="4"
              defaultValue={dish.desc || ""}
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            ></textarea>
          </div>
          <div className="flex md:justify-end md:col-span-2 pt-4">
            <button type="submit" className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${updating ? "opacity-50 cursor-not-allowed" : ""}`} disabled={updating}>
              {updating ? "Updating..." : "Update Dish"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDish;
