"use client"
import Link from "next/link";
// the link is not avoilable in the client component
import  { useEffect, useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const RegularDish = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegularDishes = async () => {
      try {
        setLoading(true);
        // Fetch data from your API with the correct query parameter
        const response = await fetch("/api/menu?display=regular");

        if (!response.ok) {
          throw new Error("Failed to fetch regular dishes");
        }

        const data = await response.json();
        setDishes(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRegularDishes();
  }, []); // The empty dependency array ensures this effect runs only once on mount

  // Conditional rendering for different states
  if (loading) {
    return (
      <div className="w-full py-8 text-center text-lg font-semibold">
        Loading regular dishes...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-8 text-center text-red-600 font-semibold">
        Error: {error}
      </div>
    );
  }

  if (!Array.isArray(dishes) || dishes.length === 0) {
    return (
      <div className="w-full py-8 text-center text-gray-500">
        No regular dishes found.
      </div>
    );
  }

  return (
    <section className="w-full py-10 px-2 md:px-0">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Regular Dishes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {dishes.map((dish, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center relative"
          >
            {/* Like Button */}
            <button className="absolute top-4 right-4 text-primary bg-primary/10 rounded-full p-2">
              <FaRegHeart className="text-lg" />
            </button>
            <img
              src={dish.image}
              alt={dish.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary/20"
            />
            {/* Rating */}
            <div className="flex items-center mb-2">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-sm font-semibold text-gray-700">
                {dish.rating}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {dish.name}
            </h3>
            <p className="text-primary font-bold mb-2">{dish.price}</p>
            <p className="text-gray-500 text-sm text-center mb-4">
              {dish.desc}
            </p>
            <div className="flex gap-3 w-full">
              <Link
                href={`/dishDetails/${dish?._id}`}
                className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-semibold text-sm"
              >
                <MdOutlineShoppingCart className="text-lg" />
                Order
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RegularDish;
