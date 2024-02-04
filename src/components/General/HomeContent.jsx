"use client";

import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";;
import React from "react";
import HomePageBlogCard from "../cards/HomePageBlogCard";
import { fat, courier } from "../fonts/fonts";

const HomeContent = async () => {

  //fetched data
  const data = await getData();
  const blogs = data.blogs;

  return (
    <>
      <div
        className="home-content-div bg-sorta-green pb-3
    "
      >
        <Container maxW={"7xl"}>
          <div className="flex flex-col gap-4 lg:mt-[38vh] 2xl:mt-[25vh] max-md:mt-10">
            {
              blogs.map((i) => (
                <HomePageBlogCard data={i}/>
              ))
            }
           
            
           
          </div>
          
          <Link to={`/blog`}>
          <button className={` bg-secondary text-tetiary p-1 rounded mt-6`}>
            Blog
          </button>
          </Link>
        </Container>
      </div>
    </>
  );
};

async function getData() {
  const res = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/homepage-blogs`,
    { cache: "no-store" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default HomeContent;
