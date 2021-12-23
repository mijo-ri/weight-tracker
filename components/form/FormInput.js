import React from 'react';

const FormInput = ({ type, name, label }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
      ></input>
    </>
  );
};

export default FormInput;
