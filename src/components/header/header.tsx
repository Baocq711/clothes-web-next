import BoxIcon from '@/components/header/boxIcon';
import React from 'react';

const Header = () => {
  return (
    <header className='container h-[83px] relative'>
      <nav className='flex justify-between h-full '>
        <div className='flex gap-6 justify-center items-center'>
          <div className='flex justify-center items-center gap-2'>
            <BoxIcon type='facebook' />
            <BoxIcon type='instagram' />
            <BoxIcon type='youtube' />
          </div>
          <div className='flex justify-center items-center gap-6'>
            <div>Elements</div>
            <div>Our Shop</div>
            <div>About us</div>
          </div>
        </div>
        <div className='flex justify-center items-center gap-5'>
          <div className='flex justify-center items-center gap-6'>
            <div>Contacts</div>
            <div>Sign in</div>
            <div>Sign up</div>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <BoxIcon type='reload' />
            <BoxIcon type='likes' />
            <BoxIcon type='carts' />
          </div>
        </div>
        <div className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] z-[9999]'>
          Clothes Store
        </div>
      </nav>
    </header>
  );
};

export default Header;
