import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Adduser() {
  const { id } = useParams();

  const [inputs, setInputs] = useState({
    pname: "",
    age: "",
    contact: "",
    pid: "",
    doc_id: "",
    date: ""
  });

  function handleEdit(event) {
    event.preventDefault();

    axios
      .post(`http://localhost:3001/patientdetail/adduser`, inputs)
      .then((response) => {
        console.log(response.data);
        alert("Your data has been added!");
        // Clear the input fields after successful addition
        setInputs({
          pname: "",
          age: "",
          contact: "",
          pid: "",
          doc_id: "",
          date: ""
        });
      })
      .catch((error) => {
        console.error("Error adding data:", error);
      });
  }
  return (

    <div className="p-8">
  <h1 className="text-2xl font-bold mb-4">Add New Patient</h1>
  <form onSubmit={handleEdit} className="space-y-4">
    <div>
      <label htmlFor="pname" className="block text-sm font-medium">
        Patient Name:
      </label>
      <input
        type="text"
        id="pname"
        name="pname"
        onChange={(event) => (inputs["pname"] = event.target.value)}
        className="mt-1 p-2 border rounded w-full"
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
        className="mt-1 p-2 border rounded w-full"
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
        className="mt-1 p-2 border rounded w-full"
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
        className="mt-1 p-2 border rounded w-full"
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
        className="mt-1 p-2 border rounded w-full"
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
        className="mt-1 p-2 border rounded w-full"
      />
    </div>
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add
    </button>
  </form>
</div>

   
  )
}
