"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaStar, FaMinus, FaPlus } from "react-icons/fa";

const DishDetails = ({ params }) => {
  const id = params?.dishId; 
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchDishDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/menu/${id}`);
        if (!response.ok) throw new Error("Failed to fetch dish details");

        const data = await response.json();
        setDish(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDishDetails();
  }, [id]);

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

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-primary/5 py-10 px-2">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-4 md:p-8 flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full max-w-xs h-64 md:max-w-lg md:h-[28rem] object-cover rounded-xl shadow transition-all duration-300"
          />
        </div>
        {/* Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">{dish.name}</h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500 flex items-center gap-1">
                <FaStar /> {dish.rating}
              </span>
              <span className="text-gray-400 text-sm">| Stock: {dish.stock}</span>
            </div>
            <div className="text-lg text-gray-700 mb-2">{dish.desc}</div>
            <div className="text-gray-500 mb-4">{dish.details}</div>
            <div className="text-2xl font-bold text-primary mb-6">${dish.price}</div>
          </div>
          {/* Quantity & Add to Cart */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                className="bg-primary/10 text-primary rounded-full p-2 hover:bg-primary/20"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
              >
                <FaMinus />
              </button>
              <input
                type="number"
                min={1}
                max={dish.stock}
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Math.max(1, Math.min(dish.stock, Number(e.target.value)))
                  )
                }
                className="w-14 text-center border border-primary/20 rounded px-2 py-1 font-bold"
              />
              <button
                className="bg-primary/10 text-primary rounded-full p-2 hover:bg-primary/20"
                onClick={() => setQuantity((q) => Math.min(dish.stock, q + 1))}
                disabled={quantity >= dish.stock}
              >
                <FaPlus />
              </button>
            </div>
            <button
              className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow hover:bg-primary/90 transition w-full sm:w-auto"
              onClick={() => toast(`Features Will Be Coming Soon`)}
              disabled={dish.stock === 0}
            >
              {dish.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DishDetails;
