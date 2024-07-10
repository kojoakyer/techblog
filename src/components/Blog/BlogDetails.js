// import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
// import { slug } from "github-slugger";
import ViewCounter from "./ViewCounter";

const BlogDetails = ({blog}) => {
    console.log(blog,'Yess')
   const details = blog[0]
   console.log(details,'cool')
  return (
    <div>
    <div className="px-2  md:px-10 bg-red-400 dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg">
      <time className="m-3">
        {/* {format(parseISO(blog.publishedAt), "LLLL d, yyyy")} */}{new Date(details?.sys?.createdAt).toDateString()}
      </time>
      <span className="m-3">
        <ViewCounter  />
      </span>
      <div className="m-3">      {details?.fields?.author?.fields?.name}
</div>
      <Link href='' className="m-3">
      {details?.fields?.category?.fields?.name}

      </Link>
    </div>
    </div>
  )
}

export default BlogDetails