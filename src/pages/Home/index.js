import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ProductCard from "../../components/productCard";
import axios from "axios";
import { MutatingDots } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:3000/products")
        .then(function (response) {
          setData(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }, 2000);
  }, []);
  return (
    <>
      {data ? (
        <Layout>
          <div className="grid gap-3 sm:gap-4  sm:grid-cols-2 lg:grid-cols-3 pt-6 pb-10 px-4 place-content-center mt-4 ">
            {data.map((stadium) => {
              return (
                <Link
                  to={`/detail/${stadium.id}`}
                  className="relative sm:min-w-fit bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 card"
                >
                  <ProductCard
                    key={stadium.id}
                    stadium={stadium}
                    btn={"Add to cart"}
                  />
                </Link>
              );
            })}
          </div>
        </Layout>
      ) : (
        <div className="h-screen grid place-items-center">
          <MutatingDots
            height="100"
            width="100"
            color="#333"
            ariaLabel="loading"
          />
        </div>
      )}
    </>
  );
};

export default Home;
