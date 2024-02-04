

import { useState, useEffect } from "react";
import BlogListItem from "./BlogListItem";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState(null);
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q"); // Retrieves the value of the 'q' parameter
  const date = queryParams.get("date");

  const getData = (query, date) => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_SERVER_URL}/catalog?q=${query}&date=${date}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData(query, date);
  }, [query, date]);

  const handleDate = (e) => {
    navigate(`/news-list?q=${query}&date=${e.target.id}`);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-sorta-green min-h-[85vh] py-20 max-md:px-4">
          <div className="max-w-[1024px] mx-auto">
            <div className="lg:flex justify-between items-center mb-8">
              <h1
                className={` text-tetiary text-xl font-extrabold max-md:mb-6`}
              >
                Showing Search Results for "{query}"
              </h1>

              <div className={` flex gap-4 text-tetiary font-extrabold`}>
                <p
                  className={`${
                    date == "latest" && "border-b-4 border-secondary"
                  } cursor-pointer`}
                  id="latest"
                  onClick={handleDate}
                >
                  latest
                </p>
                <p
                  className={`${
                    date == "oldest" && "border-b-4 border-secondary"
                  } cursor-pointer`}
                  id="oldest"
                  onClick={handleDate}
                >
                  oldest
                </p>
              </div>
            </div>
            <div className="all-blogs-container max-h-[375px] max-md:max-h-[500px] overflow-y-scroll">
              <div className="flex flex-col gap-2  mx-4">
                {blogs &&
                  blogs?.map((i, index) =>
                    index == 0 ? (
                      <BlogListItem
                        title={i.title}
                        body={i.description}
                        string={" rounded-tr-lg rounded-tl-lg"}
                        slug={i.slug}
                      />
                    ) : index == blogs.length - 1 ? (
                      <BlogListItem
                        title={i.title}
                        body={i.description}
                        string={" rounded-br-lg rounded-bl-lg"}
                        slug={i.slug}
                      />
                    ) : (
                      <>
                        <BlogListItem
                          title={i.title}
                          body={i.description}
                          string={""}
                          slug={i.slug}
                        />
                      </>
                    )
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchPage;
