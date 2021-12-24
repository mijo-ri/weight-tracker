import React, { useContext } from 'react';
import { WeightsContext } from '../../context/WeightsContext';
import WeightListItem from './WeightListItem';

const WeightList = () => {
  const { weights } = useContext(WeightsContext);

  return (
    <div>
      <h1 className='text-3xl font-bold underline mb-2'>Weight tracker</h1>
      <ul>
        {weights.map((weight) => (
          <WeightListItem key={weight.id} weight={weight} />
        ))}
      </ul>
    </div>
  );
};

export default WeightList;
