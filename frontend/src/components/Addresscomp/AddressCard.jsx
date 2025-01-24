import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddressCard = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [addressType, setAddressType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addressData = {
      city,
      country,
      address1: add1,
      address2: add2,
      zipCode,
      addressType,
    };
    console.log(addressData);

    const token = localStorage.getItem('token');
    if(!token){
        return alert('Token missing')
    }

    const response = await axios.post(
        `http://localhost:8080/user/add-address?token=${token}`,addressData
    )
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h3 className="text-xl font-bold mb-4">Address Details</h3>

        {/* City */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        {/* Country */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        {/* Address Line 1 */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Address Line 1</label>
          <input
            type="text"
            value={add1}
            onChange={(e) => setAdd1(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        {/* Address Line 2 */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Address Line 2</label>
          <input
            type="text"
            value={add2}
            onChange={(e) => setAdd2(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Zip Code */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Zip Code</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        {/* Address Type */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Address Type</label>
          <select
            value={addressType}
            onChange={(e) => setAddressType(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Select Type</option>
            <option value="Home">Home</option>
            <option value="Office">Office</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};


export default AddressCard;
