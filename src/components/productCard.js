import { Link } from "react-router-dom";
import { star, halfStar, cart, detail, trash } from "../utils/icons";
import { ProductContext } from "../utils/ProductContext";
import { useContext } from "react";

function ProductCard({ stadium, deleteBtn, btn }) {
  const { setCartItem, cartItem } = useContext(ProductContext);
  const length = Math.floor(stadium.rating);
  const createStar = [];

  for (let i = 0; i < length; i++) {
    createStar.push(star);
  }
  return (
    <div className="relative sm:min-w-fit bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 card">
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
        <div className="flex items-center my-2.5">
          {createStar.map((rating, index) => (
            <span key={index}>{rating}</span>
          ))}
          {stadium.rating - length === 0.5 && halfStar}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {stadium.rating}
          </span>
        </div>
        <p className="text-lg font-semibold text-gray-900 dark:text-white truncate">
          ${stadium.price}
        </p>
        <div className="flex flex-col my-1 gap-2">
          <button
            className="text-white flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              if (cartItem.some((card) => card.id === stadium.id)) {
                return;
              }
              const items = [...cartItem];
              items.push(stadium);
              setCartItem(items);
            }}
          >
            <span className="inline-block mr-2 w-5 h-5">{cart}</span>
            <span>{btn}</span>
          </button>
          {deleteBtn && (
            <button
              className="text-white flex justify-center items-center gap-x-1 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              onClick={() => {
                setCartItem(
                  cartItem.filter((items) => items.id !== stadium.id)
                );
              }}
            >
              {trash}
              <span>Delete</span>
            </button>
          )}
          <button
            className={
              "focus:ring-4 flex items-center justify-center gap-1 focus:ring-gray-300 hover:bg-gray-500 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            }
          >
            {detail} <Link to={`/detail/${stadium.id}`}>Detail</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
