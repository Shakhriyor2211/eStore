import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ProductCard from "../../components/productCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";

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
          <div className="flex sm:justify-between items-center mt-10  px-4">
            <h1 className="text-xl md:text-4xl text-indigo-700">Stadiums</h1>
            <Link
              to="/createStadium"
              className="text-2xl md:text-3xl text-white px-6  pb-2 rounded bg-indigo-700"
            >
              +
            </Link>
          </div>
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 pt-6 pb-10 px-4 place-content-center">
            {data.map((stadium) => {
              return <ProductCard key={stadium.id} stadium={stadium} />;
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
