import React from 'react';

const FormButton = ({ ...props }) => {
  const { label, variant, appendClassName, ...restProps } = props;

  let className = '';

  switch (variant) {
    case 'default':
      className =
        'py-2 px-4 border shadow-sm text-sm font-medium rounded-md bg-white hover:bg-gray-50';
      break;

    case 'danger':
      className =
        'inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500';
      break;

    default:
      className =
        'inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
      break;
  }

  if (appendClassName) {
    className += ` ${appendClassName}`;
  }

  return (
    <button {...restProps} className={className}>
      {label}
    </button>
  );
};

export default FormButton;
