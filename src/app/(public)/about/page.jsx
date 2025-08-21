import React from "react";

const About = () => {
  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center bg-primary/5 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
        <img
          src="./food-cart.png"
          alt="Food Cart Logo"
          className="w-40 h-40 mb-6 rounded-full border-4 border-primary/20 bg-white object-contain"
        />
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          About Food Cart
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Welcome to <span className="font-bold text-primary">Food Cart</span> –
          your go-to destination for fresh, delicious, and healthy food
          delivered right to your doorstep.
          <br />
          <br />
          Our mission is to bring you a wide variety of mouth-watering dishes,
          prepared by expert chefs using only the finest ingredients. Whether
          you crave classic comfort food or want to try something new, Foodied
          has something for everyone.
        </p>
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
          <div className="flex-1 bg-primary/10 rounded-xl p-4">
            <h2 className="text-xl font-semibold text-primary mb-2">
              Our Vision
            </h2>
            <p className="text-gray-600 text-sm">
              To make quality food accessible, affordable, and enjoyable for
              all, while supporting a healthy lifestyle and sustainable
              practices.
            </p>
          </div>
          <div className="flex-1 bg-primary/10 rounded-xl p-4">
            <h2 className="text-xl font-semibold text-primary mb-2">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 text-sm">
              Fast delivery, a diverse menu, and a commitment to freshness and
              taste. Join thousands of happy customers who trust Foodied for
              their daily meals!
            </p>
          </div>
        </div>
        <div className="mt-8">
          <span className="inline-block bg-primary text-white px-6 py-2 rounded-full font-bold text-lg shadow">
            Eat Fresh. Live Well. Choose Foocart!
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
