import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const navbarList = [
  { text: "30-DAY SATISFACTION GUARANTEE", imgPath: "/satisfy.png" },
  {
    text: "FREE DELIVERY ON ORDERS OVER $40.00",
    imgPath: "/ship.png"
  },
  { text: "50.000+ HAPPY CUSTOMERS", imgPath: "/heart.png" },
  { text: "100% MONEY BACK GUARANTEE", imgPath: "/guarantee.png" }
];

export default function NavBar() {
  const [actualSlice, setActualSlice] = useState(0);

  return (
    <nav className="bg-[#252F3D] text-[#FFFFFF] text-xs items-center">
      {/* desktop navbar */}
      <ul className="lg:flex flex-wrap justify-between items-center hidden px-20">
        {navbarList.map((item) => (
          <li key={item.text} className="items-center py-4 flex gap-3">
            <img src={item.imgPath} className="h-[22px]" />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
      {/* mobile navbar */}
      <div className="items-center flex lg:hidden justify-between py-3">
        <IoIosArrowBack
          size={20}
          className="hover:cursor-pointer mx-5"
          onClick={() => {
            if (actualSlice > 0) setActualSlice(actualSlice - 1);
          }}
        />
        <div className="items-center flex gap-3">
          <img src={navbarList[actualSlice].imgPath} className="h-[22px]" />
          <p>{navbarList[actualSlice].text}</p>
        </div>
        <IoIosArrowForward
          size={20}
          className="hover:cursor-pointer mx-5"
          onClick={() => {
            if (actualSlice < navbarList.length - 1)
              setActualSlice(actualSlice + 1);
          }}
        />
      </div>
    </nav>
  );
}
