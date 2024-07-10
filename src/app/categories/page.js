
import BlogLayoutThree from "@/components/Blog/BlogLayoutThree";
import { client } from "@/config/contentful";

const fetchPost = async ()=>{
    const posts = await client.getEntries({
        content_type: 'post'
    })

    if(!posts.items){
        throw new Error('Not able to fetch data')
      }
      console.log(posts,'posts')
      return posts.items
}


const CategoryPage = async () => {
    const data = await fetchPost()
     console.log(data,'Data New')


  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">All Categories</h1>
        <span className="mt-2inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      {/* <Categories categories={allCategories} currentSlug={params.slug} /> */}

      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {data.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
