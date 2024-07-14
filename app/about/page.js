import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-[#0C0C0C] text-white min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl text-[#984AE7]">About Me</h1>
          <p className="text-lg mt-4">A little bit about myself</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
          <div className="md:w-1/2 mb-8 md:mb-0 md:ml-32">
            <Image 
              src="/images/girl.jpg" 
              alt="About Me Image" 
              width={350} 
              height={300} 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed mb-6">
              I have been enjoying working as a Front-End Developer in the web world for many years. For me, coding is not just a profession but also a passion. In this blog, I am here to share my experiences, what I have learned, and the projects that have inspired me.
            </p>
            <h2 className="text-3xl font-bold text-[#984AE7] mb-4">Experience & Projects</h2>
            <p className="text-lg leading-relaxed mb-6">
              Throughout my career, I have worked on a variety of exciting projects that have challenged me and helped me grow as a developer. From building responsive websites to creating intuitive user interfaces, my goal is always to deliver high-quality work that exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
