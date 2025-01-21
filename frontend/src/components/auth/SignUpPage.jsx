import React, { useState } from 'react';
import ValidationFormObject from '../../validation.js';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
function SignupForm() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    file: '',
  });
  const [error, setError] = useState('');
  // name
  // pass
  // email
  const navigateUser = useNavigate();
  const handleChange = (e) => {
    const { name, value,files} = e.target;
    if (name=='file'){
      setData({
        ...data,
        [name]:files[0],
      })
    }else{
    setData({
      ...data,
      [name]: value,
    });
  }
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    const NameV = ValidationFormObject.validteName(data.name);
    const EmailV = ValidationFormObject.validteEmail(data.email);
    const PassV = ValidationFormObject.validtePass(data.password);

    if (typeof NameV == 'string' && NameV.length > 1) {
      return setError(NameV);
    }
    if (typeof EmailV == 'string' && EmailV.length > 2) {
      return setError(EmailV);
    }
    if (typeof PassV == 'string' && PassV.length > 2) {
      return setError(PassV);
    }
    // axios request

    const formDataBody = new FormData();
    formDataBody.append('email',data.email);
    formDataBody.append('password', data.password);
    formDataBody.append('name', data.name);
    formDataBody.append('file', data.file);

    try{
      await axios.post('http://localhost:8080/user/signup', formDataBody, {
        header: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigateUser('/login');

    }catch(er){
      console.log('Somthing went wrong' + er.message);
    }


  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={data.name}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* File Upload Field */}
          <div className="mb-4">
            <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-700">Upload File</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:bg-gray-100 file:cursor-pointer hover:file:bg-gray-200"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
