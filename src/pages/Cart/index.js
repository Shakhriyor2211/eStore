import Layout from "../../components/Layout";
import { ProductContext } from "../../utils/ProductContext";
import ProductCard from "../../components/productCard";
import { useContext } from "react";

function Cart() {
  const { cartItem } = useContext(ProductContext);
  return (
    <Layout>
      <div className="grid gap-3 sm:gap-x-4 sm:grid-cols-2 md:grid-cols-3 pt-6 pb-10 px-4 place-content-center">
        {cartItem.map((product) => {
          return (
            <div className="relative sm:min-w-fit bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 card">
              <ProductCard
                key={cartItem.id}
                stadium={product}
                btnValue={"Buy"}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Cart;
