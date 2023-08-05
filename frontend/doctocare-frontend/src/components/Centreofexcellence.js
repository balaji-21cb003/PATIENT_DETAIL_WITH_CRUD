import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Centreofexcellence() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    console.log(docs);
  }, [docs]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/doctor")
      .then((resp) => {
        console.log(resp.data.data);
        setDocs(resp.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-blue-300">
      <img
        className="w-[220px] h-auto absolute top-5 mx-[35%] md:left-20"
        src={logo}
        alt="logo"
      />
      <div className="flex flex-wrap justify-center">
        {docs.map((doctor) => (
          <div key={doctor.doc_id} className="m-4">
            <div className="bg-white rounded-lg my-20 shadow-md p-4 w-72">
              <img
                className="w-full h-auto rounded-md"
                src={doctor.image}
                alt="Card image cap"
              />
              <div className="p-4">
                <h5 className="text-xl  font-semibold mx-[50px] mb-2">
                  {doctor.name}
                </h5>
                <h3 className="text-base font-semibold mx-[50px] mb-2">
                  ID:{doctor.doc_id}
                </h3>
                <p className="text-gray-600">{doctor.discription}</p>
              </div>
              <ul className="list-none">
                <li className="border-t text-red-500 border-gray-200 content-center justify-center p-2">
                  {doctor.year} of experience
                </li>
                <li className="border-t border-gray-200 p-2">
                  {doctor.no_of_operation}+ successful operations
                </li>
                <li className="border-t border-gray-200 p-2">
                  {doctor.hospital_name}
                </li>
              </ul>
              <div className="p-4">
                <button class="bg-blue-500  hover:bg-blue-700 text-white mx-5 py-2 px-4 border border-blue-700 rounded">
                  <Link
                    to="/patientdetail"
                    className="text-white-300 text-xl hover:text-[#52967f] mr-4"
                  >
                    View Patients
                  </Link>
                </button>
                {/* <a href="#" className="text-blue-500 hover:underline">Another link</a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
