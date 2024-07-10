
import BlogDetails from "@/components/Blog/BlogDetails";
import Tags from "@/components/Elements/Tags";
import RichText from "@/components/RichText";
import { client } from "@/config/contentful";
import Image from "next/image";

const fetchPost = async (slug)=>{

  
  const singlePosts = await client.getEntries({
      content_type: 'post',
      'fields.slug': slug
  })

  console.log(singlePosts.items, 'dettails')
  if(!singlePosts.items){
    throw new Error('Not able to fetch data')
  }
  console.log(singlePosts,'posts')
  return singlePosts.items


  
}

export default async function BlogPage({ params }) {
  const {slug} = params

    const  data = await fetchPost(slug)

    console.log(data,'fetching method new')

    const {content} = data[0]?.fields?.description


    const imgUrl = 'https:'+ data[0]?.fields?.image?.fields?.file?.url


  return (
    <>
    <script
        type="application/ld+json"
      />
       <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tags
            name=''
            link=''
            className="px-6 text-sm py-2"
          />
          <h1
            className="inline-block mt-6 font-semibold capitalize text-light text-slate-50 text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6"
          >
           {data[0]?.fields?.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
        <Image
          src={imgUrl}
          placeholder="blur"
        //   blurDataURL=''
          alt='ok'
          width=''
          height=''
          className="aspect-square w-full h-full object-cover object-center"
          sizes="100vw"
        />
      
      </div>
      <BlogDetails blog={data}/>

      {/* <div className="grid grid-cols-12  gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10"> */}
        
      {/* <div className=' prose mx-auto lg:col-span-8 font-in sm:prose-base md:prose-lg max-w-max'>  */}
      <div className="mx-auto prose    sxl:gap-16 mt-8 px-5 md:px-10">
        {content?.map((desc,index)=>(
               <RichText key={index} content={desc}/>
        ))}

      </div>
        
    {/* </div> */}
      {/* </div> */}
    </article>
    </>
   
  );
}
