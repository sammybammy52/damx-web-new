import { useState, useEffect } from "react";
import Damx from "../../assets/damx.png";
import NavBar from "../../components/General/NavBar";
import TopStoryShare from "../../components/General/TopStoryShare";
import Footer from "../../components/General/Footer";
import Loading from "../../components/Loading/Loading";
import { useDataContext } from "../../context/DataContext";
import { useParams } from "react-router-dom";
import BlogSlider from "../../components/General/BlogSlider";

const videoUrl = "https://www.youtube.com/embed";
const thumb = (videoId) => {
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
};

const BlogDetails = () => {
  const { slug } = useParams();
  const { getRequest } = useDataContext();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const getData = async () => {
    setLoading(true);
    const result = await getRequest(`blog/${slug}`);
    if (result) {
      setData(result);
    } else {
      toast.error("Unable to fetch data");
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  const currentDate = new Date(data?.publication_date);

  // Define options for formatting the date
  const options = { day: "numeric", month: "short", year: "numeric" };

  // Format the date
  const formattedDate = currentDate.toLocaleString("en-US", options);

  // Extract the month, day, and year separately
  const parts = formattedDate.split(" ");
  const month = parts[0];
  const day = parseInt(parts[1]);
  const year = parseInt(parts[2]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <NavBar />

          <div className={`bg-sorta-green relative max-md:pb-20`}>
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2  lg:px-[100px] lg:py-[90px] shadow-xl  max-md:p-3">
                <div className=" bg-black lg:rounded-tl-lg lg:rounded-bl-lg lg:px-6 lg:py-8 max-md:p-8 max-md:rounded-lg relative">
                  <div className="lg:max-h-[55vh] overflow-auto lg:px-4 lg:mb-2">
                    <div className="">
                      <h1
                        className={` text-tetiary text-3xl max-md:text-2xl max-md:mt-4`}
                      >
                        {data?.title}
                      </h1>
                      <div className="flex items-center space-x-1 my-6">
                        <img
                          className="rounded-full"
                          src={Damx}
                          width={60}
                          height={60}
                          alt
                        />
                        <div className="font-medium text-white">
                          <div className="font-semibold text-xl text-white">
                            {data?.author}
                          </div>
                          <div className="text-sm ">
                            {data?.publication_date}
                          </div>
                        </div>
                      </div>

                      {
                        data && <div
                        dangerouslySetInnerHTML={{
                          __html: JSON.parse(data?.html),
                        }}
                        className={`blog-html text-white`}
                      ></div>
                      }
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-10">
                    <TopStoryShare slug={data?.slug} />
                  </div>
                </div>

                <div className="rounded-tr-lg rounded-br-lg lg:h-full">
                  <BlogSlider media={data?.images} videos={data?.videos} />
                  {/* <Image src={Img} alt="" className="rounded-tr-lg rounded-br-lg h-full" /> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bg-sorta-green min-h-[85vh] flex items-center max-md:px-2">
          <div className=" max-w-[1024px] lg:min-w-[1024px] mx-auto">
            <div className="bg-sorta-blue my-10">
              <div className="relative">
                 <img
                src={`${process.env.NEXT_PUBLIC_FULL_URL}/${process.env.NEXT_PUBLIC_IMAGE_URL}/${data?.banner}`}
                alt=""
                className="w-full h-[300px] object-cover"
              /> 
              <div className={`absolute  bg-secondary text-tetiary p-4 rounded text-center bottom-[-60px] max-md:bottom-[-40px] right-[100px] max-md:right-[40px]`}>
              <h1 className="day cl text-5xl max-md:4xl  font-extrabold">{day}</h1>
                    <p>{month}</p>
                    <p>{year}</p>
              </div>
              </div>
              
              <div className="p-8">
                <h1 className={` text-tetiary text-3xl max-md:text-2xl max-md:mt-4`}>
                  {data?.title}
                </h1>
                <div className="flex items-center space-x-1 my-6">
                  <Image
                    className="rounded-full"
                    src={Damx}
                    width={60}
                    height={60}
                    alt
                  />
                  <div className="font-medium dark:text-white">
                    <div className="font-semibold text-xl">{data?.author}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {data?.publication_date}
                    </div>
                  </div>
                </div>
  
                <div
                  dangerouslySetInnerHTML={{ __html: JSON.parse(data?.html) }}
                  className={`blog-html text-white`}
                ></div>
              </div>
            </div>
          </div>
        </div> */}
          <Footer />
        </div>
      )}
      <style jsx>{`
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          height: 67vh;
          flex: 0 0 100%;
          min-width: 0;
          display: flex;
          position: relative;
          justify-content: center;
          align-items: center;
        }

        /* @media screen and (max-width: 768px) {
          .embla {
            height: 50vh;
          }
        }
         */

        .home-content-btn {
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
        }

        .slider-bg {
          position: absolute;
          left: 0px;
          top: 0px;
          width: 100%;
          height: 100%;
          z-index: -1;
          -webkit-filter: blur(6px); /* Safari 6.0 - 9.0 */
          filter: blur(6px);
          object-fit: cover;
        }
      `}</style>
    </>
  );
};

export default BlogDetails;
