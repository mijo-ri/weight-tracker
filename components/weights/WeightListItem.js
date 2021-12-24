import React, { useContext } from 'react';
import { WeightsContext } from '../../context/WeightsContext';

const WeightListItem = ({ weight }) => {
  const { setCurrent } = useContext(WeightsContext);

  const onClick = () => {
    // set current weight in context
    setCurrent(weight);
  };

  return (
    <li
      className='group flex items-center bg-white hover:bg-indigo-700 hover:text-white shadow-md rounded-md my-2 py-2 px-4 cursor-pointer'
      onClick={onClick}
    >
      <span className='flex-1'>{weight.total}</span>
      <span className='flex-1 text-right text-sm text-gray-400 group-hover:text-white'>
        {weight.date}
      </span>
    </li>
  );
};

export default WeightListItem;
