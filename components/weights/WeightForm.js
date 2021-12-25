import React, { useState, useEffect, useContext } from 'react';
import { WeightsContext } from '../../context/WeightsContext';
import FormButton from '../form/FormButton';
import FormInput from '../form/FormInput';

const WeightForm = () => {
  // global state
  const { current, clearCurrent, addWeight, updateWeight, deleteWeight } =
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

    // validate data
    if (!(total && date)) return;

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

  const onDelete = () => {
    deleteWeight(current);
    clearAll();
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
          <FormButton
            type='button'
            onClick={clearAll}
            label='Clear'
            variant='default'
            appendClassName='mr-2'
          />
          {current && (
            <FormButton
              type='button'
              onClick={onDelete}
              label='Delete'
              variant='danger'
              appendClassName='mr-2'
            />
          )}
        </div>
      </div>
    </form>
  );
};

export default WeightForm;
