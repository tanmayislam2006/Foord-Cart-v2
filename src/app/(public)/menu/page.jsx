'use client';

import React, { useState, useEffect } from 'react';

// The 'next/link' module is not available in this environment.
// To resolve the compiler error, we will replace the imported Link component
// with a standard HTML anchor <a> tag.

const AllMenuPage = () => {
  // State for all menu items, categories, and pagination
  const [foodItemsAll, setFoodItemsAll] = useState([]);
  const [categories, setCategories] = useState(['All', 'Populer', 'Regular']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageItem, setPerPageItem] = useState(8); // Default items per page
  const [totalPages, setTotalPages] = useState(0);

  // useEffect to fetch data when category or pagination state changes
  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      setError(null);
      
      try {
        let apiUrl = '/api/menu';
        
        // Add a query parameter for the selected category
        if (selectedCategory !== 'All') {
          apiUrl += `?display=${selectedCategory.toLowerCase()}`;
        }
        
        // Fetch data from your API
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error('Failed to fetch menu items');
        }
        const data = await res.json();
        
        // Assuming your API returns all items, we'll handle client-side pagination
        setFoodItemsAll(data);
        setTotalPages(Math.ceil(data.length / perPageItem));

      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMenu();
  }, [selectedCategory, perPageItem]); // Re-fetch when these dependencies change
  
  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * perPageItem;
  const indexOfFirstItem = indexOfLastItem - perPageItem;
  const currentItems = foodItemsAll.slice(indexOfFirstItem, indexOfLastItem);
  
  // Handle page number generation
  const allPages = Array.from({ length: totalPages }, (_, i) => i);

  if (loading) {
    return <div className="w-full text-center py-10">Loading menu...</div>;
  }
  
  if (error) {
    return <div className="w-full text-center py-10 text-red-600">Error: {error}</div>;
  }

  return (
    <section className="w-full min-h-[60vh] bg-primary/5 py-10 px-2">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 text-center">
          Welcome to Our Menu
        </h1>
        {/* Category Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1); // Reset to page 1 when category changes
              }}
              className={`px-5 py-2 rounded-full font-semibold text-sm border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-primary border-primary/30"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {currentItems.map((item, idx) => (
            <div
              key={item.id || item._id || idx}
              className="bg-white rounded-2xl shadow-lg p-5 flex flex-col justify-between items-center h-full"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary/20"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {item.name}
              </h3>
              <p className="text-primary font-bold mb-2">${item.price}</p>
              <p className="text-gray-500 text-sm text-center mb-4">
                {item.desc}
              </p>
              <div className="flex gap-3 w-full mt-auto">
                <a
                  href={`/dishDetails/${item._id || item.id}`}
                  className="cursor-pointer flex-1 bg-primary text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center justify-center"
                >
                  Order
                </a>
              </div>
            </div>
          ))}
        </div>
        {currentItems.length === 0 && !loading && (
          <div className="text-center text-gray-500 mt-10">
            No items found in this category.
          </div>
        )}
      </div>
      
      {/* Pagination Controls */}
      <div className="flex gap-2 justify-center items-center my-10">
        {allPages.map((p) => {
          const pageNumber = p + 1;
          return (
            <button
              key={p}
              onClick={() => setCurrentPage(pageNumber)}
              className={`btn px-4 py-2 rounded-full font-semibold cursor-pointer ${
                currentPage === pageNumber
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary border border-primary/30'
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <select
          name="pagePerItem"
          onChange={(e) => {
            setPerPageItem(Number(e.target.value));
            setCurrentPage(1); // Reset to page 1 when changing items per page
          }}
          defaultValue={perPageItem}
          id="items-per-page"
          className="ml-4 px-3 py-2 border rounded-full text-sm"
        >
          {[4, 6, 8, 10, 20].map((op) => (
            <option key={op} value={op}>{op}</option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default AllMenuPage;
