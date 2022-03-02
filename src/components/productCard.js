import { Link } from "react-router-dom";
import { star, halfStar, cart } from "../utils/icons";
import { ProductContext } from "../utils/ProductContext";
import { useContext, useState } from "react";

function ProductCard({ stadium, deleteBtn }) {
  const { setCartItem, cartItem } = useContext(ProductContext);
  const length = Math.floor(stadium.rating);
  const createStar = [];

  for (let i = 0; i < length; i++) {
    createStar.push(star);
  }
  return (
    <div className="relative max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 card">
      <Link to={`detail/${stadium.id}`}>
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
            <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
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
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              ${stadium.price}
            </span>
          </div>
        </div>
      </Link>
      <button
        className={
          deleteBtn
            ? "absolute right-4 bottom-16 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            : "absolute right-4 bottom-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        }
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
        Buy
      </button>
      {deleteBtn && (
        <div className="p-2">
          <button
            className="py-2 bg-red-500 text-white w-full rounded"
            onClick={() => {
              setCartItem(cartItem.filter((items) => items.id !== stadium.id));
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
