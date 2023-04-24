import React from "react";
import { googleLogo } from "../../assets";
import { ImGithub } from "react-icons/im";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaPaypal,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className={"bg-black text-[#949494] py-20 font-titleFont"}>
      <div className={"max-w-screen-xl mx-auto  grid grid-cols-4"}>
        <div className={"flex flex-col gap-7 "}>
          <div className={"flex flex-row"}>
            <img
              src={googleLogo}
              alt="googleLogo"
              className={"w-8 h-8 rounded-full cursor-pointer"}
            />
          </div>
          <p className={"text-white text-sm tracking-wide"}>© ReactBD.com</p>

          <div className={"flex gap-5 text-gray-400"}>
            <ImGithub
              className={"hover:text-white duration-300 cursor-pointer"}
            />
            <FaYoutube
              className={"hover:text-white duration-300 cursor-pointer"}
            />
            <FaFacebook
              className={"hover:text-white duration-300 cursor-pointer"}
            />
            <FaTwitch
              className={"hover:text-white duration-300 cursor-pointer"}
            />
            <FaInstagram
              className={"hover:text-white duration-300 cursor-pointer"}
            />
          </div>
        </div>

        <div>
          <h2 className={"text-2xl font-semi-bold text-white mb-4"}>
            Locate us
          </h2>
          <div className={"text-sm flex flex-col gap-2"}>
            <p>Mongolia Ulaanbaatar</p>
            <p>Mobile : 99946042</p>
            <p>Mobile #2 : 99809303</p>
            <p>E-mail : lofffmaaa@gmail.com</p>
          </div>
        </div>

        <div>
          <h2 className={"text-2xl font-semi-bold text-white mb-4"}>Profile</h2>
          <div className={"text-sm flex flex-col gap-2"}>
            <div className={"text-sm flex flex-col gap-2"}>
              <p
                className={
                  "flex items-center gap-3 hover:text-white duration-300 cursor-pointer"
                }
              >
                <span>
                  <BsPersonFill />
                </span>
                My account
              </p>
            </div>
            <div className={"text-sm flex flex-col gap-2"}>
              <p
                className={
                  "flex items-center gap-3 hover:text-white duration-300 cursor-pointer"
                }
              >
                <span>
                  <FaPaypal />
                </span>
                Checkout
              </p>
            </div>
            <div className={"text-sm flex flex-col gap-2"}>
              <p
                className={
                  "flex items-center gap-3 hover:text-white duration-300 cursor-pointer"
                }
              >
                <span>
                  <FaHome />
                </span>
                Order tracking
              </p>
            </div>
            <div className={"text-sm flex flex-col gap-2"}>
              <p
                className={
                  "flex items-center gap-3 hover:text-white duration-300 cursor-pointer"
                }
              >
                <span>
                  <MdLocationOn />
                </span>
                Help & Support
              </p>
            </div>
          </div>
        </div>
        <div className={"flex flex-col justify-center"}>
          <input
            type="text"
            className={"bg-transparent border px-4 py-2 text-sm"}
            placeholder={"E-mail"}
          />
          <button
            className={
              "text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black"
            }
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
