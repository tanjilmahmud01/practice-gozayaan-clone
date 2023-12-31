import React from "react";
import bannerImg from "../assets/banner-image.jpg";
import NavbarItem from "../component/NavbarItem";
import { MdFlightTakeoff, MdTour } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";

const Banner = () => {

  const navbarData = [
    {
      itemName: "Flight",
      itemImage: <MdFlightTakeoff />,
    },
    {
      itemName: "Hotel",
      itemImage: <RiHotelLine />,
    },
    {
      itemName: "Tour",
      itemImage: <MdTour />,
    },
  ];

  return (
    <div className="relative border-2 border-green-900">
      <img className="h-[100vh] w-full" src={bannerImg} alt="Banner Image" />

      {/* overlay */}
      <div className="absolute top-0 h-full w-full bg-black/50">

      </div>

      {/* search box */}
      <div className="absolute top-[150px] left-[15%] w-[70%] h-[300px] bg-white rounded-xl shadow-md">


      <div className="absolute top-[-40px] left-[25%] w-[50%] h-[100px] bg-white rounded-xl shadow-md z-20">
          <div className="flex justify-around p-4 ">
          {navbarData.map((navItem, index) => (
              <NavbarItem key={index} navItem={navItem} />
            ))}
          </div>
      </div>

      </div>

     
     </div>

     
    
  );
};

export default Banner;
