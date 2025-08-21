import Cheif from "@/Components/Home/Cheif";
import DisplayFood from "@/Components/Home/DisplayFood";
import Hero from "@/Components/Home/Hero";
import RegularDish from "@/Components/Home/RegularDish";
import Taste from "@/Components/Home/Taste";
import WhyChoose from "@/Components/Home/WhyChoose";
import React from "react";

function HomePage() {
  return (
    <div>
      <Hero />
      <DisplayFood />
      <WhyChoose />
      <RegularDish />
      <Cheif />
      <Taste />
    </div>
  );
}

export default HomePage;
