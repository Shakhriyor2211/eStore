import { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { ProductContext } from "../utils/ProductContext";

function ProductCard({ stadium, btnValue }) {
  const { cartItem, setCartItem } = useContext(ProductContext);
  return (
    <>
      <div className="relative">
        <img
          className=" rounded-t-lg w-full h-full object-cover aspect-video"
          src={stadium.imageURL}
          alt="product image"
        />
        <div className="absolute text-white left-2 image-detail">
          <p>
            <strong>Location:</strong> {stadium.location}
          </p>

          <p>
            <strong>Opened:</strong> {stadium.opened}
          </p>
        </div>
      </div>
      <div className="px-5 py-5">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white truncate">
            {stadium.title}
          </h3>
        </div>
        <div className="flex my-1 gap-x-4">
          <ReactStars
            count={5}
            color={"#fff"}
            value={stadium.rating}
            size={30}
            isHalf={true}
            activeColor={"#0369a1"}
            edit={false}
          />
          <p className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800  inline-block self-center">
            {stadium.rating % 1 === 0 ? `${stadium.rating}.0` : stadium.rating}
          </p>
        </div>
        <p className="text-lg font-semibold text-gray-900 dark:text-white truncate">
          ${stadium.price}
        </p>
        {btnValue && (
          <div className="flex gap-2 justify-end mt-4">
            <button
              className="bg-red-600 transform hover:scale-95 py-2 px-8 rounded text-white"
              onClick={() => {
                const newValue = cartItem.filter(
                  (items) => items.id !== stadium.id
                );
                setCartItem(newValue);
              }}
            >
              Delete
            </button>
            <button className="bg-indigo-600 transform hover:scale-95 py-2 px-8 rounded text-white">
              {btnValue}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductCard;
