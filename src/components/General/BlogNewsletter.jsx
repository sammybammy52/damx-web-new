"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const BlogNewsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    toast.loading("Subscribing...");
    fetch(`${import.meta.env.VITE_SERVER_URL}/newsletter/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.dismiss();
        toast.success("Successfully subscribed to newsletter");
        setEmail("");
      })
      .catch((err) => {
        toast.dismiss();
        toast.error("Error subscribing to newsletter");
      });
  };
  return (
    <form className="flex max-md:block items-center mt-4 gap-3" onSubmit={handleSubmit}>
      <p className={` text-white`}>Email:</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={` bg-white rounded outline-none border-none p-1 max-md:mr-3`}
      />
      <button className={` text-tetiary bg-secondary rounded p-1`}>
        subscribe
      </button>
    </form>
  );
};

export default BlogNewsletter;
