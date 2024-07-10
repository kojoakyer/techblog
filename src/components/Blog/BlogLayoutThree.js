
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { contentfulLoader } from "@delicious-simplicity/next-image-contentful-loader";


const BlogLayoutThree = ({blog}) => {
  console.log(blog,'layout three')
  const imgUrl = 'https:'+ blog?.fields?.image?.fields?.file?.url
  return (
    <div>
        <div className="group flex flex-col items-center text-dark dark:text-light">
      <Link href='' className="h-full rounded-xl overflow-hidden">
      {/* <Image
        // loader={(props) => contentfulLoader(props, { fit: "crop", ar: "1:1" })}
        loading='lazy'
        src={imgUrl}
        alt={blog?.fields?.image?.fields?.file.fileName}
        width={blog?.fields?.image?.fields?.details.image?.width}
        height={blog?.fields?.image?.fields?.details.image?.height}
      /> */}
      
         <Image
          src={imgUrl}
          // placeholder="blur"
        //   blurDataURL=''
          alt='ok'
          width={50}
          height={50}
          className=" aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        /> 
      </Link>

      <div className="flex flex-col w-full mt-4">
        <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
          {blog?.fields?.category?.fields?.name}
        </span>
        <Link href={`blog/${blog?.fields?.slug}`}
            className="inline-block my-1">
          <h2 className="font-semibold capitalize  text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50  dark:from-accentDark/50
              dark:to-accentDark/50
              bg-[length:0px_6px] hover:bg-sky-700
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
                  {blog?.fields?.title}
            </span>
          </h2>
        </Link>

        <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm  sm:text-base">
          {/* {format(new Date(blog.publishedAt), "MMMM dd, yyyy")} */}{new Date(blog?.sys?.updatedAt).toDateString()}
        </span>
      </div>
    </div>
    </div>
  )
}

export default BlogLayoutThree