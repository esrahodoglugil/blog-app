"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Stories = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response = await fetch('/blogPosts.json');
      const data = await response.json();
      setBlogPosts(data);
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#0C0C0C] text-[#984AE7] mt-8">
      <div className="container mx-auto px-1 py-8 md:px-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4">My Blogs</h1>
        <hr className="border-b border-white mb-8" />
        <div className="flex flex-col space-y-8">
          {blogPosts.map(post => (
            <div key={post.id} className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Image
                  src={post.image}
                  alt="Story Image"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center max-w-lg md:ml-16 md:-mt-8">
                <h2 className="text-white text-xl sm:text-3xl lg:text-4xl whitespace-pre-line mt-16">{post.title}</h2>
                <p className="text-white sm:text-lg md:text-lg lg:text-xl mt-2">
                  {post.summary}
                </p>
                <div className="flex justify-end mt-4">
                  <Link href={`/blog/${post.id}`} className="bg-[#984AE7] text-black py-2 px-4 rounded text-md hover:bg-purple-300 inline-block">
                    Read Stories
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
