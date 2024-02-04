"use client"
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { BiCopy } from "react-icons/bi";

const CopyUrlButton = ({ url }) => {
  const [copied, setCopied] = useState(false);
  const toast = useToast()

  const copyToClipboard = () => {
    toast({
        title: 'Copied to clipboard',
        description: "link has been copied to clipboard",
        status: 'success',
        position: "top",
        duration: 2000,
        isClosable: true,
      })
    navigator.clipboard
      .writeText(url)
      .then(() => setCopied(true))
      .catch((err) => console.error("Failed to copy URL: ", err));
  };

  return (
    // <button onClick={copyToClipboard}>
    //   {copied ? 'Copied!' : 'Copy URL'}
    // </button>

    <button className="bg-secondary rounded" onClick={copyToClipboard}>
      <BiCopy className="text-tetiary m-2" size={24} />
    </button>
  );
};

export default CopyUrlButton;
