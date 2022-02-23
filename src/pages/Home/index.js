import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ProductCard from "../../components/productCard";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      {data && (
        <>
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
              return (
                <ProductCard
                  key={stadium.id}
                  title={stadium.title}
                  image={stadium.imageURL}
                  capacity={stadium.capacity}
                  location={stadium.location}
                  opened={stadium.opened}
                  price={stadium.price}
                  rating={stadium.rating}
                  id={stadium.id}
                />
              );
            })}
          </div>
        </>
      )}
    </Layout>
  );
};

export default Home;
