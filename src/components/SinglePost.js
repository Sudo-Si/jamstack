import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom"; //takes out sections of url 
import React from 'react';
import  sanityClient  from "../client.js"
import imageUrlBuilder from  "@sanity/image-url"
import BlockContent from '@sanity/block-content-to-react'
const builder = imageUrlBuilder(sanityClient)
function urlFor(source){
    return builder.image(source)
}
export default function  SinglePost  () {

    const [singlePost, setSinglePost] = useState(null);
    const{slug} = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title, 
            _id, 
            slug, 
           mainImage{
              asset->{
                _id, 
                url
              }
          }, 
          body, 
          "name":author->name, 
          "authorImage": author->image
}`).then((data)=> setSinglePost(data[0]))
.catch(console.error)
    }, [slug]);

    // console(singlePost)
    if(!singlePost)return <div>Loading ...</div>;
    return (
        <main className="gb-gray-200 min-h-screen p-12 baq">
            <article className="container shadow-lg mx-auto rounded-lg pbaq">
                <header className="relative">
                    <div className="absolute h-ful w-full flex items-center justify-center p-8">
                        
                    </div>
                  <img
                  src={singlePost.mainImage.asset.url}
                  alt={singlePost.title} className='w-full object-fit rounded-t w-16 md:w-3/4 lg:w-1/2 mx-auto'
                  style={{height:'auto'}}
                  />
                </header>  
                <div className="rounded p-0 my-4 mx-4">
                        <h1 className="text-3xl lg:text-3xl mb-4 text-black">
                           {singlePost.title} 
                            </h1>
                          
                    </div>
                <div className=" px-3 lg:px-3 py-3 lg:py-1 prose lg:prose-xl max-w-full">
                    <BlockContent blocks={singlePost.body} projectId="cxt3fpa8"
                    dataset="production" className={"checker bg-blue"}/>
                    </div>
                    <div className="flex justify-left text-gray-800  ">
                            <img 
                            src={urlFor(singlePost.authorImage).url()} 
                            alt= {singlePost.name}
                            className="w-10 h-10 rounded-full"/>
                            <p className="flex items-center pl-2 text-2xl "> posted by: {singlePost.name}
                            </p>
                            </div>
            </article>

            <NavLink className={"mx-4"} to ={"/post"}> Back to posts</NavLink>
        </main>
    );
}


