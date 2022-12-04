import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import  sanityClient  from "../client.js"
import yarner from '../theyarn.png'
// import Header from "./Header.js";
function Post() {

 const [postData, setPost] = useState(null);
  useEffect(() => {
  sanityClient
  .fetch(`*[_type == "post"]{
    title, 
    slug, 
   mainImage{
      asset->{
        _id, 
        url
      }, 
      alt
  }
  }`).then((data)=> setPost(data))
  .catch(console.error);
  }, [])
console.log();
  return (
      <div>


   
      {/* <Header /> */}
     
        <div className='flex justify-between items-center
         bg-yellow-400 border-y border-black py-10 lg:py-0' >
          <div className='px-10 space-y-5'>
            <h1 className='text-6xl max-w-xl font-serif'>
            <span className='underline decoration-black decoration-4 '>TheYarn</span> is the Place to write Read and Connect </h1>
            <h2>We are an auckland based tech and art blog. access us from anywhere !</h2>
         </div>
         <img src={yarner} alt="" className='hidden md:inline-flex lg:h-full' style={{height:250}}  />
        </div>





    <main className="bg-red-100 min-h-screen p-12">
      <section className="container mx-auto">
      <h1 className="text-5xl flex justify-center ">Blog Post Page</h1>
      <h2 className="text-lg text-gray-600 flex justify-center py-5">Recent Posts:</h2>

      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          postData && postData.map((post, index)=>(
          <article>
          <Link to ={"/post/"+post.slug.current} key={post.slug.current}>
          <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" 
          key={index} 
          >
            <img src=
            {
              post.mainImage.asset.url
            }
            alt=
            {
              post.mainImage.alt
            }
            className="w-full h-full rounded-r object-cover absolute" /> 
            <span className="block relative h-full flex justify-end items-end pr-4 pb-4 ">
              <h2 className="text-gray-800 text-lg font-blog px-3 bg-red-700 text-red-100 bg-opacity-75 rounded"> 
              {post.title}
              </h2>
             
              </span> 
             
              </span>
            </Link>
              </article>  ))}
      
      </div>
      </section>
    </main>
    </div>
  )
}

export default Post