import Image from 'next/image'
import React from 'react'
import Tags from '../Elements/Tags'
import Link from 'next/link'

const BlogLayoutOne = ({blog}) => {
    console.log(blog,'layout one')
    const imgUrl = 'https:'+ blog?.fields?.image?.fields?.file?.url
  return (
    <div>
    <div className="group inline-block overflow-hidden rounded-xl">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10
            "
      />
      <Image
        src={imgUrl}
        // placeholder="blur"
        // blurDataURL=''
        alt='img'
        width={50}
        height={50}
        className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
        sizes="(max-width: 1180px) 100vw, 50vw"
      />

      <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
        <Tags link=''
        className="px-6 text-xs  sm:text-sm py-1 sm:py-2 !border "
        />
        <Link href={`blog/${blog?.fields?.slug}`} className="mt-6">
          <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            <span
              className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] dark:from-accentDark/50 dark:to-accentDark/50
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-sky-700 "
            >
                 {blog?.fields?.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default BlogLayoutOne