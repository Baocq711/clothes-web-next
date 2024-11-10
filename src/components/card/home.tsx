import Image from 'next/image';
import React from 'react';

const Card = () => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden w-[300px] flex flex-col justify-center items-start'>
      <Image
        src={`/homepage/1.png`}
        alt={`Product`}
        width={300}
        height={300}
        className='w-full h-64 object-cover'
      />
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-gray-800 mb-2'>
          Product Name
        </h3>
        <p className='text-gray-600 mb-4'>$99.99</p>
      </div>
    </div>
  );
};

export default Card;
