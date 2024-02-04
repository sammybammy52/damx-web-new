"use client"

import React from 'react'

const SocialShareIcon = ({ link, icon, bg}) => {
  return (
    <a href={link} target="_blank">
        <div className={`rounded-full h-10 w-10 p-3 hover:scale-110 transition-all duration-300 mt-4`} style={{ backgroundColor: bg}}>
            {icon}
        </div>
    </a>
  )
}

export default SocialShareIcon