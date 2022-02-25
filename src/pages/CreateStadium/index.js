import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormSelect } from "../../components/form";
import Layout from "../../components/Layout";
import FormInput from "../../components/form";
function CreateStadium() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [club, setClub] = useState("");
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
  const selectStyle =
    "border-2 border-gray-200 px-2 h-10 sm:h-12 w-24 outline-none focus:border-indigo-400 rounded text-sm";
  const inputStyle =
    "border-2 border-gray-200 px-2 h-10 sm:h-12 w-full outline-none focus:border-indigo-400 rounded";
  const dateFormat = (date) => {
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);

    if (month === "01") {
      month = "January";
    } else if (month === "02") {
      month = "February";
    } else if (month === "03") {
      month = "March";
    } else if (month === "04") {
      month = "April";
    } else if (month === "05") {
      month = "May";
    } else if (month === "06") {
      month = "June";
    } else if (month === "07") {
      month = "July";
    } else if (month === "08") {
      month = "August";
    } else if (month === "09") {
      month = "September";
    } else if (month === "10") {
      month = "October";
    } else if (month === "11") {
      month = "November";
    } else if (month === "12") {
      month = "December";
    }
    date = `${month} ${day}, ${year}`;
    return date;
  };
  return (
    <Layout>
      <div className="px-4">
        <form className="max-w-3xl mx-auto shadow my-10 p-8 rounded ">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <FormInput
                styleClass={inputStyle}
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
                styleClass={inputStyle}
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
                styleClass={inputStyle}
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
                styleClass={inputStyle}
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
                styleClass={inputStyle}
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
                styleClass={inputStyle}
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
                styleClass={inputStyle}
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
              styleClass={selectStyle}
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
                  price < 1000 ||
                  capacity <= 0
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

                  if (capacity === "") {
                    setErrCapacity("Required line");
                  } else if (capacity <= 0) {
                    setErrCapacity("Capacity should be greater than 0");
                  }

                  if (price === "") {
                    setErrPrice("Required line");
                  } else if (price < 1000) {
                    setErrPrice("Price should be greater than 1000");
                  }
                  return;
                }

                axios
                  .post("http://localhost:3000/products", {
                    imageURL: image.trim(),
                    title: title.trim(),
                    capacity: Number(capacity),
                    location: location.trim(),
                    opened: dateFormat(openDate),
                    price: Number(price),
                    rating: rating,
                    club: club.trim(),
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
