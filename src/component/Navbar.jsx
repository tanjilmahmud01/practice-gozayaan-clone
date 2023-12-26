import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { MdFlightTakeoff } from "react-icons/md";
import { MdTour } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiCurrencyBangladeshi, HiCurrencyRupee } from "react-icons/hi2";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";

import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const [selectedCountry, setSelectedCountry] = useState("Bangladesh");
  const [selectedCurrency, setSelectedCurrency] = useState("BDT");
  const [isSticky, setSticky] = useState(false);

  console.log("sticky? ", isSticky);

  const scrollHandler = () => {
    const scrollValue = window.scrollY;
    if (scrollValue > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  console.log("sticky? ", isSticky);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

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

  const currencyData = [
    {
      countryName: "Bangladesh",
      countryFlag: <MdFlightTakeoff />,
      countryCurrency: "BDT",
    },
    {
      countryName: "Pakistan",
      countryFlag: <MdFlightTakeoff />,
      countryCurrency: "PKR",
    },
  ];

  const selectCountry = (country) => {
    const findCurrencyObject = currencyData.find(
      (data) => data.countryName === country
    );
    setSelectedCurrency(findCurrencyObject.countryCurrency);

    setSelectedCountry(country);
  };

  console.log("After Changes: ", selectedCurrency);

  return (
    <nav
      className={`${
        isSticky
          ? "sticky top-0 bg-red-400 z-30 transition-all duration-300 shadow-lg"
          : "bg-base-100 z-30"
      }`}
    >
      <div className="navbar container mx-auto w-[70%] flex items-center justify-between">
        <div className="size-24">
          <img src={Logo} alt="website logo" />
        </div>

        {/* navigation options */}
        <div className={`${isSticky ? "hidden lg:block" : "hidden"}`}>
          <div className="flex gap-8">
            {navbarData.map((navItem, index) => (
              <NavbarItem key={index} navItem={navItem} />
            ))}
          </div>
        </div>

        {/* dropdown menu */}
        <div className="flex items-center gap-3">
          <details className="dropdown dropdown-end">
            <summary className="m-1 btn w-[150px] bg-transparent hover:bg-transparent">
              <div className="flex items-center justify-between gap-2">
                <HiCurrencyBangladeshi className="text-3xl" />
                <p className="">BDT</p>
                <RiArrowDropDownLine className="text-3xl" />
              </div>
            </summary>
            <div className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded w-[300px] mt-10 ">
              <div className="flex gap-8">
                {/* select country */}
                <div className="w-[40%]">
                  <span className="text-blue-800 font-semibold">Region</span>

                  <div className=" mt-5">
                    <div className="flex flex-col gap-2 items-start justify-center">
                      <button onClick={() => selectCountry("Bangladesh")}>
                        <div className="flex items-center justify-between gap-2">
                          <HiCurrencyBangladeshi className="text-3xl" />
                          <p className="">Bangladesh</p>
                          <FaCheck
                            className={
                              selectedCountry === "Bangladesh"
                                ? "block"
                                : "hidden"
                            }
                          />
                        </div>
                      </button>
                      <button onClick={() => selectCountry("Pakistan")}>
                        <div className="flex items-center justify-between gap-2">
                          <HiMiniCurrencyRupee className="text-3xl" />
                          <p className="">Pakistan</p>
                          <FaCheck
                            className={
                              selectedCountry === "Pakistan"
                                ? "block"
                                : "hidden"
                            }
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                {/* divider */}
                <div className="inline-block h-28 min-h-[1em] w-0.5 self-stretch bg-gray-600/35 "></div>

                {/* currency */}
                <div className="flex flex-col gap-5">
                  <span className="text-blue-800 font-semibold">Currency</span>

                  <div>
                    <button onClick={() => selectCountry("Bangladesh")}>
                      <div className="flex items-center justify-between gap-2">
                        {selectedCurrency === "BDT" ? (
                          <HiCurrencyBangladeshi className="text-3xl" />
                        ) : (
                          <HiMiniCurrencyRupee className="text-3xl" />
                        )}

                        <p className="">{selectedCurrency}</p>

                        <FaCheck />
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="">
                <button className="btn btn-warning flex ms-auto">Apply</button>
              </div>
            </div>
          </details>

          <div className="hidden lg:block">
            <button className="btn bg-blue-800 hover:bg-blue-800 w-[100px] h-[40px]">
              <span className="text-white">Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
