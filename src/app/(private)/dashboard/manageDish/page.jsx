"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";

const ManageDish = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [refresh, setRefresh] = useState(false);
  const [myDishes, setMyDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch dishes
  useEffect(async() => {
    // if (!session?.user?.email) return;
    setLoading(true);
    setError(null);

    fetch(`/api/menu/user?email=guest`)
      .then((res) => res.json())
      .then((data) => {
        setMyDishes(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load dishes.");
        setLoading(false);
      });
  }, [session?.user?.email, refresh]);

  // Delete dish
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/deleteDish/${id}`, { method: "DELETE" });
      const data = await res.json();

      if (data.deletedCount) {
        setRefresh((prev) => !prev);
        toast.success("Dish deleted!");
      } else {
        toast.error("Failed to delete dish. Try again.");
      }
    } catch (err) {
      console.error("Error deleting dish:", err);
      toast.error("An error occurred during deletion.");
    }
  };


  return (
    <div className="min-h-screen py-10 px-2 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-[#16A34A] mb-8 text-center">
        My Dishes
      </h1>

      {loading && (
        <div className="flex justify-center items-center h-48">
          <h1>Loading...</h1>
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 py-8">
          <p>{error}</p>
        </div>
      )}

      {/* Desktop table view */}
      {!loading && myDishes.length > 0 && (
        <div className="w-full max-w-4xl rounded-lg shadow-lg overflow-x-auto border border-gray-200 hidden md:block">
          <div className="flex items-center shadow gap-2 px-4 py-2 bg-gray-100 border-b border-gray-200">
            <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
          </div>
          <table className="min-w-full bg-transparent">
            <thead>
              <tr className="border-b border-gray-100 text-center">
                <th className="py-3 px-4">Image</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myDishes.map((dish) => (
                <tr key={dish._id} className="border-b border-gray-100 text-center">
                  <td className="py-3 px-4 align-middle">
                    {dish?.image ? (
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-14 h-14 object-cover rounded-md shadow mx-auto"
                      />
                    ) : (
                      <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-md shadow text-gray-400 text-xs mx-auto">
                        No Image
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-4 font-semibold align-middle">{dish.name}</td>
                  <td className="py-3 px-4 align-middle">{dish.category}</td>
                  <td className="py-3 px-4 align-middle">
                    ${parseFloat(dish.price).toFixed(2)}
                  </td>
                  <td className="px-4 py-2 align-middle">
                    <button
                      onClick={() => router.push(`/updateDish/${dish._id}`)}
                      className="text-yellow-500 cursor-pointer mx-3 my-2"
                    >
                      <FaPen size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(dish._id)}
                      className="text-red-500 cursor-pointer"
                    >
                      <FaTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

 
      {/* Mobile card view */}
      {!loading && !error && myDishes.length > 0 && (
        <div className="w-full max-w-4xl flex flex-col gap-4 md:hidden mt-6">
          {myDishes.map((dish) => (
            <div
              key={dish._id}
              className="rounded-lg shadow p-4 flex flex-col gap-2 border border-gray-300"
            >
              <div className="flex items-center gap-4">
                {dish?.image ? (
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-16 h-16 object-cover rounded-md shadow"
                  />
                ) : (
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-md shadow text-xs text-gray-400">
                    No Image
                  </div>
                )}
                <div>
                  <div className="font-bold text-lg">{dish.name}</div>
                  <div className="text-sm">{dish.category}</div>
                  <div className="text-sm">
                    Order Count{" "}
                    <button
                      onClick={() => {
                        handleOrderedDishDetails(dish._id);
                        document.getElementById("my_modal_1").showModal();
                      }}
                      className="btn"
                    >
                      {dish.orderCount || 0}
                    </button>
                  </div>
                  <div className="text-sm">
                    Price: ${parseFloat(dish.price).toFixed(2)}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => router.push(`/updateDish/${dish._id}`)}
                  className="flex-1 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-md font-semibold shadow"
                >
                  <FaPen className="inline mr-2" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(dish._id)}
                  className="flex-1 bg-red-100 text-red-700 px-4 py-2 rounded-md font-semibold shadow"
                >
                  <FaTrash className="inline mr-2" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Dish Button */}
      <div className="md:min-w-3xl lg:min-w-4xl flex justify-end mt-10">
        <Link href="/addDish" className="btn btn-primary font-bold text-white">
          <FaPlus />
          Add Dish
        </Link>
      </div>
    </div>
  );
};

export default ManageDish;
