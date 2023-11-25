// Importing React library for creating React components
import React from "react";

// Importing icons for the service cards from react-icons library
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

// Functional component for individual service cards
const ServiceCard = ({ color, title, icon, subtitle }) => (
  // Container for a service card with styling and hover effect
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-12 h-12 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

// Functional component for the Services section
const Services = () => (
  // Container for the Services section with styling and gradient background
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-4xl sm:text-6xl py-2 text-gradient font-bold">
          Services We Provide
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-lg">
          Explore our extensive array of services tailored to meet your requirements.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Safe Transactions"
          icon={<BsShieldFillCheck fontSize={24} className="text-white" />}
          subtitle="Your safety is our foremost concern. We uphold privacy and adhere to the highest quality standards."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Optimal Rates"
          icon={<BiSearchAlt fontSize={24} className="text-white" />}
          subtitle="Access the most competitive exchange rates in the market. We prioritize your financial well-being."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Efficient Transactions"
          icon={<RiHeart2Fill fontSize={24} className="text-white" />}
          subtitle="Experience prompt and efficient transactions. We respect your time and prioritize efficiency."
        />
      </div>
    </div>
  </div>
);

// Exporting the Services component for use in other parts of the application
export default Services;
