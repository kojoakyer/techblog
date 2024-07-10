
import FeaturedPosts from "@/components/Home/FeaturedPosts";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import RecentPost from "@/components/Home/RecentPost";
import { client } from "@/config/contentful";
import Image from "next/image";
// import { useEffect, useState } from "react";


const fetchPost = async ()=>{
  const posts = await client.getEntries({
      content_type: 'post'
  })

  console.log(posts.items, 'Checking for data')
  // setData(posts.items)

  if(!posts.items){
    throw new Error('Not able to fetch data')
  }
  console.log(posts,'posts')
  return posts.items
}
export default async function Home() {
  const data = await fetchPost()
  // const [data , setData]= useState([])

  //   useEffect(()=>{
        
  //        fetchPost()
  //    },[])

  console.log(data,'Data New')
  return (
  
       <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={data} />
      <FeaturedPosts blogs={data} />
      <RecentPost blogs={data}/>


    </main>
    
  );
}
