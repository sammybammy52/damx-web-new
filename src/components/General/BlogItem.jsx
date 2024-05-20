import { Link } from "react-router-dom";
import React from "react";
import { truncateString } from "../../utils/Helpers";
const BlogItem = ({ title, body, string, slug, banner }) => {
  return (
    <Link to={`/news/${slug}`}>
      <div className={`bg-sorta-blue p-4 mb-[2px] ${string} cursor-pointer`}>
        <div className="flex items-center gap-2">
          <img
            src={`${import.meta.env.VITE_FULL_URL}/${
              import.meta.env.VITE_IMAGE_URL
            }/${banner}`}
            alt=""
            className="w-[50px] h-[50px] object-cover rounded-lg"
          />

          <div>
            <h1 className={` text-tetiary font-extrabold mb-1`}>{title}</h1>
            <p className={`text-white  text-sm`}>{truncateString(body, 90)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
