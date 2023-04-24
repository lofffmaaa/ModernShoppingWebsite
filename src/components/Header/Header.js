import React from "react";
import { cardImage, cart, gitHubLogo } from "../../assets";

const Header = () => {
  return (
    <div
      className={
        "w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-bodyFont sticky top-0 z-50"
      }
    >
      <div
        className={
          "max-w-screen-xl h-full mx-auto flex items-center justify-between"
        }
      >
        <div>
          <img src={gitHubLogo} alt="gitHubLogoDark" className={"w-16 h-16"} />
        </div>

        {/*  Pages*/}
        <div className={"flex items-center gap-8"}>
          <ul className={"flex items-center gap-8"}>
            <li
              className={
                "text-base text-black font-medium hover:text-red-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              }
            >
              Home
            </li>
            <li
              className={
                "text-base text-black font-medium hover:text-red-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              }
            >
              Pages
            </li>
            <li
              className={
                "text-base text-black font-medium hover:text-red-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              }
            >
              Shop
            </li>
            <li
              className={
                "text-base text-black font-medium hover:text-red-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              }
            >
              Element
            </li>
            <li
              className={
                "text-base text-black font-medium hover:text-red-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              }
            >
              Blog
            </li>
          </ul>

          <div className={"relative"}>
            <img src={cardImage} alt="cardImage" className={"w-8 h-8"} />
            <span
              className={
                "absolute w-6 top-1 left-2 text-sm flex items-center justify-center font-semi-bold font-bodyFont text-white"
              }
            >
              0
            </span>
          </div>

          <img
            src={cart}
            alt=""
            className={"w-8 h-8 rounded-full cursor-pointer"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;