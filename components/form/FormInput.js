import React from 'react';

const FormInput = ({ ...props }) => {
  const { id, label, ...restProps } = props;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...restProps}
        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
      ></input>
    </>
  );
};

export default FormInput;
