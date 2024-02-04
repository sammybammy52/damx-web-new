
import React from "react";
import { useDisclosure } from "@chakra-ui/react";

import ShareModal from "../modals/ShareModal";
import Share from "../../assets/blogImgs/share1.svg";

const TopStoryShare = ({ slug }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <ShareModal slug={slug} isOpen={isOpen} onClose={onClose}/>
    <p
      className={` font-extrabold text-lg py-2 text-tetiary flex items-center gap-2 cursor-pointer hover:scale-105 transition-all duration-300`}
      onClick={onOpen}
    >
      <img src={Share} alt="" className=" h-[20px] w-[20px]" />
      Share
    </p>
    </>
    
  );
};

export default TopStoryShare;
