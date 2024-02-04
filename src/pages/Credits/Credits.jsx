import React from "react";
import NavBar from "../../components/General/NavBar";
import Footer from "../../components/General/Footer";

const Credits = () => {
  return (
    <>
      <NavBar />

      <div className="max-h-[300px] overflow-y-auto flex flex-col gap-4">
        <p className={` text-tetiary text-xl`}>
          <a href="https://www.freepik.com/free-psd/virtual-reality-experience-3d-illustration_16336292.htm#query=gaming%203d%20vector&position=29&from_view=search&track=ais">
            Hero Image by Kerfin7
          </a>{" "}
          on Freepik
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Credits;
