"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div className="md:mt-20 mt-15 relative"> 
      <div className="bg-[url('/images/2151150966.jpg')] bg-cover bg-center h-screen">
        <div className="absolute inset-0 bg-black/90 h-[100%]"></div>
        <div className="relative z-10">
          <img
            src="https://html.themeholy.com/konsal/demo/assets/img/hero/hero_bg_shape2_1.jpg"
            alt="bg-shape"
            className="sm:h-28 h-20 w-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 gap-6 items-center px-6 xl:ml-30 ml-10 z-10 relative">
          <div>
            <h2 className="text-orange-500 md:text-lg text-sm font-semibold uppercase tracking-wide">
              About Our Company
            </h2>
            <h1 className="text-blue-500 text-2xl sm:text-4xl lg:text-6xl font-bold ">
              Web Application, SEO <br /> & Designing For Your Business
            </h1>
            <p className="text-white font-semibold">
              At CMP Techsseract LLP, we specialize in delivering comprehensive
              digital solutions that elevate your business. With a dedicated
              team experienced across various platforms, we provide innovative
              and cost-effective solutions tailored to meet your business needs.
              Contact us now.
            </p>
          </div> 
          <div className="relative flex justify-center items-center">
            <img 
              src="/images/2149315593.jpg"
              alt="two-person"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg border-4 border-white relative lg:right-13 right-10 top-10"
            />

            <img
              src="/images/young-person-intership.jpg"
              alt="young-person"
               className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-60 lg:h-60 rounded-full object-cover shadow-xl border-4 border-white absolute bottom-0 lg:right-5 right-15 lg:-top-15 top-0 lg:-bottom-10"
            />
          </div>
        </div>

        <div className="relative z-10">
          <img
            src="https://html.themeholy.com/konsal/demo/assets/img/hero/hero_bg_shape2_2.jpg"
            alt="bg-shape"
            className="sm:h-28 h-20 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
