import React from 'react';
import FormButton from '../form/FormButton';
import FormInput from '../form/FormInput';

const WeightForm = () => {
  return (
    <div>
      <form>
        <h2 className='text-2xl font-bold mb-2'>Form</h2>
        <div className='grid grid-cols-4 gap-6'>
          <div className='col-span-2'>
            <FormInput type='number' name='weight' label='Weight' />
          </div>
          <div className='col-span-2'>
            <FormInput type='date' name='date' label='Date' />
          </div>
          <div className='col-span-4 flex flex-row-reverse'>
            <FormButton type='submit' name='save' label='Save' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default WeightForm;
