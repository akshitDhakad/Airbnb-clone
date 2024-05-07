import React from "react";
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

function CardDetail() {
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
                <button className="text-sm flex items-center gap-x-2 bg-gray-200 px-3 py-2 rounded-xl border-theme-black">
                  <span>
                    <AiTwotoneAppstore />
                  </span>
                  <span>Show all photos</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl m-auto px-4 ">
            <div className="grid grid-cols-10 gap-x-20 ">
              {/* left side  */}
              <div className="col-span-7">
                <div className="flex flex-col gap-y-2 mb-4">
                  <h2 className="text-gray-900 text-2xl font-semibold">
                    Farm stay in Nathwaton Ka Gurha, India
                  </h2>
                  <h3>4 guests2 bedrooms3 beds2 bathrooms</h3>
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
                          className="h-full w-full object-cover object-center "
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
                          className="h-full w-full object-cover object-center "
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
      </main>
    </Layout>
  );
}

export default CardDetail;
