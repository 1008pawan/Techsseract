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

  return (
    <div className="py-30 grid grid-cols-5 px-8">
      <div className="flex px-8 gap-5 col-span-3">
        <div className="vertical-text animate-verticalMove text-white text-outline text-7xl rotate-180 text-center font-bold">
          Since 2017
        </div>
        <div className="relative">
          <div className="absolute z-10 h-40 w-32 bg-[url('/images/second/secondBgImage.jpg')] bg-cover bg-center left-76 border-b-20 border-l-20 text-center flex flex-col justify-center text-white">
            <h1 className="font-bold text-5xl">{count}</h1>
            <p className="font-semibold">Year Of Experience</p>
          </div>
          <div className="w-108 relative group overflow-hidden">
            <img
              src="/images/second/about_2_1.png"
              alt="About one"
              className="transition-transform duration-500 group-hover:scale-105 w-150"
            />
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="shine"></div>
            </div>
          </div>

          <div className="absolute -bottom-35 left-85 h-100 w-80 group-hover:scale-105">
            <img
              src="/images/second/about_2_2.png"
              alt="About Two"
              className="h-80 border-4 border-white"
            />
          </div>
        </div>
        <div className="animate-verticalMove relative -left-30 top-10">
          <img src="images/second/about_shape2_1.png" alt="rounds Shape" />
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex items-center gap-2">
          <span>
            <svg
              width="20"
              height="8"
              viewBox="0 0 20 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_246_528)">
                <path
                  d="M11.6719 6.85284C8.64069 6.9544 8.17585 0.548154 6.06257 4.62237C5.17194 6.50128 2.92585 7.53644 1.21882 5.94659C0.648507 5.40753 -0.00774341 4.58722 6.90872e-05 3.763C-0.00774341 2.83722 1.3321 2.47394 1.81648 3.24737C2.06257 3.65753 2.32429 4.11456 2.66804 4.42315C4.17976 5.68097 4.36335 1.13019 7.33601 1.14972C8.54694 1.10675 9.72663 2.15362 10.3126 3.13409C10.5548 3.38409 11.3985 5.0755 11.836 4.69269C12.336 4.22394 12.7423 3.61456 13.1524 3.04815C14.0704 1.84112 15.8751 1.71612 16.9454 2.78253C17.1993 3.02862 17.3907 3.31378 17.6055 3.5794C17.6837 3.67315 17.8204 3.68487 17.9141 3.61065C17.9337 3.59503 17.9493 3.5755 17.961 3.55597C18.3048 3.00519 18.7657 2.61847 19.4727 2.98175C20.8282 3.86065 19.2813 5.74737 18.1212 5.91534C17.2579 6.03253 16.5391 5.64581 15.9454 4.87628C15.7462 4.63409 15.5977 4.22784 15.2774 4.16925C14.5274 3.86847 13.9376 6.8294 11.6719 6.85284Z"
                  fill="#F84923"
                />
              </g>
              <defs>
                <clipPath id="clip0_246_528">
                  <rect width="20" height="8" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <h3 className="text-orange-600 font-semibold">ABOUT OUR COMPANY</h3>
          <span>
            <svg
              width="20"
              height="8"
              viewBox="0 0 20 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_246_528)">
                <path
                  d="M11.6719 6.85284C8.64069 6.9544 8.17585 0.548154 6.06257 4.62237C5.17194 6.50128 2.92585 7.53644 1.21882 5.94659C0.648507 5.40753 -0.00774341 4.58722 6.90872e-05 3.763C-0.00774341 2.83722 1.3321 2.47394 1.81648 3.24737C2.06257 3.65753 2.32429 4.11456 2.66804 4.42315C4.17976 5.68097 4.36335 1.13019 7.33601 1.14972C8.54694 1.10675 9.72663 2.15362 10.3126 3.13409C10.5548 3.38409 11.3985 5.0755 11.836 4.69269C12.336 4.22394 12.7423 3.61456 13.1524 3.04815C14.0704 1.84112 15.8751 1.71612 16.9454 2.78253C17.1993 3.02862 17.3907 3.31378 17.6055 3.5794C17.6837 3.67315 17.8204 3.68487 17.9141 3.61065C17.9337 3.59503 17.9493 3.5755 17.961 3.55597C18.3048 3.00519 18.7657 2.61847 19.4727 2.98175C20.8282 3.86065 19.2813 5.74737 18.1212 5.91534C17.2579 6.03253 16.5391 5.64581 15.9454 4.87628C15.7462 4.63409 15.5977 4.22784 15.2774 4.16925C14.5274 3.86847 13.9376 6.8294 11.6719 6.85284Z"
                  fill="#F84923"
                />
              </g>
              <defs>
                <clipPath id="clip0_246_528">
                  <rect width="20" height="8" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
        <h1 className="text-5xl font-bold pt-5">
          Get to know more about our story
        </h1>
        <p className="text-zinc-500 pt-5">
          Welcome to <span className="text-blue-500 font-bold">CMP Techsseract LLP</span> , where innovation meets excellence.
          Established with a vision to revolutionize the tech industry, CMP
          Techsseract is a dynamic and forward-thinking technology solutions
          provider. Our journey began with a simple yet profound goal: to
          harness the power of cutting-edge technology to create transformative
          solutions for businesses and individuals alike.
        </p>
        <p className="text-zinc-500 pt-5">
          <span className="text-blue-500 font-bold">CMP Techsseract LLP</span> is a collective of passionate technologists,
          skilled engineers, and creative problem solvers. Our team is dedicated
          to pushing the boundaries of what’s possible, delivering top-tier
          technology services that drive progress and foster growth. Our mission
          is to empower our clients through innovative technology solutions that
          enhance efficiency, boost productivity, and drive success. We aim to
          be a trusted partner in their digital transformation journey,
          providing them with the tools and insights needed to thrive in an
          increasingly competitive and complex landscape.
        </p>
        <div className="grid grid-cols-3">
            <div>Ease of Scalability</div>
            <div>Instant Impact</div>
            <div>Expertise and Experience</div>
            <div>Latest TechStack</div>
            <div>Full Flexibility</div>
            <div>Proactive Support</div>
        </div>
        <div className="pt-2">
          <Button btnText={"Contact Us"} />
        </div>
      </div>
    </div>
  );
};

export default SecondHeroSection;
