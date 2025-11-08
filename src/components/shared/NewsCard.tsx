import Image from 'next/image'
import React from 'react'
import cardImage1 from '@/assets/banner.jpg';


import Link from 'next/link';
import { Button } from '../ui/button';
import { NewsItem } from '@/types/news';

const NewsCard = async () => {
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()
    console.log("posts",posts);
  return (
    <div className=" bg-gray-100 min-h-screen flex justify-center items-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl">
        {/* <!-- Card 1 --> */}
            {posts.slice(0,6).map((post:NewsItem) => (
                <div className="p-5 flex flex-col justify-between" key={post?._id}>
                <Image
                src={cardImage1}
                alt="Image"
                className="w-full h-48 object-cover"
                />
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                   {post?.author} | {post?.date}
                </p>
                <h2 className="text-lg font-semibold text-gray-900 leading-snug mb-2">
                   {post?.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                   {post?.content}
                </p>
                
                <Link href={"/"}>
                    <Button variant="outline" className="bg-gray-900 text-white text-sm py-2 px-4 rounded-md hover:bg-gray-800 transition">
                        Read More
                    </Button>
                </Link>
                </div>
                
            ))}            
        </div>
    </div>
  )
}

export default NewsCard