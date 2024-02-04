import { Link } from 'react-router-dom'
import React from 'react'
import { truncateString } from '../../utils/Helpers' 

const BlogListItem = ({title, body, string, slug}) => {
  return (
    <Link to={`/news/${slug}`}>
      <div className={`bg-sorta-blue p-4 mb-[2px] ${string} cursor-pointer`}>
        <h1 className={` text-tetiary text-xl font-extrabold mb-1`}>{title}</h1>
        <p className={`text-white  text-sm`}>{truncateString(body, 100)}</p>
    </div>
    </Link>
  )
}

export default BlogListItem