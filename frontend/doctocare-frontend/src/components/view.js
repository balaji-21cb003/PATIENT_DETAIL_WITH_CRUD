import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";

export default function View() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/patientdetail/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className=" h-screen h-screen  bg-gradient-to-br px-4 py-8 from-blue-400 to-purple-500">
      <div className="flex justify-center mt-10 items-center">
        <Navbar />
      </div>
      <div className="w-[550px] p-8 bg-white ml-[32%] mt-[5%] rounded-lg shadow-lg">
        <h1 className="text-2xl flex justify-center items-center font-semibold mb-4">
          <span className="text-green-500">{user.pname}'s</span>
          &nbsp;&nbsp;Details
        </h1>
        <h1 className="text-base flex justify-center items-center font-semibold mb-4">
          You are viewing the&nbsp;
          <span className="text-red-500">
            ('_id-{user._id}')
          </span>&nbsp;details{" "}
        </h1>
        <div className="border-t border-gray-300 pt-4">
          <p className="text-lg mb-2">
            <span className="font-semibold">Name:</span> {user.pname}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Age:</span> {user.age}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Patient-ID:</span> {user.pid}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Doctor-ID:</span> {user.doc_id}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Contact:</span> {user.contact}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Date:</span> {user.date}
          </p>
        </div>
      </div>
    </div>
  );
}
