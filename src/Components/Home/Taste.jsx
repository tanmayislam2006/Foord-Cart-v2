
const Taste = () => {
  return (
    <section className="w-full py-12 px-4 md:px-0 bg-primary/5 mt-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          Ready to Taste the Best?
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Join thousands of happy customers who trust us for fresh, delicious
          food delivered fast. Place your order now and experience the
          difference!
        </p>
        <button
          href="/"
          className="inline-block bg-primary text-white font-bold px-10 py-4 rounded-full text-lg shadow transition"
        >
          Order Your Meal Now
        </button>
        <div className="mt-10 flex justify-center gap-6">
          <img
            src="https://i.ibb.co/5Xw2DBTZ/pexels-willpicturethis-2641886.jpg"
            alt="dish"
            className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full border-4 border-white shadow"
          />
          <img
            src="https://i.ibb.co/WvGBDnd0/pexels-valeriya-1199960.jpg"
            alt="dish"
            className="w-32 h-32 md:w-44 md:h-44  object-cover rounded-full border-4 border-white shadow"
          />
          <img
            src="https://i.ibb.co/Ng3x6rPt/pexels-valeriya-1860204.jpg"
            alt="dish"
            className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full border-4 border-white shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Taste;
