import React, { useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/footer";
import SplashScreen from "./sections/SplashScreen";

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  return (
    <>
      {isSplashVisible && (
        <SplashScreen onFinish={() => setIsSplashVisible(false)} />
      )}

      {/* Render rest of app, but keep it hidden under splash video */}
      <div
        className={`container mx-auto max-w-7xl transition-opacity duration-1000 ${
          isSplashVisible ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
