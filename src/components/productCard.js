import { Link } from "react-router-dom";
import { star, halfStar } from "../utils/icons";

function ProductCard(props) {
  const length = Math.floor(props.rating);
  const createStar = [];
  for (let i = 0; i < length; i++) {
    createStar.push(star);
  }
  return (
    <Link
      to={`detail/${props.id}`}
      className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 card"
    >
      <div className="relative">
        <img
          className=" rounded-t-lg w-full h-full object-cover aspect-video"
          src={props.image}
          alt="product image"
        />
        <div className="absolute text-white left-2 image-detail">
          <p>
            <strong>Location:</strong> {props.location}
          </p>

          <p>
            <strong>Opened:</strong> {props.opened}
          </p>
        </div>
      </div>
      <div className="px-5 py-5">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h3>
        </div>
        <div className="flex items-center my-2.5">
          {createStar.map((rating) => rating)}
          {props.rating - length === 0.5 && halfStar}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {props.rating}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            ${props.price}
          </span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block mr-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Buy
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
