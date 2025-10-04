"use client";
import React from "react";
import Button from "./Button";

const OurWorks = () => {
  const bgImage = [
    {
      img: "/images/portfolio/mac-uprrda.jpg",
      heading: "UPRRDA Website",
      para: "This website was developed using Wordpress for UPRRDA (Uttar Pradesh Rural Road Development Agency).",
    },
    {
      img: "/images/portfolio/mac-upfdr.jpg",
      heading: "UTTAM-FDR",
      para: "This Project is developed as Website aswell as Mobile App aswell. it provides the means to manage and track the Quality Tests at the road sites and provide the functionality to the contractor of the site to raise their bill, which can be tracked and approved by other stakeholders.",
    },
    {
      img: "/images/portfolio/mac-upnoms.jpg",
      heading: "UPNOMS Project",
      para: "The notary management system is to handle the problems related to time for finding documents, records of customer, and matching documents or other related photos.",
    },
    {
      img: "/images/portfolio/mac-dms.png",
      heading: "UPDESCO DMS",
      para: "This portal was developed to help Updesco manage and organize documents efficiently.",
    },
    {
      img: "/images/portfolio/mac-hcm.jpg",
      heading: "Hot Cooked Meal Portal",
      para: "This portal was developed for ICDS Hot Cooked Meal scheme and helps in managing different aspects related to food being served to younger children.",
    },
    {
      img: "/images/portfolio/mac-kumbh.png",
      heading: "Mahakumbh 2025 Land & Suvidha Allotment",
      para: "The Mahakumbh 2025 Land & Suvidha Allotment portal provides a comprehensive platform for managing the allocation of land and suvidha required for the event",
    },
  ];
  return (
    <div className="px-8 w-10/11 mx-auto">
      <div className="flex justify-around items-center pb-8">
        <div>
          <div className="flex justify-start items-center gap-2">
            <span className="text-orange-600">
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
            <h3 className="text-orange-600 font-semibold text-lg sm:text-xl">
              Our Works
            </h3>
            <span className="text-orange-600">
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
          <h1 className="md:text-5xl text-2xl font-bold">
            Excellence from concept to completion
          </h1>
        </div>
        <div>
          <Button btnText={"Portfolio"} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 py-10">
        {bgImage.map((bg, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url("${bg.img}")` }}
            className="bg-cover bg-center h-70 md:w-95 w-full rounded-lg shadow-md group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out rounded-lg flex justify-center items-center">
              <div className="border border-zinc-300 h-[80%] w-[80%] rounded-lg flex flex-col justify-center items-center transition-transform duration-500 group-hover:scale-105">
                <h1 className="text-2xl text-white">{bg.heading}</h1>
                <button className="bg-blue-500 h-10 w-10 rounded-full text-zinc-300 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
