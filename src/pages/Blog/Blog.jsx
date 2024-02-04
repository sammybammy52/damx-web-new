import { useState, useEffect } from "react";
import { useDataContext } from "../../context/DataContext";
import toast from "react-hot-toast";
import NavBar from "../../components/General/NavBar";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom/dist";
import TopStoryShare from "../../components/General/TopStoryShare";
import Bell from '../../assets/blogImgs/bell.svg';
import BlogNewsletter from "../../components/General/BlogNewsletter";
import Footer from "../../components/General/Footer";
import BlogItem from "../../components/General/BlogItem";
const Blog = () => {
  const { getRequest } = useDataContext();
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState(null);
  const [topStory, setTopStory] = useState(null);
  const getData = async () => {
    setLoading(true);
    const result = await getRequest("client/blogs");
    if (result) {
      setBlogs(result.blogs);
      setTopStory(result.top_story);
    } else {
      toast.error("Unable to fetch data");
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const currentDate = new Date();

  // Define options for formatting the date
  const options = { day: "numeric", month: "short", year: "numeric" };

  // Format the date
  const formattedDate = currentDate.toLocaleString("en-US", options);

  // Extract the month, day, and year separately
  const parts = formattedDate.split(" ");
  const month = parts[0];
  const day = parseInt(parts[1]);
  const year = parseInt(parts[2]);

  // Output the results
  console.log("Month:", month);
  console.log("Day:", day);
  console.log("Year:", year);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <div className=" flex items-center max-md:px-3 max-md:pb-20">
            <div className=" max-w-[1366px] mx-auto">
              <div className="lg:grid grid grid-cols-1 lg:grid-cols-10 lg:gap-20 py-10 lg:scale-[0.82] min-[1600px]:scale-100">
                <div className=" lg:col-span-6 max-md:mb-8">
                  <div >
                    <h1 className={` text-xl text-tetiary uppercase mb-3 px-1`}>
                      Newsletter
                    </h1>
                    <div className="top-blog-container relative">
                      <div
                        className={` date-div absolute top-8 lg:left-8 max-md:left-4 bg-secondary text-tetiary p-4 rounded text-center`}
                      >
                        <h1 className="day cl text-3xl  font-extrabold">
                          {day}
                        </h1>
                        <p>{month}</p>
                        <p>{year}</p>
                      </div>
                      <div className="top-section bg-sorta-blue lg:pl-32 max-md:pl-24 py-4 rounded-tr-lg rounded-tl-lg">
                        <p
                          className={`text-white  lg:text-lg max-md:text-lg font-extrabold`}
                        >
                          Top Story
                        </p>
                        <h3
                          className={`text-tetiary  lg:text-xl max-md:text-lg font-extrabold`}
                        >
                          Title: {topStory?.title}
                        </h3>
                      </div>
                        <Link to={`/news/${topStory?.slug}`}>

                      <div className="top-story-img">
                        <img
                          src={`${import.meta.env.VITE_FULL_URL}/${import.meta.env.VITE_IMAGE_URL}/${topStory?.banner}`}
                          className="w-full h-[320px] object-cover"
                        />
                      </div>
                        </Link>

                      <div className="bottom-section bg-sorta-blue py-1 pl-10 rounded-br-lg rounded-bl-lg">
                        <TopStoryShare slug={topStory?.slug} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <h1 className={` text-xl text-tetiary uppercase mb-3 px-3`}>
                    new stories
                  </h1>
                  <div className="blogs-scroll px-3 lg:h-[200px] overflow-y-scroll">
                    {blogs?.map((i, index) =>
                      index == 0 ? (
                        <BlogItem
                          title={i.title}
                          body={i.description}
                          string={" rounded-tr-lg rounded-tl-lg"}
                          slug={i.slug}
                        />
                      ) : index == blogs.length - 1 ? (
                        <BlogItem
                          title={i.title}
                          body={i.description}
                          string={" rounded-br-lg rounded-bl-lg"}
                          slug={i.slug}
                        />
                      ) : (
                        <BlogItem
                          title={i.title}
                          body={i.description}
                          string={""}
                          slug={i.slug}
                        />
                      )
                    )}
                  </div>

                  <div className="newsletter-section bg-sorta-blue px-3 mx-3 pt-3 pb-8 rounded-lg mt-5">
                    <div className="flex items-center mb-1 gap-3">
                      <img src={Bell} alt="" className="w-[24px] h-[24px]" />
                      <h3 className={` text-tetiary text-lg`}>Get Notified</h3>
                    </div>

                    <p className={` text-white`}>
                      Add your email to recieve notifications for game releases,
                      promotions and more!
                    </p>

                    <BlogNewsletter />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Blog;
