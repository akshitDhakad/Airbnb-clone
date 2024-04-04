import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import PhotoUploader from "./PhotoUploader";
import Details from "./Details";
import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


function UpdateCard() {
  const { state } = useLocation();
   
  const [imageUrl, setImageUrl] = useState("");
  // const [imgURLs, setImgURLs] = useState(new Set());;

  //  handle form submit

  const [title, setTitle] = useState(state.title);
  const [address, setAddress] = useState(state.address);
  const [description, setDescription] = useState(state.description);
  const [imgURLs, setImgURLs] = useState(new Set([...state.imgURLs]));
  const [extras, setExtras] = useState();
  const [extraDetails, setExtradetails] = useState("");
  const [details, setDetails] = useState({
    type: state.details.type,
    beds: state.details.beds,
    bedrooms: state.details.bedrooms,
    guests: state.details.guests,
    price: state.details.price,
    checkin: state.details.checkin,
    checkout: state.details.checkout,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };
  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.name;
    if (event.target.checked) {
      setExtras([...extras, checkboxName]);
    } else {
      setExtras(extras.filter((value) => value !== checkboxName));
    }
  };

  async function ImageURLUpload() {
    if (imageUrl) {
      try {
        const { data } = await axios.patch(
          "http://localhost:3000/image-link-upload",
          { imageUrl: imageUrl }
        );
        setImgURLs((prevURLs) => new Set(prevURLs).add(data.filename));
        // setImgURLs((prevURLs) => [...prevURLs, data.filename]);
        setImageUrl("");
      } catch (error) {
        console.error("Error uploading image URL:", error);
      }
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Prepare the form data
    const formData = {
      title,
      address,
      description,
      imgURLs: Array.from(imgURLs),
      extras,
      details,
      extraDetails,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/add-place",
        formData
      );
      setTitle("");
      setAddress("");
      setDescription("");
      setImgURLs(new Set());
      setExtras([]);
      setExtradetails("");
      setExtras("");
      setDetails({
        type: "",
        beds: "",
        bedrooms: "",
        guests: "",
        price: "",
        checkin: "",
        checkout: "",
      });

      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      alert("Error submitting form:", error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="lg:px-40 sm:px-1 py-10">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12 shadow-2xl p-5">
            {/* Title */}
            <div className="col-span-full">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  autoComplete="title"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Niramay-Wada style Pool villa, forest view &gazebo"
                />
              </div>
            </div>
            {/* Full Address */}
            <div className="col-span-full">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  name="address"
                  id="address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Velhe, Torna-Rajgad, Maharashtra, India"
                />
              </div>
            </div>
            {/* Full Description */}
            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Looking for a romantic and couple-friendly getaway in Panchgani? "
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                * Write a few sentences about Place.
              </p>
            </div>
            {/*************** Photouploader *******************/}
            {/* Links */}

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Upload Photos with links
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  onChange={(e) => setImageUrl(e.target.value)}
                  type="text"
                  name="imageUrl"
                  value={imageUrl}
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Velhe, Torna-Rajgad, Maharashtra, India"
                />
                <button
                  onClick={ImageURLUpload}
                  className="border px-5 bg-blue-600 text-white rounded-lg"
                >
                  Save
                </button>
              </div>
            </div>
            {/* upload with gallery */}
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Upload photos
              </label>
              <div className="flex flex-wrap justify-evenly">
                {Array.from(imgURLs).map((url, index) => (
                  <div className="relative">
                    <div className="absolute right-3 top-3 bg-gray-400 p-1 rounded-full cursor-pointer hover:bg-gray-600 hover:text-white" onClick={()=>console.log(true)}>
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
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </div>

                    <PhotoUploader
                      key={index}
                      url={url}
                      imgURLs={imgURLs}
                      setImgURLs={setImgURLs}
                    />
                  </div>
                ))}

                <PhotoUploader imgURLs={imgURLs} setImgURLs={setImgURLs} />
              </div>
            </div>
            {/* Guests */}
            {/* What this place offers */}
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900 ">
                    What this place offers
                  </legend>
                  <div className="grid lg:grid-cols-4 justify-center md:grid-cols-3 sm:grid-cols-2 mt-6  gap-y-10">
                    {/* ***** wifi ****** */}
                    <div className="relative flex gap-5">
                      <div className="flex h-6 items-center">
                        <input
                          id="wifi"
                          name="wifi"
                          type="checkbox"
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>

                      <div className="text-sm leading-6 flex gap-1">
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
                        <label
                          htmlFor="wifi"
                          className="font-medium text-gray-900"
                        >
                          Wifi
                        </label>
                      </div>
                    </div>
                    {/* ***** Radio ****** */}
                    <div className="relative flex gap-5">
                      <div className="flex h-6 items-center">
                        <input
                          id="radio"
                          name="radio"
                          type="checkbox"
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>

                      <div className="text-sm leading-6 flex gap-1">
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
                        <label
                          htmlFor="radio"
                          className="font-medium text-gray-900"
                        >
                          Radio
                        </label>
                      </div>
                    </div>
                    {/* ***** Tv ****** */}
                    <div className="relative flex gap-5">
                      <div className="flex h-6 items-center">
                        <input
                          id="tv"
                          name="tv"
                          onChange={handleCheckboxChange}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>

                      <div className="text-sm leading-6 flex gap-1">
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
                        <label
                          htmlFor="tv"
                          className="font-medium text-gray-900"
                        >
                          Tv
                        </label>
                      </div>
                    </div>
                    {/* ***** Parking ****** */}
                    <div className="relative flex gap-5">
                      <div className="flex h-6 items-center">
                        <input
                          id="parking"
                          onChange={handleCheckboxChange}
                          name="parking"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>

                      <div className="text-sm leading-6 flex gap-1">
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
                              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                            />
                          </svg>
                        </span>
                        <label
                          htmlFor="parking"
                          className="font-medium text-gray-900"
                        >
                          Free Parking
                        </label>
                      </div>
                    </div>
                    {/****** Security Camers ****** */}
                    <div className="relative flex gap-5">
                      <div className="flex h-6 items-center">
                        <input
                          id="cameras"
                          onChange={handleCheckboxChange}
                          name="cameras"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>

                      <div className="text-sm leading-6 flex gap-1">
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
                              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                            />
                          </svg>
                        </span>
                        <label
                          htmlFor="cameras"
                          className="font-medium text-gray-900"
                        >
                          Security Camers
                        </label>
                      </div>
                    </div>
                    {/* ***** Pets ****** */}
                    <div className="relative flex gap-5">
                      <div className="flex h-6 items-center">
                        <input
                          id="pets"
                          onChange={handleCheckboxChange}
                          name="pets"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>

                      <div className="text-sm leading-6 flex gap-1">
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
                              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                            />
                          </svg>
                        </span>
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-900"
                        >
                          Pets
                        </label>
                      </div>
                    </div>
                    {/* ***** Assistance ****** */}
                    <div className="relative flex gap-5">
                      <div className="flex h-6 items-center">
                        <input
                          id="assistance"
                          onChange={handleCheckboxChange}
                          name="assistance"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>

                      <div className="text-sm leading-6 flex gap-1">
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
                              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                            />
                          </svg>
                        </span>
                        <label
                          htmlFor="assistance"
                          className="font-medium text-gray-900"
                        >
                          Assistance
                        </label>
                      </div>
                    </div>
                    {/* ***** AC ****** */}
                    <div className="relative flex gap-5">
                      <div className="flex h-6 items-center">
                        <input
                          id="ac"
                          onChange={handleCheckboxChange}
                          name="ac"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>

                      <div className="text-sm leading-6 flex gap-1">
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
                              d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                            />
                          </svg>
                        </span>
                        <label
                          htmlFor="ac"
                          className="font-medium text-gray-900"
                        >
                          AC
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            {/* Extra Info Description */}
            <div className="col-span-full">
              <label
                htmlFor="extraDetails"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Extra Details
              </label>
              <div className="mt-2">
                <textarea
                  id="extraDetails"
                  name="extraDetails"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Extra details about place ?"
                  onChange={(e) => setExtradetails(e.target.value)}
                />
              </div>
            </div>
            {/* Baisc details */}
            <div className="col-span-full">
              <Details
                details={details}
                handleInputChange={handleInputChange}
              />
            </div>

            {/* Button */}
            <div className=" mt-6 flex items-center justify-center gap-x-6">
              <button
                type="submit"
                className="w-full rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateCard;
