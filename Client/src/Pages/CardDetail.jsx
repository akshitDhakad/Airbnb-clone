import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
// import products from "../data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ImageGrid from "./ImageGrid";
import Calender from "./Calender";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Product, setProduct] = useState([]);
  const [showGrid, setshowGrid] = useState(false);
  const [adultCount, setadultCount] = useState(1);
  const [childerenCount, setchilderenCount] = useState(0);
  const [petsCount, setpetsCount] = useState(0);
  const [price, setPrice] = useState(0);


  //************************ date handler section ******************************//

  const [checkIn,setCheckIn] = useState("");
  const [checkOut,setCheckOut] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/place/${id}`);
        setProduct(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  //************* price section *******************//
  function calculateTotalPrice() {
    const basePrice = Product.details.price;
    let totalPrice = parseFloat(basePrice);

    if (adultCount > 1) {
      totalPrice += (parseFloat(basePrice) * (adultCount * 3)) / 100;
    }
    if (childerenCount > 1) {
      totalPrice += (parseFloat(basePrice) * (childerenCount * 2)) / 100;
    }
    if (petsCount > 1) {
      totalPrice += (parseFloat(basePrice) * petsCount) / 100;
    }
    if (adultCount > 1 || childerenCount > 1 || petsCount > 1) {
      totalPrice +=
        (parseFloat(basePrice) * (adultCount * 3)) / 100 +
        (parseFloat(basePrice) * (childerenCount * 3)) / 100 +
        (parseFloat(basePrice) * petsCount) / 100;
    }

    return totalPrice.toFixed(2);
  }

  useEffect(() => {
    if (Product.details) {
      const calculatedPrice = calculateTotalPrice();
      setPrice(calculatedPrice);
    }
  }, [Product.details, adultCount, childerenCount, petsCount]);
  //******************  form handler ******************//

  function handlePrice(e) {
    e.preventDefault();

    // Check if any of the fields are empty, null, or undefined
    if (!checkOut || !checkIn || !Product || !adultCount) {
      // Show an alert or perform some error handling
      alert("Please fill in all required fields.");
    } else {
      // All required fields are filled
      const check_Out = new Date(checkOut);
      const check_In = new Date(checkIn);
      const timeDiffMilliseconds = check_Out - check_In;
      const daysDiff = timeDiffMilliseconds / (1000 * 60 * 60 * 24);

      if (daysDiff <= 0) {
        alert("Check-out date must be after check-in date.");
      } else {
        // All checks passed, proceed with navigation
        const data = {
          date: [checkOut, checkIn],
          guests: adultCount + (childerenCount || 0),
          product: Product,
          daysDiff: daysDiff,
          price: price,
        };

        navigate("/reserve-place", { state: data });
      }
    }
  }

  // function handlePrice(e) {
  //   e.preventDefault();
  //   const check_Out = new Date(checkOut);
  //   const check_In = new Date(checkIn);
  //   const timeDiffMilliseconds = check_Out - check_In;
  //   const daysDiff = timeDiffMilliseconds / (1000 * 60 * 60 * 24);
    
  //   const data = {
  //     data:[checkOut,checkIn],
  //     guests: adultCount + childerenCount,
  //     product: Product,
  //     daysDiff: daysDiff,
  //   };
  //   navigate("/reserve-place", { state: data });
  // }

  return (
    <>
      <Navbar />
      {showGrid ? (
        <ImageGrid
          showGrid={showGrid}
          setshowGrid={setshowGrid}
          urls={Product.imgURLs}
        />
      ) : null}
      <div style={showGrid ? { display: "none" } : null} className="bg-white">
        <div className="lg:px-20 sm:px-1 py-5 ">
          <h2 className="text-2xl font-semibold">{Product.title}</h2>
          <p className="font-normal underline">{Product.address}</p>
          {/*********** gallery grid**********/}
          <div className="my-10 grid lg:grid-cols-2 gap-2 rounded-2xl overflow-hidden">
            <div className="">
              {Product.imgURLs && (
                <img
                  src={`http://localhost:3000/uploads/${Product.imgURLs[0]}`}
                  alt="thumbnail-Img"
                  className="h-full w-full object-cover object-center"
                />
              )}
            </div>
            <div className="relative grid grid-cols-2 gap-2">
              <div>
                {Product.imgURLs && (
                  <img
                    src={`http://localhost:3000/uploads/${Product.imgURLs[1]}`}
                    alt="Img-1"
                    className="h-full w-full object-cover object-center"
                  />
                )}
              </div>
              <div>
                {Product.imgURLs && (
                  <img
                    src={`http://localhost:3000/uploads/${Product.imgURLs[2]}`}
                    alt="Img-1"
                    className="h-full w-full object-cover object-center"
                  />
                )}
              </div>
              <div>
                {Product.imgURLs && (
                  <img
                    src={`http://localhost:3000/uploads/${Product.imgURLs[3]}`}
                    alt="Img-1"
                    className="h-full w-full object-cover object-center"
                  />
                )}
              </div>
              <div>
                {Product.imgURLs && (
                  <img
                    src={`http://localhost:3000/uploads/${Product.imgURLs[4]}`}
                    alt="Img-1"
                    className="h-full w-full object-cover object-center"
                  />
                )}
              </div>
              <div
                className=" flex absolute border border-black bg-gray-100 rounded-md right-10 bottom-10 px-3 py-1 gap-2 items-center cursor-pointer"
                onClick={() => setshowGrid(!showGrid)}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                </span>
                <span className="text-sm">show all photos</span>
              </div>
            </div>
          </div>

          {/************ descpition section ************/}
          <div className="mt-10 ">
            <h3 className="font-semibold text-xl">
              Hotel hosted by Akshit Dhakad
            </h3>
            {Product.details && (
              <p>
                <span>{Product.details.guests} guests</span>&nbsp;
                <span>{Product.details.bedrooms} bedroom</span>&nbsp;
                <span>{Product.details.beds} beds</span>&nbsp;
                <span>2 bathrooms</span>
              </p>
            )}
          </div>
          {/************ details section ************/}
          <div className="my-10 grid lg:grid-cols-3 gap-10 p-1">
            <div className="lg:col-span-2">
              <hr />
              <div className="my-5 flex gap-5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                </span>
                <div>
                  <h5 className="font-semibold">
                    {Product.extras && Product.extras.includes("parking") ? (
                      <span>Parking for free</span>
                    ) : (
                      <span style={{ textDecoration: "line-through" }}>
                        Parking at fair price
                      </span>
                    )}
                  </h5>
                  <p className="text-gray-500">
                    This is one of the few places in the area with free parking.
                  </p>
                </div>
              </div>
              <div className="my-5  flex gap-5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                </span>
                <div>
                  <h5 className="font-semibold">
                    Free cancellation before 31 Aug.
                  </h5>
                </div>
              </div>
              <hr className="my-5" />
              <div>
                <p className="text-gray-900">{Product.description}</p>
              </div>
              <hr className="my-5" />
              <div className="my-10">
                <h5 className="text-xl font-semibold">
                  What this place offers
                </h5>
                <div className="my-5 grid grid-cols-2 gap-x-40 gap-y-5">
                  <div className="flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </span>
                    <span>Lake view</span>
                  </div>
                  <div className="flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                        />
                      </svg>
                    </span>
                    <span>
                      {Product.extras && Product.extras.includes("wifi") ? (
                        <span>Wifi</span>
                      ) : (
                        <span style={{ textDecoration: "line-through" }}>
                          Wifi
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        />
                      </svg>
                    </span>
                    <span>
                      {Product.extras && Product.extras.includes("radio") ? (
                        <span>Radio</span>
                      ) : (
                        <span style={{ textDecoration: "line-through" }}>
                          Radio
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                        />
                      </svg>
                    </span>
                    <span>
                      {Product.extras && Product.extras.includes("tv") ? (
                        <span>Tv</span>
                      ) : (
                        <span style={{ textDecoration: "line-through" }}>
                          Tv
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>
                    </span>

                    <span>
                      {Product.extras && Product.extras.includes("parking") ? (
                        <span>Free parking on premises</span>
                      ) : (
                        <span style={{ textDecoration: "line-through" }}>
                          parking
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                        />
                      </svg>
                    </span>
                    <span>
                      {Product.extras && Product.extras.includes("ac") ? (
                        <span>Ac</span>
                      ) : (
                        <span style={{ textDecoration: "line-through" }}>
                          Ac
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </span>
                    <span>
                      {Product.extras && Product.extras.includes("cameras") ? (
                        <span>Cameras</span>
                      ) : (
                        <span style={{ textDecoration: "line-through" }}>
                          Cameras
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <span>
                      {Product.extras &&
                      Product.extras.includes("assistance") ? (
                        <span>Assistance</span>
                      ) : (
                        <span style={{ textDecoration: "line-through" }}>
                          Assistance
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <hr className="my-5" />
              <div className="my-10">
                <h5 className="text-xl font-semibold">Select check-in date</h5>
                <p className="my-1 text-gray-500">
                  Add your travel dates for exact pricing
                </p>
                <div>
                  <Calender setCheckIn={setCheckIn} setCheckOut={setCheckOut} />
                </div>
              </div>
              <hr className="my-5" />
              <div className="my-10">
                <h5 className="text-xl font-semibold">
                  {Product.address && <span>{Product.address}</span>}
                </h5>
                <p className="my-1 text-gray-500">{Product.extraDetails}</p>
              </div>
            </div>
            {/* pricing section */}
            <div className="sticky top-0 right-0 sm:p-20 lg:p-0">
              <form onSubmit={handlePrice}>
                <div className="p-5 rounded-xl shadow-xl border ">
                  <div className="flex justify-center items-end gap-1">
                    <h4 className="font-bold text-3xl">
                      {/* {Product.details && (
                        <span className="text-red-500">
                          ₹
                          {(() => {
                            const basePrice = Product.details.price;
                            let totalPrice = parseFloat(basePrice); // Convert to number

                            if (adultCount > 1) {
                              totalPrice +=
                                (parseFloat(basePrice) * (adultCount * 3)) /
                                100;
                            }
                            if (childerenCount > 1) {
                              totalPrice +=
                                (parseFloat(basePrice) * (childerenCount * 2)) /
                                100;
                            }
                            if (petsCount > 1) {
                              totalPrice +=
                                (parseFloat(basePrice) * petsCount) / 100;
                            }
                            if (
                              adultCount > 1 ||
                              childerenCount > 1 ||
                              petsCount > 1
                            ) {
                              totalPrice +=
                                (parseFloat(basePrice) * (adultCount * 3)) /
                                  100 +
                                (parseFloat(basePrice) * (childerenCount * 3)) /
                                  100 +
                                (parseFloat(basePrice) * petsCount) / 100;
                            }
                            
                            return totalPrice.toFixed(2); // Convert back to string with 2 decimal places
                          })()}
                        </span>
                      )} */}
                      {Product.details && (
                        <span className="text-red-500">₹{price}</span>
                      )}
                    </h4>
                    <p className="text-xs text-gray-500 ">
                      Total before taxes.
                    </p>
                  </div>
                  <div className="my-10 rounded-xl border grid grid-cols-2">
                    <div className="p-2 flex flex-col">
                      <h6 className="text-sm text-gray-500">Check-In</h6>
                      <span className="mt-1">
                        {checkIn ? checkIn : "--/--/--"}
                      </span>
                    </div>
                    <div className="p-2 flex flex-col ">
                      <h6 className="text-sm text-gray-500">Check-Out</h6>
                      <span className="mt-1">
                        {checkOut ? checkOut : "--/--/--"}
                      </span>
                    </div>

                    <div className="p-2 col-span-2">
                      <div className="flex justify-between my-3">
                        <div>
                          <p>Adults</p>
                          <p className="text-xs text-gray-400">Age 13+</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          {/* http://www.w3.org/2000/svg */}
                          <svg
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            onClick={(e) => setadultCount(adultCount - 1)}
                          >
                            <rect fill="none" height="256" width="256" />
                            <circle
                              cx="128"
                              cy="128"
                              fill="none"
                              r="96"
                              stroke="#000"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="8"
                            />
                            <line
                              fill="none"
                              stroke="#000"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="8"
                              x1="88"
                              x2="168"
                              y1="128"
                              y2="128"
                            />
                          </svg>
                          <span>{adultCount >= 1 ? adultCount : 1}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="20"
                            height="20"
                            viewBox="0 0 50 50"
                            onClick={(e) => setadultCount(adultCount + 1)}
                          >
                            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex justify-between my-5">
                        <div>
                          <p>Childrens</p>
                          <p className="text-xs text-gray-400">Ages 2–12</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          {/* http://www.w3.org/2000/svg */}
                          <svg
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            onClick={(e) =>
                              setchilderenCount(childerenCount - 1)
                            }
                          >
                            <rect fill="none" height="256" width="256" />
                            <circle
                              cx="128"
                              cy="128"
                              fill="none"
                              r="96"
                              stroke="#000"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="8"
                            />
                            <line
                              fill="none"
                              stroke="#000"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="8"
                              x1="88"
                              x2="168"
                              y1="128"
                              y2="128"
                            />
                          </svg>
                          <span>
                            {childerenCount >= 1 ? childerenCount : 0}
                          </span>
                          <svg
                            onClick={(e) =>
                              setchilderenCount(childerenCount + 1)
                            }
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="20"
                            height="20"
                            viewBox="0 0 50 50"
                          >
                            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex justify-between my-5">
                        <div>
                          <p>Pets</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          {/* http://www.w3.org/2000/svg */}
                          <svg
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            onClick={(e) => setpetsCount(petsCount - 1)}
                          >
                            <rect fill="none" height="256" width="256" />
                            <circle
                              cx="128"
                              cy="128"
                              fill="none"
                              r="96"
                              stroke="#000"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="8"
                            />
                            <line
                              fill="none"
                              stroke="#000"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="8"
                              x1="88"
                              x2="168"
                              y1="128"
                              y2="128"
                            />
                          </svg>
                          <span>{petsCount}</span>
                          <svg
                            onClick={(e) => setpetsCount(petsCount + 1)}
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="20"
                            height="20"
                            viewBox="0 0 50 50"
                          >
                            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full">
                    {/* <button  className="inline"> */}
                    <button className="w-full text-center font-bold bg-gradient-to-r from-red-600 via-red-400 to-pink-300  rounded-lg px-10 py-2 text-white">
                      Reserve
                    </button>
                    {/* </button> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CardDetail;
