import React, { Suspense } from "react";

import Loading from "../../components/Loading/Loading";
import SearchPage from "../../components/General/SearchPage";
import NavBar from "../../components/General/NavBar";
import Footer from "../../components/General/Footer";

const BlogList = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loading />}>
        <SearchPage />
      </Suspense>

      <Footer />
    </>
  );
};

export default BlogList;
