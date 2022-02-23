import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput, { FormSelect } from "../../components/form";

import Layout from "../../components/Layout";

function CreateStadium() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [club, setClub] = useState("");
  const [couch, setCouch] = useState("");
  const [image, setImage] = useState("");
  const [capacity, setCapacity] = useState("");
  const [openDate, setOpenDate] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(1);

  const [errOpenDate, setErrOpenDate] = useState("");
  const [errPrice, setErrPrice] = useState("");
  const [errCapacity, setErrCapacity] = useState("");
  const [errTitle, setErrTitle] = useState("");
  const [errLocation, setErrLocation] = useState("");
  const [errClub, setErrClub] = useState("");
  const [errImage, setErrImage] = useState("");

  const throwHome = useNavigate("");

  return (
    <Layout>
      <div className="px-4">
        <form className="max-w-3xl mx-auto shadow my-10 p-8 rounded ">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <FormInput
                id="title"
                title={"Title"}
                type={"text"}
                value={title}
                valueState={setTitle}
                hint={"Kamp Nou"}
              />
              {errTitle && <p className="absolute text-red-500">{errTitle}</p>}
            </div>
            <div>
              <FormInput
                id="location"
                title={"Location"}
                type={"text"}
                value={location}
                valueState={setLocation}
                hint={"Tashkent, Uzbekistan"}
              />
              {errLocation && (
                <p className="absolute text-red-500">{errLocation}</p>
              )}
            </div>
            <div>
              <FormInput
                id="club"
                title={"Club"}
                type={"text"}
                value={club}
                valueState={setClub}
                hint={"Pakhtakor"}
              />
              {errClub && <p className="absolute text-red-500">{errClub}</p>}
            </div>
            <div>
              <FormInput
                id="image"
                title={"ImageURL"}
                type={"text"}
                value={image}
                valueState={setImage}
                hint={"https://image.jpg"}
              />
              {errImage && <p className="absolute text-red-500">{errImage}</p>}
            </div>
            <div>
              <FormInput
                id="capacity"
                title={"Capacity"}
                type={"Number"}
                value={capacity}
                valueState={setCapacity}
                hint={"1234"}
              />
              {errCapacity && (
                <p className="absolute text-red-500">{errCapacity}</p>
              )}
            </div>
            <div>
              <FormInput
                id="price"
                title={"Price"}
                type={"Number"}
                value={price}
                valueState={setPrice}
                hint={"1234"}
              />
              {errPrice && <p className="absolute text-red-500">{errPrice}</p>}
            </div>
            <div>
              <FormInput
                id="date"
                title={"Opened"}
                type={"Date"}
                value={openDate}
                valueState={setOpenDate}
              />
              {errOpenDate && (
                <p className="absolute text-red-500">{errOpenDate}</p>
              )}
            </div>
            <FormSelect
              id="rating"
              title={"Rating"}
              value={[rating, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]}
              valueState={setRating}
            />
          </div>
          <div className="flex justify-end items-center gap-2 mr-8 my-4 font-semibold bana">
            <button
              className="bg-gray-300 transform hover:scale-95 hover:bg-gray-200 py-2 px-4 rounded text-black"
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/");
              }}
            >
              Cancel
            </button>
            <button
              className="bg-indigo-600 transform hover:scale-95 hover:bg-indigo-500 py-2 px-4 rounded text-white"
              onClick={(e) => {
                e.preventDefault();

                if (
                  title === "" ||
                  location === "" ||
                  openDate === "" ||
                  club === "" ||
                  image === "" ||
                  price === "" ||
                  capacity === ""
                ) {
                  if (title === "") {
                    setErrTitle("Required line");
                  }
                  if (location === "") {
                    setErrLocation("Required line");
                  }
                  if (openDate === "") {
                    setErrOpenDate("Required line");
                  }
                  if (club === "") {
                    setErrClub("Required line");
                  }
                  if (image === "") {
                    setErrImage("Required line");
                  }
                  if (capacity <= 0) {
                    if (capacity === "") {
                      setErrCapacity("Required line");
                    } else {
                      setErrCapacity("Capacity should be greater than 0");
                    }
                  }
                  if (price <= 1000) {
                    if (price === "") {
                      setErrPrice("Required line");
                    } else {
                      setErrPrice("Price should be greater than 1000");
                    }
                  }
                  return;
                }
                if (openDate) {
                }
                axios
                  .post("http://localhost:3000/products", {
                    imageURL: image,
                    title: title,
                    capacity: Number(capacity),
                    location: location,
                    opened: openDate,
                    price: Number(price),
                    rating: rating,
                    club: club,
                  })
                  .then(() => {
                    throwHome("/");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default CreateStadium;
