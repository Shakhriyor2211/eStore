import axios from "axios";
import Rate from "rc-rate/lib/Rate";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import "rc-rate/assets/index.css";
import { trash, update } from "../../utils/icons";

function Detail() {
  let id = useParams().urlId;
  const [data, setData] = useState(null);
  const [checkRequest, setCheckRequest] = useState(false);
  const navigate = useNavigate("");
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      {data && (
        <section>
          <div className="bg-white dark:bg-gray-800">
            <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 gap-x-20 lg:py-16 lg:flex-row lg:items-center">
              <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img
                  className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
                  src={data.imageURL}
                  alt="glasses photo"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                  <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                    {data.title}
                  </h1>

                  <div className="mt-8 space-y-5 ">
                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span className="mx-2"> {data.club}</span>
                    </p>

                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span className="mx-2">{data.location}</span>
                    </p>

                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span className="mx-2">Capacity {data.capacity}</span>
                    </p>
                    <div>
                      <Rate
                        count={5}
                        defaultValue={data.rating}
                        allowHalf={true}
                        disabled={true}
                        style={{
                          fontSize: "30px",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className=" w-full mt-2 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                  <form className="flex flex-col lg:flex-row">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                    />

                    <button
                      type="button"
                      className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                    >
                      Join Us
                    </button>
                  </form>
                </div>
                <div className="my-6 space-x-2 flex items-center">
                  <button
                    className="bg-red-500 transform hover:scale-95 h-12 px-8 rounded text-white flex items-center"
                    onClick={() => {
                      setCheckRequest(true);
                    }}
                  >
                    {trash}
                  </button>
                  <Link
                    to={`/detail/update/${id}`}
                    className="bg-indigo-600 transform hover:scale-95  h-12 px-8 rounded text-white flex items-center"
                  >
                    {update}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {checkRequest && (
            <div className="animation absolute inset-0 bg-black bg-opacity-30">
              <div className="bg-blue-700 absolute top-1/3 right-1/3 w-1/3 py-20 shadow-md text-center space-y-4 rounded z-50 text-white">
                <p className="text-2xl font-bold">Are you sure?</p>
                <div className="text-xl space-x-4">
                  <button
                    onClick={() => {
                      setCheckRequest(false);
                    }}
                  >
                    No
                  </button>
                  <button
                    onClick={() => {
                      axios
                        .delete(`http://localhost:3000/products/${id}`)
                        .then(() => {
                          navigate("/");
                        });
                    }}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* <div className="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8">
          <div className="lg:w-72 px-6 lg:px-0">
            <div className="p-2 bg-blue-600 rounded-lg shadow-lg sm:p-3">
              <div className="flex flex-wrap items-center justify-between">
                <Link
                  target="_blank"
                  href="https://www.buymeacoffee.com/khatabwedaa"
                  className="flex items-center flex-1 w-0"
                >
                  <span className="flex p-2 bg-blue-800 rounded-lg">
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.12954 3.00772C5.48563 2.38457 6.14831 2 6.86603 2H17.134C17.8517 2 18.5144 2.38457 18.8704 3.00772L20.0133 5.00772C20.6612 6.14163 20.0618 7.51107 18.9235 7.89532C18.9276 7.97661 18.9269 8.0591 18.9209 8.14249L18.0638 20.1425C17.989 21.1891 17.1181 22 16.0689 22H7.9311C6.88182 22 6.01094 21.1891 5.93618 20.1425L5.07904 8.14249C5.07308 8.0591 5.07231 7.97661 5.07645 7.89531C3.93813 7.51105 3.33874 6.14162 3.98668 5.00772L5.12954 3.00772ZM7.07396 8L7.28824 11H16.7117L16.926 8H7.07396ZM7.71681 17L7.9311 20H16.0689L16.2831 17H7.71681ZM18.2768 6L17.134 4L6.86603 4L5.72317 6H18.2768Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>

                  <p className="ml-3 font-medium tracking-wide text-white truncate">
                    By me a coffee
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        </section>
      )}
    </Layout>
  );
}

export default Detail;
