import React, { useState, useEffect, useContext } from 'react';
import { WeightsContext } from '../../context/WeightsContext';
import FormButton from '../form/FormButton';
import FormInput from '../form/FormInput';

const WeightForm = () => {
  // global state
  const { current, clearCurrent, addWeight, updateWeight } =
    useContext(WeightsContext);

  useEffect(() => {
    if (current !== null) {
      setWeight(current);
    } else {
      setWeight({
        total: '',
        date: '',
      });
    }
  }, [current]);

  // component state
  const [weight, setWeight] = useState({
    total: '',
    date: '',
  });

  const { total, date } = weight;

  const onChange = (e) => {
    setWeight({ ...weight, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (current === null) {
      addWeight(weight);
    } else {
      updateWeight(weight);
    }

    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
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
            value={total}
            onChange={onChange}
          />
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <FormInput
            type='date'
            name='date'
            id='date'
            label='Date'
            value={date}
            onChange={onChange}
          />
        </div>
        <div className='col-span-4 flex flex-row-reverse'>
          <FormButton
            type='submit'
            label={current === null ? 'Add Weight' : 'Edit Weight'}
          />
          <button
            className='mr-2 py-2 px-4 border shadow-sm text-sm font-medium rounded-md bg-white hover:bg-gray-50'
            onClick={clearAll}
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default WeightForm;
