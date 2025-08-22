"use client";

import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const AddDish = () => {
  const { data: session } = useSession();

  const handleAddDish = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convert form data into object
    const allData = Object.fromEntries(formData.entries());
    const dishInfo = {
      ...allData,
      email: session?.user?.email || "guest",
      price: parseFloat(allData.price),
      stock: parseInt(allData.stock, 10),
    };

    try {
      const res = await fetch("/api/menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dishInfo),
      });

      const data = await res.json();

      if (data?.insertedId) {
        toast.success("Dish Added!");
        form.reset();
      } else {
        toast.error("Failed to add dish. Try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 w-full max-w-5xl border border-gray-200">
        <h2 className="text-4xl font-extrabold text-primary text-center mb-8 md:mb-10">
          Update Dish Details
        </h2>

        <form
          onSubmit={handleAddDish}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {/* Dish Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-base font-semibold text-gray-700 mb-2"
            >
              Dish Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
            />
          </div>

          {/* Image */}
          <div>
            <label
              htmlFor="image"
              className="block text-base font-semibold text-gray-700 mb-2"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              required
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-base font-semibold text-gray-700 mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              required
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
            />
          </div>

          {/* Display Status */}
          <div>
            <label
              htmlFor="display"
              className="block text-base font-semibold text-gray-700 mb-2"
            >
              Display Status
            </label>
            <select
              id="display"
              name="display"
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
            >
              <option value="">Select Display Status</option>
              <option value="popular">Popular</option>
              <option value="new">New Arrival</option>
              <option value="regular">Regular</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-base font-semibold text-gray-700 mb-2"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
            />
          </div>

          {/* Stock */}
          <div>
            <label
              htmlFor="stock"
              className="block text-base font-semibold text-gray-700 mb-2"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              min="0"
              required
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 text-base transition duration-200 ease-in-out"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label
              htmlFor="desc"
              className="block text-base font-semibold text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              rows="4"
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 text-base transition duration-200 ease-in-out"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex md:justify-end md:col-span-2 pt-4">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-primary text-white font-bold cursor-pointer"
            >
              Add Dish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDish;
