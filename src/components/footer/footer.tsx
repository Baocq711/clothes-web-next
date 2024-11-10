import Icon from '@/components/icon/icon';
import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';

const Footer = () => {
  return (
    <footer>
      <div className='bg-gray-100 text-gray-800 translate-y-[90px]'>
        <div
          className='
        container bg-black h-[180px] -translate-y-[90px] rounded-[20px] px-[64px] py-[36px]
        flex justify-between items-center
      '
        >
          <div className='text-white text-[40px]/[48px] h-[94px] w-[551px]'>
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </div>
          <div className='w-[349px] flex flex-col gap-[14px]'>
            <div className='w-full h-[48px] rounded-full bg-white px-4 py-3 gap-3 flex'>
              <MdOutlineMailOutline size={24} />
              <input
                type='text'
                placeholder='Enter your email address'
                className='w-full bg-transparent outline-none'
              />
            </div>
            <div className='w-full h-[48px] rounded-full bg-white flex-center'>
              Subscribe to Newsletter
            </div>
          </div>
        </div>
        {/* Links section */}
        <div className='container -translate-y-[40px] flex justify-between'>
          <div>
            <div className='flex flex-col gap-[35px]'>
              <div className='flex flex-col w-[248px] gap-[25px]'>
                <div className='text-[32px]/[24px] font-bold'>SHOP.CO</div>
                <div className='text-[12px]/[22px] text-[#606060]'>
                  We have clothes that suits your style and which you’re proud
                  to wear. From women to men.
                </div>
              </div>
              <div className='flex gap-3'>
                <Icon icon={<FaTwitter size={14} />}></Icon>
                <Icon
                  icon={<FaFacebookF size={14} color='white' />}
                  variant={'primary'}
                />
                <Icon icon={<FaInstagram size={16} />}></Icon>
                <Icon icon={<FaGithub size={14.5} />}></Icon>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[26px]'>
            <div className='text-[32px]/[24px] font-bold uppercase'>
              Company
            </div>
            <div className='flex flex-col gap-[14px]'>
              <div className='text-[16px]/[22px] text-[#606060]'>About</div>
              <div className='text-[16px]/[22px] text-[#606060]'>Features</div>
              <div className='text-[16px]/[22px] text-[#606060]'>Works</div>
              <div className='text-[16px]/[22px] text-[#606060]'>Career</div>
            </div>
          </div>
          <div className='flex flex-col gap-[26px]'>
            <div className='text-[32px]/[24px] font-bold uppercase'>Help</div>
            <div className='flex flex-col gap-[14px]'>
              <div className='text-[16px]/[22px] text-[#606060]'>
                Customer Support
              </div>
              <div className='text-[16px]/[22px] text-[#606060]'>
                Delivery Details
              </div>
              <div className='text-[16px]/[22px] text-[#606060]'>
                Terms & Conditions
              </div>
              <div className='text-[16px]/[22px] text-[#606060]'>Privacy</div>
            </div>
          </div>
          <div className='flex flex-col gap-[26px]'>
            <div className='text-[32px]/[24px] font-bold uppercase'>FAQ</div>
            <div className='flex flex-col gap-[14px]'>
              <div className='text-[16px]/[22px] text-[#606060]'>Account</div>
              <div className='text-[16px]/[22px] text-[#606060]'>
                Manage Deliveries
              </div>
              <div className='text-[16px]/[22px] text-[#606060]'>Orders</div>
              <div className='text-[16px]/[22px] text-[#606060]'>Payments</div>
            </div>
          </div>
          <div className='flex flex-col gap-[26px]'>
            <div className='text-[32px]/[24px] font-bold uppercase'>
              Resources
            </div>
            <div className='flex flex-col gap-[14px]'>
              <div className='text-[16px]/[22px] text-[#606060]'>
                Free eBooks
              </div>
              <div className='text-[16px]/[22px] text-[#606060]'>
                Development Tutorial
              </div>
              <div className='text-[16px]/[22px] text-[#606060]'>
                How to - Blog
              </div>
              <div className='text-[16px]/[22px] text-[#606060]'>
                Youtube Playlist
              </div>
            </div>
          </div>
        </div>
        <div className='h-[50px] border-b border-[#d8d8d8] container'></div>
        <div className='h-[25px]'></div>
        <div className='container flex justify-between items-center'>
          <div className='text-[16px] text-[#606060]'>
            Shop.co © 2000-2023, All Rights Reserved
          </div>
          <div className='flex-center'>
            <div className='bg-white w-[46px] h-[30px] rounded-[6px] flex-center'>
              <Image
                src='/footer/visa.webp'
                alt='Visa'
                width={32}
                height={10}
              />
            </div>{' '}
            <div className='bg-white w-[46px] h-[30px] rounded-[6px] flex-center'>
              <Image
                src='/footer/mastercard.png'
                alt='MasterCard'
                width={32}
                height={10}
              />
            </div>
            <div className='bg-white w-[46px] h-[30px] rounded-[6px] flex-center'>
              <Image
                src='/footer/paypal.png'
                alt='PayPal'
                width={32}
                height={10}
              />
            </div>
            <div className='bg-white w-[46px] h-[30px] rounded-[6px] flex-center'>
              <Image
                src='/footer/apple-pay.png'
                alt='Apple Pay'
                width={32}
                height={10}
              />
            </div>
            <div className='bg-white w-[46px] h-[30px] rounded-[6px] flex-center'>
              <Image
                src='/footer/google-pay.png'
                alt='Google Pay'
                width={32}
                height={10}
              />
            </div>
          </div>
        </div>
        <div className='h-16'></div>
      </div>
    </footer>
  );
};

export default Footer;
