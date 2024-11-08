import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaRegHeart,
  FaYoutube,
} from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { TfiReload } from 'react-icons/tfi';

interface BoxIconProps {
  type?: 'facebook' | 'instagram' | 'youtube' | 'reload' | 'likes' | 'carts';
  background?: boolean;
}

const BoxIcon = ({ type, background = false }: BoxIconProps) => {
  let icon;
  switch (type) {
    case 'facebook':
      icon = <FaFacebookF color='white' />;
      background = true;
      break;
    case 'instagram':
      icon = <FaInstagram color='white' />;
      background = true;
      break;
    case 'youtube':
      icon = <FaYoutube color='white' />;
      background = true;
      break;
    case 'reload':
      icon = <TfiReload color='black' size={20} />;
      break;

    case 'likes':
      icon = <FaRegHeart color='black' size={20} />;
      break;
    case 'carts':
      icon = <FaCartShopping color='black' size={20} />;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <div
      className='rounded-full h-[26px] w-[26px] bg-black flex justify-center items-center'
      style={{
        backgroundColor: background ? 'black' : 'transparent',
      }}
    >
      {icon}
    </div>
  );
};

export default BoxIcon;
