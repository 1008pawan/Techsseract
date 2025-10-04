"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";

const SecondHeroSection = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 10;
    const duration = 500;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const sixCards = [
    { text: "Ease of Scalability", color: "red" },
    { text: "Instant Impact", color: "green" },
    { text: "Expertise & Experience", color: "yellow" },
    { text: "Latest TechStack", color: "blue" },
    { text: "Full Flexibility", color: "orange" },
    { text: "Proactive Support", color: "purple" },
  ];

  return (
    <div className="py-16 px-6 grid lg:grid-cols-5 grid-cols-1 gap-20">
      <div className="flex flex-col lg:flex-row gap-6 lg:col-span-3">

        <div className="hidden lg:block vertical-text animate-verticalMove text-white text-outline text-5xl lg:text-7xl rotate-180 text-center font-bold">
          Since 2017
        </div>

        <div className="relative flex-1">

          <div className="absolute z-10 h-32 w-24 sm:h-40 sm:w-32 bg-[url('/images/second/secondBgImage.jpg')] bg-cover bg-center lg:left-81 left-200px top-0 border-b-8 border-l-8 text-center flex flex-col justify-center text-white">
            <h1 className="font-bold text-3xl sm:text-5xl">{count}</h1>
            <p className="text-xs sm:text-base font-semibold">
              Years Experience
            </p>
          </div>

          <div className="relative group overflow-hidden shadow-lg">
            <img
              src="/images/second/about_2_1.png"
              alt="About one"
              className="transition-transform duration-500 group-hover:scale-105 w-full h-auto"
            />
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="shine"></div>
            </div>
          </div>


          <div className="absolute -bottom-20 lg:-right-35 -right-6 w-45 sm:w-1/2 group-hover:scale-105 transition">
            <img
              src="/images/second/about_2_2.png"
              alt="About Two"
              className="lg:w-full lg:h-auto h-70 w-45 border-4 border-white"
            />
          </div>
        </div>


        <div className="hidden absolute sm:block animate-verticalMove lg:relative -left-30 top-5">
          <img src="/images/second/about_shape2_1.png" alt="rounds Shape" />
        </div>
      </div>

      <div className="lg:col-span-2 space-y-5">
        <div className="flex items-center gap-2">
          <span className="text-orange-600">━</span>
          <h3 className="text-orange-600 font-semibold text-sm sm:text-base">
            ABOUT OUR COMPANY
          </h3>
          <span className="text-orange-600">━</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold">
          Get to know more about our story
        </h1>

        <p className="text-zinc-500 text-sm sm:text-base">
          Welcome to
          <span className="text-blue-500 font-bold">CMP Techsseract LLP</span>,
          where innovation meets excellence. Established with a vision to
          revolutionize the tech industry, CMP Techsseract is a dynamic and
          forward-thinking technology solutions provider.
        </p>

        <p className="text-zinc-500 text-sm sm:text-base">
          <span className="text-blue-500 font-bold">CMP Techsseract LLP</span>
          is a collective of passionate technologists, skilled engineers, and
          creative problem solvers. Our mission is to empower clients through
          innovative technology solutions that enhance efficiency, boost
          productivity, and drive success.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
          {sixCards.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 p-2 rounded-lg bg-${item.color}-200`}
            >
              <div
                className={`h-7 w-7 bg-${item.color}-500 text-white flex justify-center items-center rounded-full text-xs`}
              >
                {i + 1}
              </div>
              <h1 className="text-zinc-800 text-xs">{item.text}</h1>
            </div>
          ))}
        </div>

        <div className="pt-3">
          <Button btnText={"Contact Us"} />
        </div>
      </div>
    </div>
  );
};

export default SecondHeroSection;
