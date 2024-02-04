import { Link } from "react-router-dom";;
import React from "react";

import { truncateString } from "../../utils/Helpers";

const HomePageBlogCard = ({data}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-[80%] lg:w-[50%]">
          <h1
            className={` text-tetiary font-extrabold mb-1`}
          >
            {data?.title}
          </h1>
          <p className={`text-white  text-sm `}>
            {truncateString(data?.description, 90)}
          </p>
        </div>
        <Link to={`/blog/${data?.slug}`}>
          <button className={`bg-secondary text-tetiary  p-1 rounded`}>
            view
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomePageBlogCard;
