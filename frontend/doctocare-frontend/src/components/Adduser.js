import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";

export default function Adduser() {
  const { id } = useParams();

  const [inputs, setInputs] = useState({
    pname: "",
    age: "",
    contact: "",
    pid: "",
    doc_id: "",
    date: "",
  });

  function handleEdit(event) {
    event.preventDefault();

    axios
      .post(`http://localhost:3001/patientdetail/adduser`, inputs)
      .then((response) => {
        console.log(response.data);
        alert("data added successfully!");
        alert(
          "return to the previous page to view your newly contributed data"
        );
        setInputs({
          pname: "",
          age: "",
          contact: "",
          pid: "",
          doc_id: "",
          date: "",
        });
      })
      .catch((error) => {
        console.error("Error adding data:", error);
      });
  }
  return (
    <div className=" w-full h-screen wrap justify-center items-center bg-gradient-to-br px-4 py-8 from-blue-400 to-purple-500">
      <div className="flex justify-center items-center mt-10">
        <Navbar />
      </div>
      <h1 className="text-2xl font-semibold mt-7 ml-[40%] text-[#ff6f61] mb-4">
        ~Add New Patient Detail!
      </h1>
      <form
        onSubmit={handleEdit}
        className="space-y-4 ml-[40%] wrap justify-center items-center"
      >
        <div>
          <label htmlFor="pname" className="block text-sm font-medium">
            Patient Name:
          </label>
          <input
            type="text"
            id="pname"
            name="pname"
            onChange={(event) => (inputs["pname"] = event.target.value)}
            className="mt-1 p-2 border rounded w-[35%]"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium">
            Age:
          </label>
          <input
            type="text"
            id="age"
            name="age"
            onChange={(event) => (inputs["age"] = event.target.value)}
            className="mt-1 p-2 border rounded w-[35%]"
          />
        </div>
        <div>
          <label htmlFor="pid" className="block text-sm font-medium">
            Patient-ID:
          </label>
          <input
            type="text"
            id="pid"
            name="pid"
            onChange={(event) => (inputs["pid"] = event.target.value)}
            className="mt-1 p-2 border rounded w-[35%]"
          />
        </div>
        <div>
          <label htmlFor="doc_id" className="block text-sm font-medium">
            Doctor-ID:
          </label>
          <input
            type="text"
            id="doc_id"
            name="doc_id"
            onChange={(event) => (inputs["doc_id"] = event.target.value)}
            className="mt-1 p-2 border rounded w-[35%]"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={(event) => (inputs["date"] = event.target.value)}
            className="mt-1 p-2 border rounded w-[35%]"
          />
        </div>
        <div>
          <label htmlFor="contact" className="block text-sm font-medium">
            Contact:
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            onChange={(event) => (inputs["contact"] = event.target.value)}
            className="mt-1 p-2 border rounded w-[35%]"
          />
        </div>
        <button
          type="submit"
          className="bg-[#ff6f61] text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
}
