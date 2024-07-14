import React from 'react';
import Link from 'next/link';

const Links = ({ isOpen }) => {
  const links = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About Me',
      path: '/about',
    },
    {
      title: 'Stories',
      path: '/stories',
    }
  ];

  return (
    <div className={`flex flex-col md:flex-row md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
      {links.map((link) => (
        <Link href={link.path} key={link.title} className="text-[#984AE7] hover:text-purple-300 py-2 md:py-0">
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
