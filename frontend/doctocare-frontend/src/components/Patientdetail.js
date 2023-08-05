import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";

export default function Patientdetail() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/patientdetail")
      .then((resp) => {
        setDocs(resp.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const deleteUser = (_id) => {
    axios
      .delete(`http://localhost:3001/patientdetail?_id=${_id}`)
      .then(() => {
        setDocs((prevDocs) => prevDocs.filter((doc) => doc._id !== _id));
        alert("Are you sure to delete this data?");
        alert("Data successfully deleted");
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-full h-screen px-4 py-8">
      <div className="flex justify-center">
        <Navbar />
      </div>
      <div className="flex justify-end items-end mr-8">
        <Link
          to="/adduser"
          className="hover:bg-[#97cf49] hover:border-2 hover:border-white flex items-center
    hover:text-red-700 hover:shadow-md rounded-lg bg-white font-bold text-black py-1 px-2"
        >
          <FontAwesomeIcon
            className="text-xl text-red-700 md:text-base mr-2"
            icon={faAdd}
          />
          Add Users
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-8 text-center">PATIENT TABLE</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-center shadow-lg">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-sm font-medium text-white">#</th>
              <th className="px-1 py-3 text-lg font-semibold text-white"></th>
              <th className="px-1 py-3 text-lg font-semibold text-white">
                Name
              </th>
              <th className="px-4 py-3 text-lg font-semibold text-white">
                Age
              </th>
              <th className="px-4 py-3 text-lg font-semibold text-white">
                Patient-ID
              </th>
              <th className="px-4 py-3 text-lg font-semibold text-white">
                Doctor-ID
              </th>
              <th className="px-4 py-3 text-lg font-semibold text-white">
                Contact
              </th>
              <th className="px-4 py-3 text-lg font-semibold text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {docs.map((data, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-4 py-3 text-sm text-gray-900">{index + 1}</td>
                <td className="px-1 py-3 text-sm text-gray-900">
                  <FontAwesomeIcon
                    className="text-5xl text-red-700 md:text-2xl mr-2"
                    icon={faUserCircle}
                  />
                </td>

                <td
                  className="px-1 py-3 text-lg  mt-2 flex justify-center items-center font-
          semibold text-gray-900"
                >
                  {data.pname}
                </td>

                <td className="px-4 py-3 text-lg font-semibold text-gray-900">
                  {data.age}
                </td>
                <td className="px-4 py-3 text-lg font-semibold text-gray-900">
                  {data.pid}
                </td>
                <td className="px-4 py-3 text-lg font-semibold text-gray-900">
                  {data.doc_id}
                </td>
                <td className="px-4 py-3 text-lg font-semibold text-gray-900">
                  {data.contact}
                </td>
                <td className="px-4 py-3 text-lg font-semibold text-gray-900 space-x-4">
                  <Link
                    to={`/view/${data._id}`}
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edit-user/${data._id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(data._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
