'use server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tags from '../Elements/Tags'
// import { sortBlogs } from '@/utils'
// import BlogLayoutOne from '../Blog/BlogLayoutOne'
// import { contentfulLoader } from "@delicious-simplicity/next-image-contentful-loader";

const HomeCoverSection =  ({blogs}) => {
    console.log(blogs,'homecoversection')
    // const sortedBlogs = blogs.slice().sort((a, b) =>
    // compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
//   );
    // const blog = sortedBlogs[0];
    // console.log(blog,'single post')
    const blog =  blogs[0]
    console.log(blog,'single')
    const imgUrl = 'https:'+ blog?.fields?.image?.fields?.file?.url
  return (
    <div>
    <div className='w-full inline-block'>
        <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>
            <div className='absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            ' />
              {/* <Image
        // loader={(props) => contentfulLoader(props, { fit: "crop", ar: "1:1" })}
        loading='lazy'
        src={imgUrl}
        alt={blog?.fields?.image?.fields?.file.fileName}
        width={blog?.fields?.image?.fields?.file?.details?.image?.width}
        height={blog?.fields?.image?.fields?.file?.details?.image?.height}
      /> */}
        <Image
        src='/hero.jpg'
        // src={`https:${blog?.fields?.image?.fields?.file?.url}`}
        alt="Picture of the author"
        fill
        className='w-full h-full object-center object-cover rounded-3xl -z-10'
        sizes='100vw'
        priority
        /> 

        <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light'>
            <Tags link='' name='' />
            <Link href={`blog/${blog?.fields?.slug}`} className='mt-6'>
            <h1 className='font-bold capitalize text-lg text-slate-50 sm:text-xl md:text-3xl lg:text-4xl'>
                <span className='bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '>
                {blog?.fields?.title}
                </span>
            </h1>
            </Link>
            <p className='hidden  sm:inline-block mt-4 md:text-lg lg:text-xl font-in text-slate-50'>
            {/* {blog?.fields.description[0]?.content[0]?.value} */}
            </p>
        </div>
    </article>
    </div>
    </div>
  )
}

export default HomeCoverSection