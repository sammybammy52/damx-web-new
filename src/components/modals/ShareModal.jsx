"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { BiCopy, BiSearchAlt } from "react-icons/bi";
import CopyUrlButton from "../General/CopyUrlButton";
import SocialShareIcon from "../cards/SocialShareIcon";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from'react-icons/fa';
import { FaLinkedinIn } from'react-icons/fa';
import { useDisclosure } from "@chakra-ui/react";

const ShareModal = ({ slug, isOpen, onClose }) => {
    const blogUrl = `https://damxstudio.com/news/${slug}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${blogUrl}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${blogUrl}`;
    //linkedin url for sharing
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${blogUrl}`;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor={"black"}  className="bg-black">
        <ModalHeader className={` text-tetiary`}>
          Share Article
        </ModalHeader>
        <ModalCloseButton className="text-white" />
        <ModalBody>
          <div action="" >
            <div className="flex items-center gap-2">
              <input
                type="text"
                name="query"
                value={blogUrl}
                readOnly={true}
                className=" rounded px-4 py-2 w-full bg-gray-100"
              />
              <CopyUrlButton url={blogUrl}/>
            </div>

            <div className="flex social-btns gap-3">
                <SocialShareIcon icon={<FaFacebookF color="white"/>} link={facebookUrl} bg={`#1877F2`}/>
                <SocialShareIcon icon={<FaTwitter color="white"/>} link={twitterUrl} bg={`#1DA1F2`}/>
                <SocialShareIcon icon={<FaLinkedinIn color="white"/>} link={linkedinUrl} bg={`#0A66C2`}/>
                
            </div>
          </div>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ShareModal