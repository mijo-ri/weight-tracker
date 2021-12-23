import React from 'react';
import Head from 'next/head';

const Home = ({ weights }) => {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com'></link>
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossorigin
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <div className='container mx-auto p-6 w-full md:w-10/12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <h1 className='text-3xl font-bold underline mb-2'>
              Weight tracker
            </h1>
            <ul className='list-disc list-inside'>
              {weights.map((weight) => (
                <li key={weight.id}>{weight.total}</li>
              ))}
            </ul>
          </div>
          <div>
            <form>
              <h2 className='text-2xl font-bold mb-2'>Form</h2>
              <div className='grid grid-cols-4 gap-6'>
                <div className='col-span-2'>
                  <label htmlFor='weight'>Weight</label>
                  <input
                    id='weight'
                    type='number'
                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  ></input>
                </div>
                <div className='col-span-2'>
                  <label htmlFor='date'>Date</label>
                  <input
                    id='date'
                    type='date'
                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  ></input>
                </div>
                <div className='col-span-4 flex flex-row-reverse'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3001/weights');
  const weights = await res.json();

  return {
    props: {
      weights,
    },
  };
}

export default Home;
