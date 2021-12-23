import React, { useState, useEffect } from 'react';
import FormButton from '../form/FormButton';
import FormInput from '../form/FormInput';

const WeightForm = () => {
  // component level state
  const [weight, setWeight] = useState({
    total: 0,
    date: '',
  });

  const onChange = (e) => {
    setWeight({ ...weight, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // add weight

    // update weight

    console.log(weight);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-2xl font-bold mb-2'>Form</h2>
      <div className='grid grid-cols-4 gap-6'>
        <div className='col-span-4 sm:col-span-2'>
          <FormInput
            type='number'
            name='total'
            id='total'
            step='any'
            label='Weight'
            onChange={onChange}
          />
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <FormInput
            type='date'
            name='date'
            id='date'
            label='Date'
            onChange={onChange}
          />
        </div>
        <div className='col-span-4 flex flex-row-reverse'>
          <FormButton type='submit' label='Save' />
        </div>
      </div>
    </form>
  );
};

export default WeightForm;
