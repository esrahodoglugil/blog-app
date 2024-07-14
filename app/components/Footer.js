import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-purple-400 text-black py-1 mt-32'>
      <div className='container mx-auto px-4 md:px-8 max-w-2xl'>
        <div className='text-start'>
          <h1 className='sm:text-2xl lg:text-3xl font-extrabold mb-2'>Let's Connect</h1>
          <p className='text-sm sm:text-base lg:text-lg'>
            As a dedicated Front-End Developer and UI/UX Designer, I am always eager to connect with like-minded professionals and explore new opportunities. Whether you have a project in mind, need some advice, or just want to chat about the latest trends in web development and design, feel free to reach out. Let's collaborate and create something amazing together!
          </p>
          <div className='flex flex-wrap space-x-4 justify-start'>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='hover:underline'>
              Facebook
            </a>
            <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='hover:underline'>
              Twitter
            </a>
            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='hover:underline'>
              Instagram
            </a>
            <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='hover:underline'>
              LinkedIn
            </a>
          </div>
        </div>
        <div className='mt-8 text-center'>
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
