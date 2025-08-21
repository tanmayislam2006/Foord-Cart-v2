import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between  px-4 md:px-16 py-32 bg-primary/5 rounded-2xl  overflow-hidden">
      {/* Left Content */}
      <div className="z-10 flex-1 max-w-lg w-full flex flex-col items-start mt-10 md:mt-0">
        <span className="px-6 py-1 mb-6 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase shadow">
          Fresh & Fast
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
          Eat <span className="text-primary">Healthy</span>, <br />
          Live <span className="text-primary">Happy</span>
        </h1>
        <p className="text-gray-600 mb-8 text-base md:text-lg">
          Discover a world of delicious, nutritious meals delivered right to
          your door. Enjoy freshness, speed, and taste in every bite!
        </p>
        <div className="flex gap-4 w-5/6 mx-auto md:w-full flex-col sm:flex-row">
          <button className="bg-primary text-white font-semibold px-4 py-2 lg:px-8 lg:py-3 rounded-full text-base w-full sm:w-auto">
            Get Started
          </button>
          <Link href={'/menu'} className="border border-primary text-primary font-semibold px-4 py-2 lg:px-8 lg:py-3 rounded-full text-base w-full sm:w-auto">
            View Menu
          </Link>
        </div>
      </div>
      {/* Right Content */}
      <div className="flex-1 flex justify-center items-center relative w-full z-10">
        {/* Decorative Abstract Shape */}
        <div className=" absolute -top-10 right-0 md:right-[-60px] w-80 h-80 bg-primary/20 rounded-full z-0"></div>
        {/* Main Food Image */}
        <img
          src="https://i.ibb.co/bMTLNNk4/spencer-davis-5ds-Zn-CVDHd0-unsplash.jpg"
          alt="Food"
          className="relative z-10 w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-8 border-white shadow-2xl"
        />
        {/* Decorative Small Dishes - repositioned for a beautiful arc */}
        <div className="absolute z-20 w-full h-full pointer-events-none">
          <img
            src="https://i.ibb.co/Kz5Jjsfq/pexels-bemistermister-3434523.jpg"
            alt="dish"
            className="absolute left-2 top-8 w-14 h-14 rounded-full border-2 border-primary bg-white shadow"
            style={{ transform: "rotate(-10deg)" }}
          />
          <img
            src="https://i.ibb.co/MXhPqVk/pexels-pixabay-461382.jpg"
            alt="dish"
            className="absolute left-10 bottom-10 w-12 h-12 rounded-full border-2 border-primary bg-white shadow"
            style={{ transform: "rotate(8deg)" }}
          />
          <img
            src="https://i.ibb.co/Cs3v2nd2/pexels-senuscape-728360-2313686.jpg"
            alt="dish"
            className="absolute right-8 top-4 w-12 h-12 rounded-full border-2 border-primary bg-white shadow"
            style={{ transform: "rotate(15deg)" }}
          />
          <img
            src="https://i.ibb.co/twmPJJ5m/pexels-xx-2151913460-32260165.jpg"
            alt="dish"
            className="absolute right-0 bottom-16 w-14 h-14 rounded-full border-2 border-primary bg-white shadow"
            style={{ transform: "rotate(-5deg)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
