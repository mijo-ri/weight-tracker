import React from 'react';
import WeightForm from './WeightForm';
import WeightList from './WeightList';

const WeightDashboard = ({ weights }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <WeightList weights={weights} />
      <WeightForm />
    </div>
  );
};

export default WeightDashboard;
