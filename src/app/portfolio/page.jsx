import React from "react";

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

const Portfolio = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center min-h-[80vh] lg:h-screen transition-opacity duration-700 flex flex-col justify-between"
        style={{ backgroundImage: `url("")` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10">
          <img
            src="images/icons/hero_bg_shape2_1.jpg"
            alt="bg-shape"
            className="h-12 sm:h-16 md:h-20 w-auto"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">Portfolio</h1>
            <ul className="flex gap-2">
                <li>Home</li>
                <li>{`>`}</li>
                <li>Portfolio</li> 
            </ul>
        </div>
        <div className="relative z-10">
          <img
            src="images/icons/hero_bg_shape2_2.jpg"
            alt="bg-shape"
            className="h-12 sm:h-16 md:h-20 w-auto"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {bgImage.map((bg, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url("${bg.img}")` }}
            className="bg-cover bg-center h-64 sm:h-72 md:h-80 rounded-lg shadow-md group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-lg flex justify-center items-center">
              <div className="border border-zinc-300 h-[80%] w-[85%] sm:w-[80%] rounded-lg flex flex-col justify-center items-center transition-transform duration-500 group-hover:scale-105 px-4 text-center">
                <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mb-3">
                  {bg.heading}
                </h1>
                <p className="hidden sm:block text-sm text-zinc-300">
                  {bg.para}
                </p>
                <button className="mt-4 bg-blue-500 h-10 w-10 rounded-full text-zinc-300 flex justify-center items-center hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12h14" />
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

export default Portfolio;
