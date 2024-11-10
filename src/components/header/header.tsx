import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { LuShoppingCart, LuUserCircle2 } from 'react-icons/lu';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Header = () => {
  return (
    <header>
      <nav className='container flex-center h-24 gap-10'>
        <div className='text-[32px]/[24px] font-bold uppercase'>Shop.Co</div>
        <div className='flex-center gap-4'>
          <div className='text-[16px]/[12px] flex-center gap-1'>
            Shop <MdKeyboardArrowDown size={16} />
          </div>
          <div className='text-[16px]/[12px] flex-center'>
            <span>On Sale</span>
          </div>
          <div className='text-[16px]/[12px] flex-center'>
            <span>New Arrivals</span>
          </div>
          <div className='text-[16px]/[12px] flex-center'>
            <span>Brands</span>
          </div>
        </div>
        <div className='bg-[#f0f0f0] rounded-full h-[48px] w-[577px] flex items-center gap-3 py-3 px-4'>
          <IoSearch color='#909090' size={24} />
          <input
            type='text'
            placeholder='Search for products'
            className='bg-inherit focus:outline-none w-[calc(100%-36px-12px)] h-[22]'
          />
        </div>
        <div className='flex-center gap-[14px]'>
          <LuShoppingCart color='#000' size={24} />
          <LuUserCircle2 color='#000' size={24} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
