import Cheif from "@/Components/Home/Cheif";
import Hero from "@/Components/Home/Hero";
import Taste from "@/Components/Home/Taste";
import WhyChoose from "@/Components/Home/WhyChoose";
import React from "react";

function HomePage() {
  return (
    <div>
      <Hero />
      {/* <DisplayFood /> */}
      <WhyChoose />
      {/* <RegularDish /> */}
      <Cheif />
      <Taste/>
    </div>
  );
}

export default HomePage;
