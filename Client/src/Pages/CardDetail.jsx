import React,{useState} from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { CiHeart } from "react-icons/ci";
import { LuUpload } from "react-icons/lu";
import { AiTwotoneAppstore } from "react-icons/ai";
import { FaFlag } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaSwimmingPool } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaWifi } from "react-icons/fa6";
import { MdPets } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { GiFlexibleLamp } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { GiGrass } from "react-icons/gi";
import { AiFillOpenAI } from "react-icons/ai";
import { AiOutlineFieldTime } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoIosStarOutline } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import Model from "../components/Model";

function CardDetail() {

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <main>
        {/* Img Grid  */}
        <section className="bg-white">
          <div className="max-w-7xl px-4 py-10">
            {/* heading  */}
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                Spend the night in the Ferrari Museum
              </h2>
              <div className="flex items-center gap-x-5">
                <div className="flex items-center gap-x-2 hover:cursor-pointer">
                  <span>
                    <LuUpload className="text-md" />
                  </span>
                  <span className="underline">Share</span>
                </div>
                <div className="flex items-center gap-x-2 hover:cursor-pointer">
                  <span>
                    <CiHeart className="text-xl" />
                  </span>
                  <span className="underline">Save</span>
                </div>
              </div>
            </div>
            {/* image grid  */}
            <div className="relative">
              <div className="h-96 grid grid-cols-2 gap-2  rounded-2xl overflow-hidden">
                <div className="h-96 w-full hover:cursor-pointer hover:opacity-90">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center border-theme-white"
                    src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg?im_w=960"
                    alt={"Havenhub"}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-full w-full hover:cursor-pointer hover:opacity-90">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center border-theme-white"
                      src="https://plus.unsplash.com/premium_photo-1683917068755-c2890e4824e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyYm5ifGVufDB8fDB8fHww"
                      alt={"Havenhub"}
                    />
                  </div>
                  <div className="h-full w-full hover:cursor-pointer hover:opacity-90">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center border-theme-white"
                      src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8fDB8fHww"
                      alt={"Havenhub"}
                    />
                  </div>
                  <div className="h-full w-full hover:cursor-pointer hover:opacity-90">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center border-theme-white"
                      src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWlyYm5ifGVufDB8fDB8fHww"
                      alt={"Havenhub"}
                    />
                  </div>
                  <div className="h-full w-full hover:cursor-pointer hover:opacity-90">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center border-theme-white"
                      src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcmJuYnxlbnwwfHwwfHx8MA%3D%3D"
                      alt={"Havenhub"}
                    />
                  </div>
                </div>
              </div>
              {/* buttons  */}
              <div className="absolute bottom-10 right-5">
                <button
                  onClick={openModal}
                  className="text-sm flex items-center gap-x-2 bg-gray-200 px-3 py-2 rounded-xl border-theme-black"
                >
                  <span>
                    <AiTwotoneAppstore />
                  </span>
                  <span>Show all photos</span>
                </button>
                {/* Modle  */}
                {isModalOpen && (
                  <Model>
                    <div className="bg-white h-screen w-100vw text-black">
                      <div className="max-w-7xl px-4 flex flex-col">
                        <div className="flex py-2 justify-between">
                          <button onClick={closeModal}>
                            <FaAngleLeft />
                          </button>
                          <div>sasda</div>
                        </div>
                        <div className="flex-grow"></div>
                      </div>
                    </div>
                  </Model>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* What this place offers */}
        <section className="bg-white">
          <div className="max-w-7xl m-auto px-4 ">
            <div className="grid grid-cols-10 gap-x-20 ">
              {/* left side  */}
              <div className="col-span-7">
                <div className="flex flex-col gap-y-2 mb-4">
                  <h2 className="text-gray-900 text-2xl font-semibold">
                    Farm stay in Nathwaton Ka Gurha, India
                  </h2>
                  <h3>4 guests . 2 bedrooms3 beds2 bathrooms</h3>
                  <p className="flex items-center gap-x-2">
                    <FaStar />
                    <span>No reviews yet No reviews yet</span>
                  </p>
                </div>
                <div className="w-full border border-gray-700"></div>
                <div className="flex gap-x-2 items-end py-3">
                  <div className="h-10 w-10 rounded-full ">
                    <img
                      className="h-full w-full object-cover object-center rounded-full"
                      src="https://a0.muscache.com/im/pictures/user/User-531063672/original/669d6c30-a5e9-4ec9-b923-acf8ee81f925.jpeg?im_w=240"
                      alt="Havenhub"
                    />
                  </div>
                  <div>
                    <h2 className="text-sm">Hosted by Bhanwar Singh</h2>
                    <p className="text-xs text-gray-700">8 months hosting</p>
                  </div>
                </div>
                <div className="w-full border border-gray-700"></div>
                <div className="flex gap-x-2 items-end py-3">
                  <IoMdCheckmarkCircleOutline className="text-4xl" />

                  <div>
                    <h2 className="text-sm">Self check-in</h2>
                    <p className="text-xs text-gray-700">
                      Check yourself in with the lockbox.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2 items-end py-3">
                  <FaSwimmingPool className="text-4xl" />
                  <div>
                    <h2 className="text-sm">Hosted by Bhanwar Singh</h2>
                    <p className="text-xs text-gray-700">8 months hosting</p>
                  </div>
                </div>
                <div className="w-full border border-gray-700"></div>
                <div className="py-4">
                  <div className="mb-3">
                    <h2 className="text-2xl text-gray-900">
                      Where you'll sleep
                    </h2>
                  </div>
                  <div className="flex gap-x-5 items-end ">
                    <div>
                      <div className="mb-2 h-52 w-80 border shadow-md rounded-md overflow-hidden">
                        <img
                          loading="lazy"
                          className="h-full w-full object-cover object-center shadow-md rounded-md"
                          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAzNTE5ODE2NzUxNTY4NDU5Mw%3D%3D/original/93039c37-dadd-40e4-a3e6-969805cb02ce.jpeg?im_w=720"
                          alt="Havenhub"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl">Bedroom 1</h3>
                        <p className="text-xs">1 King bed</p>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 h-52 w-80 border shadow-md rounded-md overflow-hidden">
                        <img
                          className="h-full w-full object-cover object-center shadow-xl rounded-md"
                          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAzNTE5ODE2NzUxNTY4NDU5Mw%3D%3D/original/14c569fb-ebc3-4035-9192-0c40dafaece3.jpeg?im_w=720"
                          alt="Havenhub"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl">Bedroom 2</h3>
                        <p className="text-xs">1 king bed, 1 sofa bed</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full border border-gray-700"></div>
                <div className="py-4">
                  <div className="max-w-xl grid grid-cols-2 gap-4">
                    <div className="col-span-2 mb-3">
                      <h3 className="text-2xl text-gray-900">
                        What this place offers
                      </h3>
                    </div>
                    {/* Kitchen */}
                    <div className="flex items-center gap-x-2">
                      <div>
                        <TbToolsKitchen2 className="text-2xl text-gray-800" />
                      </div>
                      <div>
                        <p className="">Kitchen</p>
                      </div>
                    </div>
                    {/* wifi */}
                    <div className="flex items-center gap-x-2">
                      <div>
                        <FaWifi className="text-2xl text-gray-800" />
                      </div>
                      <div>
                        <p className="">Kitchen</p>
                      </div>
                    </div>
                    {/* Dedicated workspace */}
                    <div className="flex items-center gap-x-2">
                      <div>
                        <GiFlexibleLamp className="text-2xl text-gray-800" />
                      </div>
                      <div>
                        <p className="">Dedicated workspace</p>
                      </div>
                    </div>
                    {/* Free parking on premises */}
                    <div className="flex items-center gap-x-2">
                      <div>
                        <FaCar className="text-2xl text-gray-800" />
                      </div>
                      <div>
                        <p className="">Free parking on premises</p>
                      </div>
                    </div>
                    {/* Pool*/}
                    <div className="flex items-center gap-x-2">
                      <div>
                        <FaSwimmingPool
                          Wifi
                          className="text-2xl text-gray-800"
                        />
                      </div>
                      <div>
                        <p className="">Pool</p>
                      </div>
                    </div>
                    {/* Pets allowed */}
                    <div className="flex items-center gap-x-2">
                      <div>
                        <MdPets className="text-2xl text-gray-800" />
                      </div>
                      <div>
                        <p className="">Pets allowed</p>
                      </div>
                    </div>
                    {/* Air conditioning */}
                    <div className="flex items-center gap-x-2">
                      <div>
                        <TbAirConditioning className="text-2xl text-gray-800" />
                      </div>
                      <div>
                        <p className="">Air conditioning </p>
                      </div>
                    </div>
                    {/* Garden */}
                    <div className="flex items-center gap-x-2">
                      <div>
                        <GiGrass className="text-2xl text-gray-800" />
                      </div>
                      <div>
                        <p className="">Garden</p>
                      </div>
                    </div>
                    {/* Carbon monoxide alarm */}
                    <div className="flex items-center gap-x-2">
                      <div>
                        <AiFillOpenAI className="text-2xl text-gray-800" />
                      </div>
                      <div>
                        <p className="">Carbon monoxide alarm</p>
                      </div>
                    </div>
                    {/* Smoke alarm*/}
                    <div className="flex items-center gap-x-2">
                      <div>
                        <AiOutlineFieldTime className="text-2xl text-gray-800" />
                      </div>
                      <div>
                        <p className="">Smoke alarm</p>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <button className="py-3 px-5 rounded-xl border border-black">
                        Show all 11 amenities
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* right side */}
              <div className="col-span-3">
                <div className="p-4 border-theme-gray shadow-lg border-base-700 rounded-2xl">
                  {/* heading  */}
                  <div className="mb-3">
                    <h2 className="text-xl text-gray-800">
                      Add dates for prices
                    </h2>
                  </div>
                  {/* content  */}
                  <div className="mb-3 border-theme-gray grid grid-cols-2 rounded-xl">
                    <div className="p-2 border-b border-e border-gray-800">
                      <p className="uppercase text-xs">check In</p>
                      <p className="text-gray-800 text-sm">Add date</p>
                    </div>
                    <div className="p-2 border-b border-gray-800">
                      <p className="uppercase text-xs">check In</p>
                      <p className="text-gray-800 text-sm">Add date</p>
                    </div>
                    <div className="col-span-2 px-3">
                      <select
                        aria-placeholder="guest"
                        className="bg-white h-12 w-full hover:cursor-pointer border-none outline-none"
                        name=""
                        id=""
                      >
                        <option className="py-2" value="">
                          <p>Adult</p>
                          <p>Age 13+</p>
                        </option>
                        <option value="">
                          <span>Children</span>
                          <span>Ages 2-12</span>
                        </option>
                        <option value="">
                          <span>Infants</span>
                          <span>Under 2</span>
                        </option>
                        <option value="">
                          <span>Pets</span>
                          <span>Bringing a service animal?</span>
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <button className="w-full bg-gradient-to-r from-red-900 via-red-600 to-pink-500 py-3 text-center rounded-xl text-white font-semibold">
                      Check availability
                    </button>
                  </div>
                </div>
                <div className="mt-3 text-gray-700 text-md text-center underline flex items-center gap-x-4 justify-center">
                  <span>
                    <FaFlag />
                  </span>
                  <span>Report this listing</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* No reviews (yet) */}
        <section className="bg-white">
          <div className="max-w-7xl py-10 px-4">
            <div className="mb-3">
              <h3 className="mb-3 text-2xl text-gray-900">No reviews (yet)</h3>
            </div>
            <div className="flex items-start gap-x-2">
              <div>
                <IoIosStarOutline className="text-2xl" />
              </div>
              <div>
                <p className="  gap-x-2">
                  This host has 768 reviews for other places <br /> to stay.{" "}
                  <Link className="underline text-md font-semibold">
                    Show other reviews.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Meet your Host */}
        <section className="bg-white">
          <div className="max-w-7xl m-auto px-4 pt-10 pb-20">
            <h3 className="mb-3 text-2xl text-gray-900">Meet your Host</h3>
            <div className="bg-gray-200 border shadow-sm rounded-2xl py-5 px-10">
              <div className="grid grid-cols-5 gap-x-10">
                <div className="col-span-2">
                  <div className="mb-3 border shadow-md bg-white rounded-3xl grid grid-cols-5 p-5">
                    <div className="col-span-4">
                      <div className="h-28 w-28 m-auto rounded-full overflow-hidden">
                        <img
                          loading="lazy"
                          className="h-full w-full object-cover object-top"
                          src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhemVyfGVufDB8fDB8fHww"
                          alt="Havenhub Host img"
                        />
                      </div>
                      <div>
                        <h3 className="text-3xl mt-2 text-center">Karan</h3>
                        <p className="text-center">Superhost</p>
                      </div>
                    </div>

                    <div className="col-span-1 flex flex-col items-start gap-2">
                      <div>
                        <p className="text-xl  font-semibold">768</p>
                        <p className="text-xs">Reviws</p>
                      </div>
                      <div className="w-full border border-gray-600"></div>
                      <div>
                        <p className="text-xl  font-semibold">4.732</p>
                        <p className="text-xs">Rating</p>
                      </div>
                      <div className="w-full border border-gray-600"></div>
                      <div>
                        <p className="text-xl  font-semibold">4.732</p>
                        <p className="text-xs">Rating</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 flex gap-x-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                        />
                      </svg>
                    </div>
                    <div className="">
                      Where I went to school: International College Spain
                    </div>
                  </div>
                  <div className="mb-2 flex gap-x-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                        />
                      </svg>
                    </div>
                    <div className="">
                      Where I went to school: International College Spain
                    </div>
                  </div>
                  <div className="mb-">
                    <p className="text-sm mb-2">
                      Originally from India, raised in Spain and now living and
                      loving the Maldives! I love the ocean and finding
                    </p>
                    <button className="underline flex items-center gap-x-1">
                      Show more <RiArrowRightSLine />
                    </button>
                  </div>
                </div>
                {/* right side */}
                <div className="col-span-3 flex flex-col items-start gap-y-5">
                  <h3 className="font-semibold text-2xl">
                    Karan is a Superhost
                  </h3>
                  <p>
                    Superhosts are experienced, highly rated hosts who are
                    committed to providing great stays for guests.
                  </p>
                  <h3 className="mt-2 font-semibold">Host details</h3>
                  <ul>
                    <li>Response rate: 100%</li>
                    <li>Responds within a few hours</li>
                  </ul>
                  <div className="flex items-center">
                    <button className="bg-gray-900 border border-black shadow-md hover:bg-gray-800 py-3 px-4 text-white font-semibold rounded-xl">
                      Message Host
                    </button>
                  </div>
                  <div className="w-full border border-gray-600"></div>
                  <div className="flex item-start gap-x-2">
                    <div className="h-4">
                      <img
                        loading="lazy"
                        className="h-full object-cover object-center"
                        src="/assets/logo/logo.png"
                        alt="havenhub"
                      />
                    </div>
                    <div className="text-xs">
                      To protect your payment, never transfer money or
                      communicate outside of the Airbnb website or app.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Things to know */}
        <section className="bg-white">
          <div className="max-w-7xl m-auto px-4 pt-10 pb-20">
            <h3 className="mb-3 text-2xl text-gray-900">
              What this place offers
            </h3>
            <div className="grid grid-cols-3">
              <div>
                <ul className="flex flex-col gap-y-1">
                  <li className="text-lg">House rules</li>
                  <li className="text-gray-800 font-thin">2 guests maximum</li>
                  <li className="text-gray-800 font-thin">
                    Self check-in with building staff
                  </li>
                  <li className="mt-2">
                    <button className="underline flex items-center gap-x-1">
                      Show more <RiArrowRightSLine />
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="flex flex-col gap-y-1">
                  <li className="text-lg">Safety & property</li>
                  <li className="text-gray-800 font-thin">
                    Carbon monoxide alarm not reported
                  </li>
                  <li className="text-gray-800 font-thin">Smoke alarm</li>
                  <li className="mt-2">
                    <button className="underline flex items-center gap-x-1">
                      Show more <RiArrowRightSLine />
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="flex flex-col gap-y-1">
                  <li className="text-lg">Cancellation policy</li>
                  <li className="text-gray-800 font-thin">
                    This reservation is non-refundable.
                  </li>
                  <li className="text-gray-800 font-thin">
                    Review the Host’s full cancellation policy which applies
                    even if you cancel for illness or disruptions caused by
                    COVID-19.
                  </li>
                  <li className="mt-2">
                    <button className="underline flex items-center gap-x-1">
                      Show more <RiArrowRightSLine />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumbs */}
        <section className="bg-gray-100">
          <div className="max-w-7xl px-4 py-8 border ">
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link to={"/"}>Airbnb</Link>
                </li>
                <li>
                  <Link to={"/"}>Maldives</Link>
                </li>
                <li>
                  <Link to={"/"}>Alifu Dhaalu Atoll</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default CardDetail;
