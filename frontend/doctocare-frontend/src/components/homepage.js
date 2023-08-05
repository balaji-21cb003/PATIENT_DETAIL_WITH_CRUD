import React, { useState } from "react";
import bgvideo from "../images/introvideo1.mp4";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Homepage() {
  const [nav, setNav] = useState(false);

  const handelnav = () => {
    setNav(!nav);
  };

  const myStyle = {
    position: "absolute",
    right: 0,
    bottom: 0,
    zIndex: "-1",
    opacity: "0.95",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div className="#">
      <video style={myStyle} src={bgvideo} muted autoPlay loop />
      <div className="w-full h-[90px] bg-none text-white">
        <div className="max-w-[1240px] mx-auto px-4 flex justify-end items-center h-full">
          <img
            className="w-[220px] h-auto absolute top-5 left-2 md:left-20"
            src={logo}
            alt="logo"
          />
          <div className="hidden md:flex">
            <ul className="text-white font-normal flex space-x-6 md:space-x-8">
              <a
                className="hover:text-[#52967f] text-base md:text-lg hover:border-b-2
             hover:border-[#52967f] transition ease-out duration-300"
                href="/"
              >
                <li className="pb-1 flex items-center">
                  <FontAwesomeIcon
                    className="text-lg md:text-xl mr-2"
                    icon={faHome}
                  />
                  HOMEPAGE
                </li>
              </a>
              <a
                className="hover:text-[#52967f] text-base md:text-lg hover:border-b-2 
                 hover:border-[#52967f] ml-2 md:ml-8"
                href="/centreofexcellence"
              >
                <li className="ml-2 md:ml-8 pb-1  flex items-center">
                  <FontAwesomeIcon
                    className="text-lg md:text-xl mr-2"
                    icon={faGraduationCap}
                  />
                  CENTRE OF EXCELLENCE
                </li>
              </a>
            </ul>
          </div>

          {/* Hamburger menu (visible only on small screens) */}
          <div onClick={handelnav} className="md:hidden">
            {nav ? (
              <AiOutlineClose size={30} className="text-white" />
            ) : (
              <AiOutlineMenu size={30} className="text-white" />
            )}
          </div>

          {/* Mobile menu */}
          <div
            className={
              nav
                ? "w-full bg-none text-white absolute flex justify-center text-center top-[90px] left-0 "
                : "absolute left-[-100%]"
            }
          >
            <ul>
              <a
                className="hover:text-[#52967f] text-base md:text-lg hover:border-b-2
             hover:border-[#52967f] transition ease-out duration-300"
                href="/"
              >
                <li className="p-1 bg-black rounded-md m-8 text-2xl flex items-center">
                  <FontAwesomeIcon
                    className="text-lg md:text-xl mr-2"
                    icon={faHome}
                  />
                  HOMEPAGE
                </li>
              </a>
              <a
                className="hover:text-[#52967f] text-base md:text-lg hover:border-b-2 
                 hover:border-[#52967f] ml-2 md:ml-8"
                href="/centreofexcellence"
              >
                <li className="p-1 bg-black rounded-md  m-8 text-2xl flex items-center">
                  <FontAwesomeIcon
                    className="text-lg md:text-xl mr-2"
                    icon={faGraduationCap}
                  />
                  CENTRE OF EXCELLENCE
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
