import Card from '@/components/card/home';
import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <>
      <div className='h-[calc(740px-96px)] w-full bg-[#f2f0f1]'>
        <div className='container grid grid-cols-2 h-full overflow-hidden'>
          <div className='h-[663px] w-full flex-center flex-col gap-8'>
            <div className='font-bold text-[64px]/[60px]'>
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </div>
            <div className='text-[#616060] text-[14px]'>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </div>
            <div className='px-[54px] py-4 bg-black text-white rounded-full text-[14px]/[20px] w-[210px] flex-center self-start'>
              Shop Now
            </div>
            <div className='flex gap-4 translate-y-4'>
              <div className='flex flex-col'>
                <div className='text-[40px]'>200+</div>
                <div className='text-[16px]'>International Brands</div>
              </div>
              <div className='border-l border-gray-300 h-full'></div>
              <div className='flex flex-col'>
                <div className='text-[40px]'>2000+</div>
                <div className='text-[16px]'>High-Quality Products</div>
              </div>
              <div className='border-l border-gray-300 h-full'></div>
              <div className='flex flex-col'>
                <div className='text-[40px]'>30000+</div>
                <div className='text-[16px]'>Happy Customers</div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={'/homepage/1.png'}
              alt=''
              width={663}
              height={1440}
              layout='responsive'
              priority
            />
          </div>
        </div>
      </div>
      <div className='h-[122px] w-full bg-black'></div>
      <div className='h-[72px]'></div>
      <div className='container'>
        <div className='flex-center text-[52px]/[58px]'>NEW ARRIVALS</div>
        <div className='grid grid-cols-4 gap-4 mt-8'>
          <div className='flex-center'>
            <Card />
          </div>
          <div className='flex-center'>
            <Card />
          </div>
          <div className='flex-center'>
            <Card />
          </div>
          <div className='flex-center'>
            <Card />
          </div>
        </div>
        <div className='h-9'></div>
        <div className='flex justify-center'>
          <div className='flex-center p-4 rounded-full border border-[#e5e5e5] h-[52px] w-[218px]'>
            View All
          </div>
        </div>
      </div>

      <div className='h-[64px]'></div>
      <div className='border border-[#e5e5e5]' />
      <div className='h-[64px]'></div>

      <div className='container'>
        <div className='flex-center text-[52px]/[58px]'>TOP SELLER</div>
        <div className='grid grid-cols-4 gap-4 mt-8'>
          <div className='flex-center'>
            <Card />
          </div>
          <div className='flex-center'>
            <Card />
          </div>
          <div className='flex-center'>
            <Card />
          </div>
          <div className='flex-center'>
            <Card />
          </div>
        </div>
        <div className='h-9'></div>
        <div className='flex justify-center'>
          <div className='flex-center p-4 rounded-full border border-[#e5e5e5] h-[52px] w-[218px]'>
            View All
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
