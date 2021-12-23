import React from 'react';
import WeightListItem from './WeightListItem';

const WeightList = ({ weights }) => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline mb-2'>Weight tracker</h1>
      <ul className='list-disc list-inside'>
        {weights.map((weight) => (
          <WeightListItem weight={weight} />
        ))}
      </ul>
    </div>
  );
};

export default WeightList;
