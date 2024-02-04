import { Link } from "react-router-dom";
import React from "react";
import { truncateString } from "../../utils/Helpers";
const BlogItem = ({ title, body, string, slug }) => {
  return (
    <Link to={`/news/${slug}`}>
      <div className={`bg-sorta-blue p-3 mb-[2px] ${string} cursor-pointer`}>
        <h1 className={` text-tetiary font-extrabold mb-1`}>{title}</h1>
        <p className={`text-white  text-sm`}>{truncateString(body, 90)}</p>
      </div>
    </Link>
  );
};

export default BlogItem;
