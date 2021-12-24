import React from 'react';
import WeightForm from './WeightForm';
import WeightList from './WeightList';

const WeightDashboard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <WeightList />
      <WeightForm />
    </div>
  );
};

export default WeightDashboard;
