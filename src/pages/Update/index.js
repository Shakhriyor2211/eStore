import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormSelect } from "../../components/form";
import Layout from "../../components/Layout";
import FormInput from "../../components/form";
function Update() {
  const params = useParams().urlId;
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [club, setClub] = useState("");
  const [image, setImage] = useState("");
  const [capacity, setCapacity] = useState("");
  const [openDate, setOpenDate] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(1);

  const [data, setData] = useState(false);

  const [titleHint, setTitleHint] = useState("");
  const [capacityHint, setCapacityHint] = useState("");
  const [locationHint, setLocationHint] = useState("");
  const [clubHint, setClubHint] = useState("");
  const [imageHint, setImageHint] = useState("");
  const [priceHint, setPriceHint] = useState("");

  const [errOpenDate, setErrOpenDate] = useState("");
  const [errPrice, setErrPrice] = useState("");
  const [errCapacity, setErrCapacity] = useState("");
  const [errTitle, setErrTitle] = useState("");
  const [errLocation, setErrLocation] = useState("");
  const [errClub, setErrClub] = useState("");
  const [errImage, setErrImage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      axios.get(`http://localhost:3000/products/${params}`).then((response) => {
        setData(true);
        setTitleHint(response.data.title);
        setPriceHint(response.data.price);
        setCapacityHint(response.data.capacity);
        setLocationHint(response.data.location);
        setImageHint(response.data.imageURL);
        setClubHint(response.data.club);
      });
    }, 3000);
  }, []);
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
    <>
      {data && (
        <Layout>
          <div className="px-4">
            <form className="max-w-3xl mx-auto lg:shadow my-10 p-8 rounded ">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <FormInput
                    styleClass={inputStyle}
                    id="title"
                    title={"Title"}
                    type={"text"}
                    value={title}
                    valueState={setTitle}
                    hint={titleHint}
                  />
                  {errTitle && (
                    <p className="absolute text-red-500">{errTitle}</p>
                  )}
                </div>
                <div>
                  <FormInput
                    styleClass={inputStyle}
                    id="location"
                    title={"Location"}
                    type={"text"}
                    value={location}
                    valueState={setLocation}
                    hint={locationHint}
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
                    hint={clubHint}
                  />
                  {errClub && (
                    <p className="absolute text-red-500">{errClub}</p>
                  )}
                </div>
                <div>
                  <FormInput
                    styleClass={inputStyle}
                    id="image"
                    title={"ImageURL"}
                    type={"text"}
                    value={image}
                    valueState={setImage}
                    hint={imageHint}
                  />
                  {errImage && (
                    <p className="absolute text-red-500">{errImage}</p>
                  )}
                </div>
                <div>
                  <FormInput
                    styleClass={inputStyle}
                    id="capacity"
                    title={"Capacity"}
                    type={"Number"}
                    value={capacity}
                    valueState={setCapacity}
                    hint={capacityHint}
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
                    hint={priceHint}
                  />
                  {errPrice && (
                    <p className="absolute text-red-500">{errPrice}</p>
                  )}
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
              <div className="flex flex-col md:flex-row md:justify-end md:items-center  gap-2 my-8 font-semibold">
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
                      .put(`http://localhost:3000/products/${params}`, {
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
                        throwHome(`/detail/${params}`);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  Update
                </button>
                <button
                  className="bg-gray-300 transform hover:scale-95 hover:bg-gray-200 py-2 px-4 rounded text-black md:-order-1"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.replace(`/detail/${params}`);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Layout>
      )}
    </>
  );
}

export default Update;
