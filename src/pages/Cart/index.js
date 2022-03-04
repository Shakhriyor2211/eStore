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
            <ProductCard
              key={cartItem.id}
              stadium={product}
              deleteBtn={true}
              btn={"Buy"}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export default Cart;
