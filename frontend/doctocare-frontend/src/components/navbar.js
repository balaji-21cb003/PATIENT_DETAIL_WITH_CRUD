import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div>
      <div className="hidden md:flex">
        <ul className="text-white font-normal flex space-x-6 md:space-x-8">
          <a
            className="hover:text-[#ff6f61] text-base md:text-lg hover:border-b-2
             hover:border-[#ff6f61] transition ease-out duration-300"
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
            className="hover:text-[#ff6f61] text-base md:text-lg hover:border-b-2 
                 hover:border-[#ff6f61] ml-2 md:ml-8"
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
          <a
            className="hover:text-[#ff6f61] text-base md:text-lg hover:border-b-2 
                 hover:border-[#ff6f61] ml-2 md:ml-8"
            href="/patientdetail"
          >
            <li className="ml-2 md:ml-8 pb-1  flex items-center">
              PATIENT DETAIL
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
