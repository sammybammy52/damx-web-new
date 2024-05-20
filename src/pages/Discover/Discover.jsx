import React from "react";
import { useState, useEffect } from "react";
import { useDataContext } from "../../context/DataContext";
import toast from "react-hot-toast";
import NavBar from "../../components/General/NavBar";
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/General/Footer";
import CreativesCarousel from "../../components/CreativesComponents/CreativesCarousel";
import DiscoverNewsletter from "../../components/General/DiscoverNewsletter";

const Discover = () => {
  const { getRequest } = useDataContext();
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState(null);

  const getData = async () => {
    setLoading(true);
    const result = await getRequest("discover/get");
    if (result) {
      setMedia(result);
    } else {
      toast.error("Unable to fetch data");
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <CreativesCarousel media={media && media} />
          <DiscoverNewsletter/>
          <Footer />
        </>
      )}
    </>
  );
};

export default Discover;
