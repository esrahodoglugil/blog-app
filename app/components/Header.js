import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-[#0C0C0C] grid grid-cols-1 lg:grid-cols-12 mt-24 gap-4 lg:gap-0 px-4 sm:px-8 lg:px-16 py-8">
      <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left md:ml-48">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:-ml-16 mt-8">Hello I'm Esra</h1>
        <p className="text-white sm:text-lg lg:text-xl mb-16 lg:-ml-16">Front-End Developer/UI-UX Designer</p>
      </div>
      <div className="lg:col-span-5 flex justify-center lg:justify-end">
        <Image className="rounded-lg" width={500} height={400} src={'/images/frontend.jpg'} alt="Frontend Developer Image"/>
      </div>
    </div>
  );
}

export default Header;
