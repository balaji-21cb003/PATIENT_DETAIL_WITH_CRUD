import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Alert } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";

const EditPatient = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    pname: "",
    age: "",
    contact: "",
    pid: "",
    doc_id: "",
    date: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:3001/patientdetail/${id}`)
      .then((res) => {
        setInputs(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  function handleEdit(event) {
    event.preventDefault();

    axios
      .put(`http://localhost:3001/patientdetail`, {
        newdata: inputs,
        patientId: id,
      })
      .then((response) => {
        navigate("/patientdetail");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="w-full h-screen wrap justify-center items-center bg-gradient-to-br px-4 py-8 from-blue-400 to-purple-500 ">
      <div className=" ml-[25%]">
        <Navbar />
      </div>
      <div className="bg-white p-8  ml-[25%] mt-5 rounded-lg shadow-md w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Edit Patient</h2>
        <Alert className="bg-[#f9e6ca] text-[#e65100]" variant="ghost">
          <h1>
            <span className="text-red-600">
              <FontAwesomeIcon
                className="text-lg md:text-base mr-2"
                icon={faCircleExclamation}
              />
              CAUTION:
            </span>
            &nbsp;If you don't also change it, you must supply the FEIDs.
          </h1>
        </Alert>
        <form onSubmit={handleEdit}>
          <div className="mb-4">
            <label htmlFor="pname" className="block text-sm font-medium">
              Patient Name:
            </label>
            <input
              type="text"
              id="pname"
              name="pname"
              value={inputs.pname}
              onChange={(event) =>
                setInputs({ ...inputs, pname: event.target.value })
              }
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium">
              Age:
            </label>
            <input
              type="text"
              id="age"
              name="age"
              onChange={(event) =>
                setInputs({ ...inputs, age: event.target.value })
              }
              value={inputs.age}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pid" className="block text-sm font-medium">
              Patient-ID:
            </label>
            <input
              type="text"
              id="pid"
              name="pid"
              // onChange={(event)=>{inputs["pid"]=event.target.value}}
              value={inputs.pid}
              onChange={(event) =>
                setInputs({ ...inputs, pid: event.target.value })
              }
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="doc_id" className="block text-sm font-medium">
              Doctor-ID:
            </label>
            <label htmlFor="" className="block text-sm font-medium">
              <Alert className="bg-[#f9e6ca] text-[#e65100]" variant="ghost">
                <h1>
                  <span className="text-red-600">
                    <FontAwesomeIcon
                      className="text-lg md:text-base mr-2"
                      icon={faCircleExclamation}
                    />
                    CAUTION:
                  </span>
                  &nbsp;There must be a doctor's ID within car001, car002,
                  car003.
                </h1>
              </Alert>{" "}
            </label>

            <input
              type="text"
              id="doc_id"
              name="doc_id"
              // onChange={(event)=>{inputs["doc_id"]=event.target.value}}
              value={inputs.doc_id}
              onChange={(event) =>
                setInputs({ ...inputs, doc_id: event.target.value })
              }
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              // onChange={(event)=>{inputs["date"]=event.target.value}}
              value={inputs.date}
              onChange={(event) =>
                setInputs({ ...inputs, date: event.target.value })
              }
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium">
              Contact:
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              // onChange={(event)=>{inputs["contact"]=event.target.value}}
              value={inputs.contact}
              onChange={(event) =>
                setInputs({ ...inputs, contact: event.target.value })
              }
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPatient;
