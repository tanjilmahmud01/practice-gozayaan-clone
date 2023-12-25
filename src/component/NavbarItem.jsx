import React from "react";

const NavbarItem = ({ navItem }) => {
  const { itemName, itemImage } = navItem;

  console.log(navItem);
  return (
    <div className="w-[80px] h-[50px] flex flex-col justify-center items-center">
      <div className="text-2xl">{itemImage}</div>
      <div>
        <p className="text-blue-800 font-semibold">{itemName}</p>
      </div>
    </div>
  );
};

export default NavbarItem;
