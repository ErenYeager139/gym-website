import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import Carousel from './Caras0I';
import Program from './Program';
import About from './About';
import Contact from './Cntact';
import TrainingCard from './Training';

const HeroSection = () => {
  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>The Fitness Connection - Unleash Your Inner Strength</title>
        <meta
          name="description"
          content="Join our community of fitness enthusiasts. World-class facilities, expert trainers, and personalized programs designed to take your fitness journey to the next level."
        />
        <meta
          name="keywords"
          content="fitness, gym, workout, strength, health, The Fitness Connection, fitness programs"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 bg-black mt-12 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center h-full">
          
          {/* Left Text Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-teal-500 leading-tight tracking-wider dark:text-white">
              Unleash Your Inner Strength
              <br />
              <span className="text-white text-2xl sm:text-3xl">Join The Fitness Connection</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white dark:text-neutral-400">
              Join our community of fitness enthusiasts. World-class facilities, expert trainers, and personalized programs designed to take your fitness journey to the next level.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex justify-center sm:justify-start space-x-4">
              <a
                href="#"
                className="py-3 px-6 inline-flex items-center justify-center gap-x-2 text-lg font-semibold rounded-lg bg-teal-600 text-white hover:bg-teal-700"
              >
                Start Your Transformation
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <Link 
                to="/contact" 
                className="py-3 px-6 inline-flex items-center justify-center gap-x-2 text-lg font-semibold rounded-lg bg-white text-gray-800 shadow-md hover:bg-gray-50"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Carousel Section (Fixed Margins & Height) */}
          <div className="relative mt-4 lg:mt-0 flex justify-center h-full">
            <Carousel />
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <Program />
      <About />
      <TrainingCard />
      <Contact />
    </>
  );
};

export default HeroSection;
