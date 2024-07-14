"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const BlogPage = ({ params }) => {
  const { id } = params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      const response = await fetch('/blogPosts.json');
      const data = await response.json();
      const blogPost = data.find(post => post.id === parseInt(id));
      setPost(blogPost);
    };

    if (id) {
      fetchBlogPost();
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0C0C0C] p-7 flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src={post.image}
            alt="Story Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center max-w-lg md:ml-8">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl whitespace-pre-line mt-8 md:mt-0">
            {post.title}
          </h2>
          <p className="text-white text-base sm:text-lg md:text-lg lg:text-xl mt-2">
            {post.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
