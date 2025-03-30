import React from 'react';
import logo from '@/assets/logo.png';

const Logo = () => {
  return (
    <div className="w-full pt-10 absolute top-0 left-0 z-10 px-8 lg:px-44">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="w-20" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
