import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Alert } from "@material-tailwind/react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const EditPatient = () => {
  const { id } = useParams();

  let inputs={
          "pname":"",
          "age":"",
          "contact":"",
          "pid":"",
          "doc_id":"",
          "date":""
          // "date":null
        }

  function handleEdit(event) {
    event.preventDefault();

    axios
      .put(`http://localhost:3001/patientdetail`, {newdata:inputs,patientId:id})
      .then((response) => {
        console.log(response.data);
        alert("your data have been updated! ");
        alert("go back the previous page");
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Edit Patient</h2>
        <Alert className='bg-[#f9e6ca] text-[#e65100]'  variant="ghost">
        <h1><span className='text-red-600'><FontAwesomeIcon className='text-lg md:text-base mr-2' icon={faCircleExclamation} />
        CAUTION:</span>&nbsp;If you don't also change it, you must supply the FEIDs.</h1>
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
              onChange={(event)=>{inputs["pname"]=event.target.value}}
              // value={inputs.pname}
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
              onChange={(event)=>{inputs["age"]=event.target.value}}
              // value={inputs.age}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium">
              Patient-ID:
            </label>
            <input
              type="text"
              id="pid"
              name="pid"
              onChange={(event)=>{inputs["pid"]=event.target.value}}
              // value={inputs.age}
              className="mt-1 p-2 border rounded w-full"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium">
              Doctor-ID:
            </label>
            <input
              type="text"
              id="doc_id"
              name="doc_id"
              onChange={(event)=>{inputs["doc_id"]=event.target.value}}
              // value={inputs.age}
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
              onChange={(event)=>{inputs["date"]=event.target.value}}
              // value={inputs.age}
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
              onChange={(event)=>{inputs["contact"]=event.target.value}}
              // value={inputs.contact}
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

